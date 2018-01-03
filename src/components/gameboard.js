import React, { Component } from 'react';
import cardData from '../assets/helpers/card_data';
import Card from './card';

class GameBoard extends Component {
    constructor (props) {
        super(props);
        this.deckData = new Array(3).fill(false);
        this.flipCard = this.flipCard.bind(this);
        this.state = {
            deck: cardData
            // card: {
            //     front: logo,
            //     back: back,
            //     flipped: false
            // }
        };
        console.log(cardData);
    }
    flipCard(index) {
        const newCards = this.state.deck.slice();
        newCards[index].flipped = !newCards[index].flipped;
        this.setState({
            cards: newCards
        })
    }
    render () {
        const { deck } = this.state;
        const createDeck = deck.map( (card, index) => {
            return <Card key={ index } card={ card } flip={ () => this.flipCard(index) }/>
        });
        return (
            <div className="gameboard">
                { createDeck }
            </div>
        )
}
}

export default GameBoard;