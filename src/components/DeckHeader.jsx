import React from 'react';
import { Glyphicon } from 'react-bootstrap';

const DeckHeader = (props) => (
<div className="DeckHeader">
    <Glyphicon glyph="chevron-left" className="GlyphL"/>
    <p className="Title">{props.deckName} ({props.currCard}/{props.numCards})</p>
    <Glyphicon glyph="chevron-right" className="GlyphR" />
</div>
);

export default DeckHeader;