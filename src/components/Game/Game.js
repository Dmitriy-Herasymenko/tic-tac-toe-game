import React, {useState} from 'react';
import './game.css';
import Board from "../Board/Board";
import {calculateWinner} from "../../utils";
import {Link} from "react-router-dom";


const Game = () => {
    const gameInfo = {
        xWin: 0,
        oWin: 0
    };
    const [info, setInfo] = useState(gameInfo);

    const getBoardSize = +localStorage.getItem('board');
    const [board, setBoard] = useState(Array(getBoardSize).fill(null));
    const [xIsNext, setXIsNext] = useState(true);

    const winner = calculateWinner(board);

    const handleClick = index => {
        const boards = [...board];
        if(winner || boards[index]) return;
        boards[index] = xIsNext ? 'X' : 'O';
        setBoard(boards);
        setXIsNext(!xIsNext);
    };

    const resetGame = () => {
        setBoard(Array(getBoardSize).fill(null))
    };

    return (
        <div className='wrapper'>
            <Link to='/main' className='settings-btn'>Exit Game</Link>
            <button className='settings-btn' onClick={resetGame}>Reset Game</button>
            <p className='info'>
                { winner ? 'Winner ' + winner : 'Now step ' + (xIsNext ? 'X' : 'O')}
            </p>
            <Board squares={board} click={handleClick}/>
        </div>
    )
}

export default Game