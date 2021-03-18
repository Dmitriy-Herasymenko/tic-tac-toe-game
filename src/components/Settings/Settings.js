import React from 'react';
import './settings.css';
import {Link} from "react-router-dom";

const state = {
    board: '9',
    game: 'computer',
};

const saveLocalStorage = () => {
    localStorage.setItem('board', state.board);
    localStorage.setItem('game', state.game);
};


const Settings = () => {
    const onChangeBoard = (e) => {
        state.board = e.target.value;
    };

    const onChangeGame = (e) => {
        state.game = e.target.value;
    };

    return (
        <div className='wrapper'>
            <div className="settings">
                <h3>Board Choice</h3>
                <hr/>
                <div className='board-chose'>
                    <input type="radio" value="9" name="board" onChange={onChangeBoard}/> Small
                    <input type="radio" value="25" name="board" onChange={onChangeBoard}/> Large
                </div>
                <h3>Versus Mode</h3>
                <hr/>
                <div className='game-chose'>
                    <input type="radio" name="game" value='computer' onChange={onChangeGame}/> Computer
                    <input type="radio" name="game" value='friend' onChange={onChangeGame}/> Friend
                </div>
                <Link to='/' className='settings-btn' onClick={saveLocalStorage}>Save</Link>
                <Link to='/' className='settings-btn'>Exit</Link>
            </div>
        </div>
    )
};

export default Settings;