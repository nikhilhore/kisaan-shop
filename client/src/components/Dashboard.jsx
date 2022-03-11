import React from "react";
import axios from 'axios';

function Dashboard(props) {

    const { user } = props;
    React.useEffect(() => {
        const logoutBtn = document.getElementById('logout-btn');

        logoutBtn.addEventListener('click', async () => {
            await axios.get('/logout');
            window.location.href = '/';
        });

    }, []);

    return <>
        <div className="mt-5">
            <div className="col-md-6 m-auto">
                <div className="card card-body text-center bg-dark">
                    <h1 className="mt-3">Dashboard</h1>
                    <p className="lead m-3">Welcome {user.firstName}</p>
                </div>
            </div>
        </div>
    </>
}

export default Dashboard;