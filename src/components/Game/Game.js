import React, {useState} from 'react';
import './game.css';
import Board from "../Board/Board";
import Status from "../Status/Status";
import {calculateWinner} from "../../utils";
import {Link} from "react-router-dom";


const Game = () => {
    const getBoardSize = localStorage.getItem('board') === null ? 25 : +localStorage.getItem('board');
    const getGameMode = localStorage.getItem('game') === null ? 'computer' : localStorage.getItem('game');
    const [board, setBoard] = useState(Array(getBoardSize).fill(null));
    const [xIsNext, setXIsNext] = useState(true);

    const winner = calculateWinner(board);
    const filterWinner = board.filter(i => i === null);
    const winnerStatus = filterWinner.length === 0 ? 'Draw' : winner;

    const randomStep = (boards) => {
        const checkIndexOfNull = boards.filter(index => index === null);
        if (checkIndexOfNull.length === 0) return;
        const number = getBoardSize === 25 ? 25 : 9;
        const step = Math.floor(Math.random() * Math.floor(number));
        return boards[step] ? randomStep(boards) : step;
    };
    const handleClick = index => {
        const boards = [...board];
        if (winner || boards[index]) return;
        boards[index] = xIsNext ? 'X' : 'O';
        setBoard(boards);
        setXIsNext(!xIsNext);
    };
    const versusComputer = index => {
        const boards = [...board];
        if (winner || boards[index]) return;
        boards[index] = 'X';
        const randomIndex = randomStep(boards);
        boards[randomIndex] = 'O';
        setBoard(boards);
    };
    const resetGame = () => {
        setBoard(Array(getBoardSize).fill(null))
    };

    return (
        <div className='wrapper'>
            <Status winner={winnerStatus} step={xIsNext} />
            <Board squares={board} click={getGameMode === 'computer' ? versusComputer : handleClick}/>
            {winnerStatus ? <button className='settings-btn' onClick={resetGame}>Play again</button> : <span/>}
            <Link to='/main' className='settings-btn'>Exit Game</Link>

        </div>
    )
};

export default Game;