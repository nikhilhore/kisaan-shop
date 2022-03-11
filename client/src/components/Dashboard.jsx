import React from "react";
import { Link } from 'react-router-dom';
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
        <h1 className="mt-3">Dashboard</h1>
        <p className="lead m-3">Welcome {user.firstName}</p>
        <button type="submit" id="logout-btn" className="btn btn-primary btn-block">Logout</button>
    </>
}

export default Dashboard;