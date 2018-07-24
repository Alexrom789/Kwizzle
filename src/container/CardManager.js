import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { Glyphicon } from 'react-bootstrap';
import DeckHeader from '../components/DeckHeader';
import CardList from '../components/CardList';


const wellStyles = { maxWidth: 800, height: 800, margin: '0 auto 10px' };

class CardManager extends Component {
  render() {
    //console.log(this.props)
    return (
        <div>
         <DeckHeader deckName={this.props.deckName} numCards={this.props.numCards}/>
         <div className="well" style={wellStyles}>
         <CardList cards={this.props.cards}/>
         <Button color="warning" className="createBtn">Add a card  <div className="Divider"></div>  <Glyphicon glyph="plus-sign"/></Button>
         </div>
        </div>
      );
    }
  }
  
  export default CardManager;