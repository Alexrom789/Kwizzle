//import React, { Component } from 'react';
import React from 'react';



//class FlashCard extends Component {

    //render() {
     // return (
    const FlashCardFrnt = (props) => (
        <div onClick={props.handler} className="FlashCardFront">
        <p> {props.frontTxt}</p>
        </div>
      );
    //}
  //}
  
  export default FlashCardFrnt;