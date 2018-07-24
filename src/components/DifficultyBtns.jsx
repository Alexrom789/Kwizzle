//import React, { Component } from 'react';
import React from 'react';
import { Button } from 'reactstrap';


//class DiffucultyBtns extends Component {
    //render() {
     // return (
  const DiffucultyBtns = (props) =>{
    //console.log(props)
  return (
        <div className="ButtonsDiv">
           <p> How did you feel about this one? </p>
           <Button onClick={props.handlerHRD} color="danger">Difficult</Button>
           <div className="Divider"></div>
           <Button onClick={props.handlerMED} color="warning">So-So</Button>
           <div className="Divider"></div>
           <Button onClick={()=>{props.handlerEZ(props.id)}} color="success">Easy</Button>
        </div>
      )};
   // }
 // }
  
  export default DiffucultyBtns;