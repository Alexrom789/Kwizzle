import React, { Component } from 'react';
import FlashCardFrnt from '../components/FlashCardFrnt'
import FlashCardBack from '../components/FlashCardBack'
import ProgressBars from '../components/ProgressBars'
//import DiffucultyBtns from '../components/DifficultyBtns';
import DeckHeader from '../components/DeckHeader';
import EndMessage from '../components/EndMessage';


class QuizContainer extends Component {

  //currIdx = 0;
 
  state = {
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
   // idx: this.currIdx,
    idx: 0,
    studied: 1,
    endOfDeck: false,
   }

   flipFlashCardHandler = () => {
    var newSide = this.state.isBack === true ? false : true;
    this.setState( { isBack : newSide } )
    console.log(this.state.cards[this.state.idx].cardState)
   }

   nextCardHandlerEZ = (id) => {
    //console.log('EZ Was clicked!');
    if (this.state.numCards === this.state.studied){
      this.setState( { endOfDeck : true } )
      console.log('HELP!')
    }

    for (let i = 0; i < this.state.cards.length; i++){
      if (this.state.cards[i].id === id ){
        if (this.state.cards[i].cardState === 'new'){
        this.state.cards[i].cardState = 'reviewing';
        this.setState( { numRev : this.state.numRev += 1 } )
        this.setState( { numNew : this.state.numNew -= 1 } )
        }
        else if (this.state.cards[i].cardState === 'reviewing'){
          console.log('in here')
        this.state.cards[i].cardState = 'Mastered';
        this.setState( { numMas : this.state.numMas += 1 } )
        this.setState( { numRev : this.state.numRev -= 1 } )
        }
      }
    }
    console.log(this.state.cards[this.state.idx].cardState)
    //this.setState( { idx : this.currIdx + 1} )

    this.setState( { idx : this.state.idx + 1} )
    this.setState( { studied : this.state.studied + 1 } )
    console.log(this.state.studied);
    //this.currIdx = this.currIdx + 1;
    var newSide = this.state.isBack === true ? false : true;
    this.setState( { isBack : newSide } )

   }

   nextCardHandlerMED = () => {
    console.log('MED Was clicked!');
    this.setState( { idx : this.currIdx + 1} )
    this.currIdx = this.currIdx + 1;
    var newSide = this.state.isBack === true ? false : true;
    this.setState( { isBack : newSide } )
    //this.setState( {cardState = 1} )
   }

   nextCardHandlerHRD = () => {
    console.log('HRD Was clicked!');
    this.setState( { idx : this.currIdx + 1} )
    this.currIdx = this.currIdx + 1;
    var newSide = this.state.isBack === true ? false : true;
    this.setState( { isBack : newSide } )
   }

    render() {//render end of deck component
      if (this.state.endOfDeck){
        return (
          <div>
            <EndMessage/>
         </div> 
        )
      }
      else{
      let flashcard = <FlashCardFrnt handler={this.flipFlashCardHandler} frontTxt={this.state.cards[this.state.idx].frontTxt}/>;
      if (this.state.isBack)
      {

   
        flashcard = <FlashCardBack handler={this.flipFlashCardHandler} id={this.state.cards[this.state.idx].id} backTxt={this.state.cards[this.state.idx].backTxt} frontTxt={this.state.cards[this.state.idx].frontTxt} cardState={this.state.cards[this.state.idx].cardState} handlerEZ={this.nextCardHandlerEZ} handlerMED={this.nextCardHandlerMED} handlerHRD={this.nextCardHandlerHRD}/>
        //diffBtns = <DiffucultyBtns handlerEZ={this.nextCardHandlerEZ} handlerMED={this.nextCardHandlerMED} handlerHRD={this.nextCardHandlerHRD}/>;
      }
      return (
        <div>
          <DeckHeader deckName={this.state.deckName} currCard={this.state.idx + 1} numCards={this.state.numCards}/>
          {flashcard}
          <ProgressBars numCards={this.state.numCards} numNew={this.state.numNew} numRev={this.state.numRev} numMas={this.state.numMas}/>
        </div>
      );
    }
  }
}
  
  export default QuizContainer;