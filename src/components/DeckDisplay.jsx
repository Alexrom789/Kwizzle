import React from 'react';
import { Button } from 'reactstrap';
import { Glyphicon } from 'react-bootstrap';

const DeckDisplay = (props) => (
<div className="DeckBox">
  <h3> {props.name}</h3>
  <h4> Cards: {props.numCards}</h4>
  <Button color="primary" className="btns">Manage  <div className="DividerS"></div> <Glyphicon glyph="pencil"/></Button>
  <Button onClick="" color="danger"  className="btns">Delete  <div className="Divider"></div><Glyphicon glyph="trash"/></Button>
  </div>
);

export default DeckDisplay;