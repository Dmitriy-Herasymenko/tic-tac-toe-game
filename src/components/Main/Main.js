import React from 'react';
import './main.css';
import {Link} from "react-router-dom";


const Main = () => {
    return (
        <div className='wrapper'>
            <div className="settings">
                <h1>Tic-tac-toe</h1>
                <Link to='/game' className='settings-btn'>New Game</Link>
                <Link to='/settings' className='settings-btn'>Settings</Link>
            </div>
        </div>
    )
}

export default Main;