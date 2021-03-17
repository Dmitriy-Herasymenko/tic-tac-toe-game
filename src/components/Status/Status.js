import React, {useState, useEffect} from 'react';
import './status.css';

const Status = (props) => {
    const [x, setX] = useState(0);
    const [o, setO] = useState(0);
    useEffect(() => {
        if (props.winner === 'X') setX(x + 1);
        if (props.winner === 'O') setO(o + 1);
    }, [props.winner]);

    return (
        <div className='status'>
            <h2>Status bar</h2>
            <div className='status-container'>
                    <span>
                        {props.winner ? 'Winner ' + props.winner : 'Now step ' + (props.step ? 'X' : 'O')}
                    </span>
                <span>X win : {x}</span>
                <span>O win : {o}</span>
            </div>
        </div>

    )
};

export default Status