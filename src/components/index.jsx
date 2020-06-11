import React from 'react';
import { Link } from 'react-router-dom';


const MainPage = () => {
    return (
        <div>
            <h3>Welcome to the Main Page!</h3>
            <Link to="/contact">Contact</Link>
        </div>
    );
};

export default MainPage;