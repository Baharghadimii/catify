import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import './CatsListItem.scss'

const CatsListItem = (props) => {

  const onClick = () => {
    props.onClick('ITEM');
  }
  return (
    <Card id={props.id} className='crd'>
      <Card.Img style={{ width: '8rem', height: '8rem', borderRadius: '50%', margin: '0 auto', marginTop: '1rem' }} variant="top"
        src={props.item.image} />
      <Card.Body>
        <h1 className='txt-card'>{props.item.name}</h1>
        <Button className='btn-card' variant="primary" onClick={onClick}>Know more!</Button>
      </Card.Body>
    </Card>
  )
}

export default CatsListItem;