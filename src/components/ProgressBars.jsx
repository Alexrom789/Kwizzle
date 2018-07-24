//import React, { Component } from 'react';
import React from 'react';
import { ProgressBar } from 'react-bootstrap';


//class ProgressBars extends Component {
  const ProgressBars = (props) => (
    //render() {
      //return (
        <div className="ProgBarsDiv">
          <ProgressBar bsStyle="success" now={props.numMas/ props.numCards * 100} label={`Mastered ${props.numMas / props.numCards * 100}%`}/>
          <ProgressBar bsStyle="warning" now={props.numRev / props.numCards * 100} label={`Studied ${props.numRev / props.numCards * 100}%`}/>
          <ProgressBar bsStyle="danger" now={props.numNew / props.numCards * 100} label={`Learning ${props.numNew / props.numCards * 100}%`}/>
        </div>
      );
    //}
  //}
  
  export default ProgressBars;