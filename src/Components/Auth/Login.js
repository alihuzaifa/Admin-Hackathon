import React from 'react';
import "../Style/Register.css"

const Login = () => {
    return (
        <>
            <div className='form-container'>
                <div className="form">
                    <div className="title">Welcome</div>
                    <div className="subtitle">Let's login into your account</div>

                    <div className="input-container ic2">
                        <input id="email" className="input" type="text" placeholder=" " />
                        <div className="cut cut-short" />
                        <label htmlFor="email" className="placeholder">Email
                        </label></div>
                    <div className="input-container ic2">
                        <input id="password" className="input" type="text" placeholder=" " />
                        <div className="cut cut-short" />
                        <label htmlFor="password" className="placeholder">Password
                        </label></div>
                    <button type="text" className="submit">submit</button>
                </div>
            </div>
        </>
    )
}

export default Login