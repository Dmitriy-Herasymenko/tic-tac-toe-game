import React, {useState} from 'react';
import './game.css';
import Board from "../Board/Board";

const Game = () => {
    return (
        <div className='wrapper'>
            < Board/>
        </div>
    )
}

export default Game