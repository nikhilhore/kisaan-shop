import React from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';

function Signup() {

    React.useEffect(() => {
        const signupBtn = document.getElementById('signup-btn');

        signupBtn.addEventListener('click', async () => {
            const firstName = document.getElementById('firstName').value;
            const lastName = document.getElementById('lastName').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const password = document.getElementById('password').value;
            const cpassword = document.getElementById('cpassword').value;
            await axios.post('/signup', { firstName, lastName, email, phone, password, cpassword });
            window.location.href = '/login';
        });

    }, []);

    return <>
        <div className="mt-5">
            <div className="col-md-6 m-auto">
                <div className="card card-body bg-dark">
                    <h1 className="text-center m-2">
                        <i className="fas fa-user-plus"></i> SignUp
                    </h1>
                    <div className="m-2">
                        <div className="form-group m-1 d-flex justify-content-between">
                            <div className="form-group">
                                <label htmlFor="firstName">First Name</label>
                                <input type="name" id="firstName" name="firstName" className="form-control"
                                    placeholder="Enter first name" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="lastName">Last Name</label>
                                <input type="name" id="lastName" name="lastName" className="form-control"
                                    placeholder="Enter last name" />
                            </div>
                        </div>
                        <div className="form-group m-1">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="email" className="form-control" placeholder="Enter Email" />
                        </div>
                        <div className="form-group m-1">
                            <label htmlFor="phone">Phone</label>
                            <input type="phone" id="phone" name="phone" className="form-control" placeholder="Enter phone number" />
                        </div>
                        <div className="form-group m-1">
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" name="password" className="form-control"
                                placeholder="Create Password" />
                        </div>
                        <div className="form-group m-1">
                            <label htmlFor="cpassword">Confirm Password</label>
                            <input type="password" id="cpassword" name="cpassword" className="form-control"
                                placeholder="Confirm Password" />
                        </div>
                        <div className="text-center d-flex justify-content-between m-1 mt-2">
                            <button type="submit" id="signup-btn" className="btn btn-primary btn-block">
                                SignUp
                            </button>
                            <p className="lead m-1">Already have an Account? <Link to='/login'>Login</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default Signup;