//import React, { Component } from 'react';
import React from 'react';
import DiffucultyBtns from '../components/DifficultyBtns';



//class FlashCard extends Component {

    //render() {
     // return (
    const FlashCardBack = (props) => (
      <div>
        <div onClick={props.handler} className="FlashCardBack">
        <h4 className={props.cardState}> {props.frontTxt}</h4>
        <hr></hr>
        <p> {props.backTxt}</p>
        </div>
        <DiffucultyBtns id={props.id} handlerEZ={props.handlerEZ} handlerMED={props.handlerMED} handlerHRD={props.handlerHRD}/>
        </div>

      );
    //}
  //}
  
  export default FlashCardBack;