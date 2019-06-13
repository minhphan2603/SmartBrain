import React from 'react'
import Axios from 'axios';

export default function Signin({ onSignInSubmit }) {
    return (
        <article className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
            <main className="pa4 black-80">
                <div className="measure ">
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                        <legend className="f4 fw6 ph0 mh0">Sign In</legend>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                            <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address" id="email-address" />
                        </div>
                        <div className="mv3">
                            <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                            <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password" id="password" />
                        </div>
                    </fieldset>
                    <div >
                        <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Sign in"
                            onClick={() => {
                                Axios({
                                    method: "post",
                                    url: "http://localhost:5000/signin",
                                    data: {
                                        email: document.getElementById('email-address').value,
                                        password: document.getElementById('password').value
                                    },
                                    // proxy: {
                                    //     host: 'localhost',
                                    //     port: 5000
                                    // }
                                })
                                    .then(res => {
                                        onSignInSubmit(res.data.user);
                                    })
                                    .catch(() => {
                                        alert('wrong email or password')
                                    })
                            }} />
                    </div>

                </div>
            </main>
        </article>
    )
}
