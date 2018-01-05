import React from 'react';

export default props => {
    const { flip, card: { front, back, flipped } } = props;
    return (
        <div className="card-container">
            <div className='card' className={`back ${flipped ? 'flipped' : ''}`}>
                <div className="front">
                    <img src={front}/>
                </div>
                <div onClick={flip}>
                    <img src={back}/>
                </div>
            </div>
        </div>
    );
}