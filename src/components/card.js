import React, { Component } from 'react';

class Card extends Component {
    constructor (props) {
        super(props);
        this.deckData = new Array(3).fill(false);
    }
    render() {
        const createDeck = this.deckData.map( (item, index) => {
            return <div key={index} className="card">Here is the card component.</div>;
        });
        return (
            <div>{ createDeck }</div>
        );
    }
}

export default Card;