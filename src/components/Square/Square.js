import React from 'react';
import './square.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCircle, faTimes} from '@fortawesome/free-solid-svg-icons'

const Square = props => {
    const styleSquares = props.style === 25 ? 'square square-medium' : 'square';
    const icon = props.value === 'X' ? <FontAwesomeIcon icon={faTimes}/> : props.value === 'O' ?
        <FontAwesomeIcon icon={faCircle} className='square-circle'/> : props.value;
    return (
        <button className={styleSquares} onClick={props.onClick}>{icon}</button>
    )
}

export default Square