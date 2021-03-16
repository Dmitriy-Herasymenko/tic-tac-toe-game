import React from 'react';
import './board.css';
import Square from "../Square/Square";

const Board = ({squares, click}) => {
    const styleBoard = squares.length === 25 ? 'board mediumBoard' : 'board smallBoard';
    return (
        <div className={styleBoard}>
            {
                squares.map((square, i) => (
                    <Square key={i} value={square} onClick={() => click(i)}/>
                ))
            }
        </div>
    )
}

export default Board