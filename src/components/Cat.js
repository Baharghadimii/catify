import React, { useState } from 'react';
import './Cat.scss';

const Cat = (props) => {

  const [modal, setModal] = useState({
    open: false
  })

  const handleAddToList = () => {
    setModal({
      open: true
    });
    setTimeout(() => {

    })
  }
  return (
    <div>
      {
        modal.open && <div className="spinner-div">
          <div class="sk-circle">
            <div class="sk-circle1 sk-child"></div>
            <div class="sk-circle2 sk-child"></div>
            <div class="sk-circle3 sk-child"></div>
            <div class="sk-circle4 sk-child"></div>
            <div class="sk-circle5 sk-child"></div>
            <div class="sk-circle6 sk-child"></div>
            <div class="sk-circle7 sk-child"></div>
            <div class="sk-circle8 sk-child"></div>
            <div class="sk-circle9 sk-child"></div>
            <div class="sk-circle10 sk-child"></div>
            <div class="sk-circle11 sk-child"></div>
            <div class="sk-circle12 sk-child"></div>
          </div>
        </div>
      }
      {!modal.open && < div className='item-card' >
        <div className='div-txt'>
          <h1 className='itm-txt'>{props.cat.name}</h1>
          <div className='div-desc'>
            <p className='itm-desc'>
              {props.cat.description}
            </p>
          </div>
          <button className='btn-itm' onClick={handleAddToList}>Add to list</button>
        </div>
        <div className='pic-div'>
          <img className='pic' alt='' src={props.cat.image}></img>
        </div>
      </div >}
    </div>

  )
}

export default Cat;