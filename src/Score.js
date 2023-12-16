import React, { Component } from 'react';
class Score extends Component {
    render() {
        const { score, onNextQuestion } = this.props;

        return (
            <div>
                <h2>Results</h2>
                <h4>Your score: {score}</h4>
                <button className='btn mt-2'>Restart</button>
            </div>
        );
    }
}

export default Score;