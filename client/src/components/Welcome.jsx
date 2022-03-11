import { Link } from 'react-router-dom';

function Welcome() {
    return <>
        <div className="row mt-5">
            <div className="col-md-6 m-auto">
                <div className="card card-body text-center">
                    <h3>Welcome smart farmers</h3>
                    <div className="text-center m-2"><img src="favicon.ico" alt="Kisaan-logo" width={150} height={150} /></div>
                    <p className="m-2">Create an account or login</p>
                    <Link to="/signup" className="btn btn-primary btn-block m-1">Signup</Link>
                    <Link to="/login" className="btn btn-secondary btn-block m-1">Login</Link>
                </div>
            </div>
        </div>
    </>
}

export default Welcome;