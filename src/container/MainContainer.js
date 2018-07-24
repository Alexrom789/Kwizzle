import React, { Component } from 'react';
import CardManager from './CardManager';
import QuizContainer from './QuizContainer'
import {
  Route,
} from "react-router-dom";
import DeckContainer from './DecksContainer';


class MainContainer extends Component {

  constructor() {
    super();
    this.state = {
      deckName: 'Japanese Proverbs',
      cards: [
        {id: 0, frontTxt: '猿も木から落ちる', backTxt: 'Even the monkey falls from the tree.', cardState: "new"},
        {id: 1, frontTxt: '出る釘は打たれる', backTxt: 'The nail that sticks out gets hammered down.', cardState: "new"},
        {id: 2, frontTxt: '石の上にも三年', backTxt: 'The spend three years on a rock.', cardState: "reviewing"},
        {id: 3, frontTxt: '三日坊主', backTxt: 'A monk for three days.', cardState: "reviewing"},
        {id: 4, frontTxt: '十人十色', backTxt: 'Ten men ten colors.' , cardState: "new"},
        {id: 5, frontTxt: '一期一会', backTxt: 'One life one encounter.' , cardState: "new"},
        {id: 6, frontTxt: '異体同心', backTxt: 'Different body same mind.', cardState: "new"},
        {id: 7, frontTxt: '蛙の子は蛙', backTxt: 'The child of a frog is a frog.', cardState: "reviewing"},
        {id: 8, frontTxt: '知らぬが仏', backTxt: 'Not knowing is Buddha.', cardState: "new"},
        {id: 9, frontTxt: '猫に小判', backTxt: 'Gold coins to a cat.', cardState: "new"},
  
      ],
      isBack:false,
      numCards : 10,
      numNew: 7,
      numRev: 3,
      numMas: 0,
      idx: 0,
      studied: 0,
      endOfDeck: false,
     }};

    
  

    render() {
      return (
        <div className= "MainDiv">
           <Route exact path="/" component={(props) => <DeckContainer {...this.state}/>}/>
           <Route path="/decks" component={(props) => <CardManager {...this.state}/>}/>
           <Route path="/kwiz" component={QuizContainer}/>
        </div>
      );
    }
  }
  
  export default MainContainer;