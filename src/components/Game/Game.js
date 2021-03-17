import React, {useState} from 'react';
import './game.css';
import Board from "../Board/Board";
import Status from "../Status/Status";
import {calculateWinner} from "../../utils";
import {Link} from "react-router-dom";


const Game = () => {
    const getBoardSize = +localStorage.getItem('board');
    const [board, setBoard] = useState(Array(getBoardSize).fill(null));
    const [xIsNext, setXIsNext] = useState(true);

    const winner = calculateWinner(board);

    const handleClick = index => {
        const boards = [...board];
        if (winner || boards[index]) return;
        boards[index] = xIsNext ? 'X' : 'O';
        setBoard(boards);
        setXIsNext(!xIsNext);
    };
    const resetGame = () => {
        setBoard(Array(getBoardSize).fill(null))
    };

    return (
        <div className='wrapper'>
            <Status winner={winner} step={xIsNext} board={board}/>
            <Board squares={board} click={handleClick}/>
            {winner ? <button className='settings-btn' onClick={resetGame}>Play again</button> : <span/>}
            <Link to='/main' className='settings-btn'>Exit Game</Link>

        </div>
    )
};

export default Game;