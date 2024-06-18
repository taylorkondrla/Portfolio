// Loading.js
import React from 'react';
import './Loading.css'; // Import CSS for the loading component
import WindowsLoading from '../images/windowsloading.png';

const Loading = () => {
    return (
        <div className="loading">
            <img className='windowsLoading' src={WindowsLoading} alt='windows loading'/>
            <h1>Loading...</h1>
            <div className="loader">
                <div className="item"></div>
            </div>
        </div>
    );
};

export default Loading;
