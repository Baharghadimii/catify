import React from 'react';
import './Cat.scss';

const Cat = (props) => {
  return (
    <div className='item-card'>
      <div className='div-txt'>
        <h1 className='itm-txt'>{props.cat.name}</h1>
        <div className='div-desc'>
          <p className='itm-desc'>
            {props.cat.description}
          </p>
        </div>
        <button className='btn-itm'>Add to list</button>
      </div>
      <div className='pic-div'>
        <img className='pic' alt='' src={props.cat.image}></img>
      </div>
    </div>
  )
}

export default Cat;