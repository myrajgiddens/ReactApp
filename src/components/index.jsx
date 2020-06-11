import React from 'react';
import { Link } from 'react-router-dom';


const MainPage = () => {
    return (
        <div>
            <h3>welcome to the main page</h3>
            <Link to="/contact">Contact</Link>
        </div>
    );
};

export default MainPage;