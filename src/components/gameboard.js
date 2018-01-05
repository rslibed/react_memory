import React, { Component } from 'react';
import cardData from '../assets/helpers/card_data';
import { doubleArray, shuffleArray } from '../assets/helpers';
import Card from './card';

class GameBoard extends Component {
    constructor (props) {
        super(props);
        this.flipCard = this.flipCard.bind(this);
        this.state = {
            firstCardIndex: null,
            deck: [],
            matches: 0,
            attempts: 0,
            gameState: 'ready'
        };
        this.blockClick = false;
        console.log(cardData);
    }
    componentDidMount () {
        this.setState({
            deck: shuffleArray(doubleArray(cardData))
        });
    }
    handleCardClicked (index) {
        if (this.blockClick) return;
        const { firstCardIndex, deck } = this.state;
        let matches = this.state.matches;
        let attempts = this.state.attempts;
        let gameState = this.state.gameState;
        let cardIndex = null;
        if (firstCardIndex === null) {
            console.log("First card clicked");
            cardIndex = index;
            this.flipCard(index);
        } else {
            this.blockClick = true;
            console.log("Second card clicked");
            const card1 = deck[firstCardIndex].front;
            const card2 = deck[index].front;
            this.flipCard(index);
            if (card1 === card2) {
                console.log("Cards are matched");
                attempts++;
                matches++;
                if (matches === deck.length / 2) {
                    gameState = 'won';
                    console.log("You win dude.");
                }
                this.blockClick = false;
            } else {
                console.log("Cards are not matched");
                attempts++;
                setTimeout(() => {
                    this.flipCard(firstCardIndex);
                    this.flipCard(index);
                    this.blockClick = false;
                }, 1000);
            }
        }
        this.setState({
            firstCardIndex: cardIndex,
            matches: matches,
            attempts: attempts,
            gameState: gameState
        });
    }
    flipCard(index) {
        const newCards = this.state.deck.slice();
        newCards[index].flipped = !newCards[index].flipped;
        this.setState({
            cards: newCards
        })
    }
    render () {
        const { deck, matches, attempts, gameState } = this.state;
        const createDeck = deck.map( (card, index) => {
            return <Card key={ index } card={ card } flip={ () => this.handleCardClicked(index) }/>
        });
        return (
            <div className="game">
                <h1>Matches</h1>
                <h3>Accuracy: {attempts ? ((matches / attempts * 100).toFixed(2)) : 0}%</h3>
                <div className="gameboard">
                    { createDeck }
                </div>
                <h1>{gameState === 'won' ? "You won dude!": "" }</h1>
            </div>
        )
}
}
export default GameBoard;