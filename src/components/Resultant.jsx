import React from 'react';

const Resultant = ({score, playAgain}) => (
    <div className="score-board">
        <div className="score">
          You have scored {score} / 5 correct Answers!
        </div>
        <button className="playBtn" onClick={playAgain}>Play Again</button>
    </div>
); 

export default Resultant;