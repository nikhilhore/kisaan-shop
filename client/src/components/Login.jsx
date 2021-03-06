import React from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';

function Login() {

    React.useEffect(() => {
        const loginBtn = document.getElementById('login-btn');

        loginBtn.addEventListener('click', async () => {
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            await axios.post('/login', { email, password });
            window.location.href = '/';
        });

    }, []);

    return <>
        <div className="mt-5">
            <div className="col-md-6 m-auto">
                <div className="card card-body bg-dark">
                    <h1 className="text-center m-2"><i className="fas fa-sign-in-alt"></i> Login</h1>
                    <div className="m-2">
                        <div className="form-group m-1">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="email" className="form-control" placeholder="Enter Email" />
                        </div>
                        <div className="form-group m-1">
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" name="password" className="form-control"
                                placeholder="Enter Password" />
                        </div>
                        <div className="text-center d-flex justify-content-between m-1 mt-2">
                            <button type="submit" id="login-btn" className="btn btn-primary btn-block">Login</button>
                            <p className="lead m-1">
                                No Account? <Link to="/signup">Signup</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default Login;