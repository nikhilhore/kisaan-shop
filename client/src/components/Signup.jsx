function Signup() {
    return <>
        <div className="row mt-5">
            <div className="col-md-6 m-auto">
                <div className="card card-body">
                    <h1 className="text-center m-2">
                        <i className="fas fa-user-plus"></i> SignUp
                    </h1>
                    <form action="/signup" className="m-2" method="POST">
                        <div className="form-group m-1 d-flex justify-content-between">
                            <div className="form-group">
                                <label for="firstName">First Name</label>
                                <input type="name" id="firstName" name="firstName" className="form-control"
                                    placeholder="Enter first name" />
                            </div>
                            <div className="form-group">
                                <label for="lastName">Last Name</label>
                                <input type="name" id="lastName" name="lastName" className="form-control"
                                    placeholder="Enter last name" />
                            </div>
                        </div>
                        <div className="form-group m-1">
                            <label for="email">Email</label>
                            <input type="email" id="email" name="email" className="form-control" placeholder="Enter Email" />
                        </div>
                        <div className="form-group m-1">
                            <label for="phone">Phone</label>
                            <input type="number" id="phone" name="phone" className="form-control" placeholder="Enter phone number" />
                        </div>
                        <div className="form-group m-1">
                            <label for="password">Password</label>
                            <input type="password" id="password" name="password" className="form-control"
                                placeholder="Create Password" />
                        </div>
                        <div className="form-group m-1">
                            <label for="cpassword">Confirm Password</label>
                            <input type="password" id="cpassword" name="cpassword" className="form-control"
                                placeholder="Confirm Password" />
                        </div>
                        <div className="text-center d-flex justify-content-between m-1 mt-2">
                            <button type="submit" className="btn btn-primary btn-block">
                                SignUp
                            </button>
                            <p className="lead m-1">Already have an Account? <a href="/login">Login</a></p>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    </>
}

export default Signup;