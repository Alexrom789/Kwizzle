import React, { Component } from 'react';
import DeckDisplay from '../components/DeckDisplay'
import { Button } from 'reactstrap';
import { Glyphicon } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';



const wellStyles = { maxWidth: 800, height: 800, margin: '0 auto 10px' };

class DeckContainer extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false
    };
  }
    //
    CreateNewDeckHandler = () => {
      console.log('clicked')
     }

     handleClose() {
      this.setState({ show: false });
    }
  
    handleShow() {
      this.setState({ show: true });
    }
   //
  render() {
      return (
        <div>
         <h1 className="Main-title">Welcome back!</h1> 
         <div className="NavBar">Your Decks: <Button onClick={this.handleShow} color="warning" className="createBtn">Create New Deck  <div className="Divider"></div>  <Glyphicon glyph="plus-sign"/></Button></div>
         <div className="well" style={wellStyles}>
          <DeckDisplay handler={this.CreateNewDeckHandler} name={this.props.deckName} numCards={this.props.numCards}/>
         </div>
         <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header className="modalBack" closeButton>
            <Modal.Title>Creating a new Deck</Modal.Title>
          </Modal.Header>
          <Modal.Body className='modalBody'>
            <h4>Please enter a name for your deck then click submit.</h4>
            <input type="text" />
            <br></br>
            <br></br>
            <p>Use 'Manage' to add cards to your deck once created.</p>
            </Modal.Body>
          <Modal.Footer className="modalBack">
            <Button onClick={this.handleClose}>Submit</Button>
            <Button onClick={this.handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>
        </div>
      );
    }
  }
  
  export default DeckContainer;