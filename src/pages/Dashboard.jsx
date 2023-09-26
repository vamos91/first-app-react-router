import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from "react-router-dom";

const Dashboard = () => {
    const [isConnect, setIsConnected] = useState(true)
    const navigate = useNavigate();
    useEffect(() => {
        if(!isConnect){
            navigate('/signin')
        }
    })
    return (
        <div>
            dashboard
            <Link to="/">Back to home</Link>
        </div>
    );
};

export default Dashboard;