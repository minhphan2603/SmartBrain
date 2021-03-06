import React from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import Rank from './components/Rank/Rank';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Signin from './components/Signin/Signin';
import Register from './components/Register/Register';
import Axios from 'axios';

const app = new Clarifai.App({
	apiKey: 'a688911c4d414dd7bfadec66bd593661'
});

class App extends React.Component {

	constructor() {
		super();
		this.state = {
			input: '',
			faceBoxes: [],
			route: 'signin',
			user: {}
		}
	}

	// onInputChange = (event) => {
	// 	console.log(event.target.value);
	// }

	onSubmit = () => {
		this.setState({
			input: document.getElementById('input').value,
			faceBoxes: []
		});
		// console.log(document.getElementById('input').value);
		app.models.predict("a403429f2ddf4b49b307e318f00e528b", document.getElementById('input').value)
			.then(
				function (response) {
					const width = document.getElementById('facesImg').width;
					const height = document.getElementById('facesImg').height;
					if (response.outputs[0].data.regions !== undefined) {
						return response.outputs[0].data.regions.map(data => {
							return {
								top: data.region_info.bounding_box.top_row * height,
								left: data.region_info.bounding_box.left_col * width,
								bottom: (1 - data.region_info.bounding_box.bottom_row) * height,
								right: (1 - data.region_info.bounding_box.right_col) * width
							}
						})
					} else return [];
				})
			.then(faceBoxes => {
				Axios({
					method: "put",
					url: `http://localhost:5000/${this.state.user.email}`
				})
					.then(res => {
						this.setState({
							faceBoxes: faceBoxes,
							user: res.data.user
						});
					})
					.catch(() => {
						alert('User existed');
					})
			})
			.catch(err => console.log('loi cmnr hahah', err))

	}

	onChangeRoute = (route) => {
		this.setState({
			input: '',
			faceBoxes: [],
			route,
			user: {}
		})
	}

	onSignInOrRegisterSubmit = (user) => {
		this.setState({
			route: 'home',
			user
		})
	}

	render() {
		return (
			<div className="App">
				<Particles className='particles'
					params={{
						particles: {
							number: {
								value: 60,
								density: {
									enable: true,
									value_area: 1000
								}
							}
						}
					}}
				/>
				<Navigation onChangeRoute={this.onChangeRoute} route={this.state.route} />
				{this.state.route === 'signin' ?
					<Signin onSignInSubmit={this.onSignInOrRegisterSubmit}/> :
					(this.state.route === 'register' ?
						<Register onRegisterSubmit={this.onSignInOrRegisterSubmit} /> :
						<div>
							<Logo />
							<Rank name={this.state.user.name} rank={this.state.user.rank}/>
							<ImageLinkForm
								// onInputChange={this.onInputChange}
								onSubmit={this.onSubmit}
							/>
							<FaceRecognition imageUrl={this.state.input} faceBoxes={this.state.faceBoxes} />
						</div>
					)
				}
			</div>
		);
	}
}

export default App;
