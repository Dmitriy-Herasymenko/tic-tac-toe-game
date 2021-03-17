import React from 'react';
import './settings.css';
import {Link} from "react-router-dom";

const state = {
    board: 'small',
};
const saveLocalStorage = () => {
    localStorage.setItem('board', state.board);
};

const Settings = () => {
    return (
        <div className='wrapper'>
            <div className="settings">
                <h1>Chose board</h1>
                <hr/>
                <div className='board-chose'>
                    <input type="radio" value="9" name="gender"  onClick={() => state.board = 9}/> Small
                    <input type="radio" value="25" name="gender" onClick={() => state.board = 25}/> Large
                </div>
                <Link to='/' className='settings-btn' onClick={saveLocalStorage}>Save</Link>
                <Link to='/' className='settings-btn'>Exit</Link>
            </div>
        </div>
    )
};

export default Settings;