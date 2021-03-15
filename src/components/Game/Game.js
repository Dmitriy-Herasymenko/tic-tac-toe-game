import React, {useState} from 'react';
import './game.css';
import Board from "../Board/Board";
import {calculateWinner} from "../../utils";

const Game = () => {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);
    const winner = calculateWinner(board);

    const handleClick = index => {
        const boards = [...board];

        if(winner || boards[index]) return;
        boards[index] = xIsNext ? 'x' : 'o';
        setBoard(boards);
        setXIsNext(!xIsNext);
    }

    const newGame = () => {
        return (
            <button className='start_btn' onClick={() => setBoard(Array(9).fill(null))}>Reset Game</button>
        )
    }

    return (
        <div className='wrapper'>
            { newGame() }
            <Board squares={board} click={handleClick}/>
            <p className='info'>
                { winner ? 'Winner' + ' ' + winner : 'Now step' + ' ' + (xIsNext ? 'X' : 'O')}
            </p>
        </div>
    )
}

export default Game