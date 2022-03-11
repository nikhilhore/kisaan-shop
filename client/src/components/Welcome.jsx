import { Link } from 'react-router-dom';

function Welcome() {
    return <>
        <div className="row mt-5">
            <div className="col-md-6 m-auto">
                <div className="card card-body text-center">
                    <h1><i className="fab fa-node-js fa-3x"></i></h1>
                    <p>Create an account or login</p>
                    <Link to="/signup" className="btn btn-primary btn-block m-1">Signup</Link>
                    <Link to="/login" className="btn btn-secondary btn-block m-1">Login</Link>
                </div>
            </div>
        </div>
    </>
}

export default Welcome;