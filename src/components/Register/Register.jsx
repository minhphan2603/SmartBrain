import React from 'react';
import Axios from 'axios';

export default function Register({ onRegisterSubmit }) {
    return (
        <article className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
            <main className="pa4 black-80">
                <div className="measure ">
                    <fieldset id="register" className="ba b--transparent ph0 mh0">
                        <legend className="f4 fw6 ph0 mh0">Register</legend>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6" htmlFor="name-register">Name</label>
                            <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="name-register" id="name-register" />
                        </div>
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
                        <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Register"
                            onClick={() => {
                                Axios({
                                    method: "post",
                                    url: "http://localhost:5000/register",
                                    data: {
                                        name: document.getElementById('name-register').value,
                                        email: document.getElementById('email-address').value,
                                        password: document.getElementById('password').value
                                    },
                                })
                                    .then(res => {
                                        onRegisterSubmit(res.data.user);
                                    })
                                    .catch(() => {
                                        alert('User existed');
                                    })
                            }} />
                    </div>

                </div>
            </main>
        </article>
    )
}
