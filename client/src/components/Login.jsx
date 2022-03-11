function Login() {
    return <>
        <div className="row mt-5">
            <div className="col-md-6 m-auto">
                <div className="card card-body">
                    <h1 className="text-center m-2"><i className="fas fa-sign-in-alt"></i> Login</h1>
                    <form action="/login" className="m-2" method="POST">
                        <div className="form-group m-1">
                            <label for="email">Email</label>
                            <input type="email" id="email" name="email" className="form-control" placeholder="Enter Email" />
                        </div>
                        <div className="form-group m-1">
                            <label for="password">Password</label>
                            <input type="password" id="password" name="password" className="form-control"
                                placeholder="Enter Password" />
                        </div>
                        <div className="text-center d-flex justify-content-between m-1 mt-2">
                            <button type="submit" className="btn btn-primary btn-block">Login</button>
                            <p className="lead m-1">
                                No Account? <a href="/signup">SignUp</a>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </>
}

export default Login;