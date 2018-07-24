import React from 'react';
//import { Button } from 'reactstrap';
import { Glyphicon } from 'react-bootstrap';
import { ListGroup } from 'react-bootstrap';
import { ListGroupItem } from 'react-bootstrap';

const CardList = (props) => (
<div>
<ListGroup>
  {props.cards.map(card => {
    return <ListGroupItem >{card.frontTxt + ' | '  + card.backTxt}<Glyphicon className='pullRight' glyph="trash"/></ListGroupItem>
  })}
</ListGroup>;
</div>
);

export default CardList;