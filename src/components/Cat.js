import React, { useState } from 'react';
import './Cat.scss';

const Cat = (props) => {

  const [modal, setModal] = useState({
    open: false
  })

  const handleAddToList = () => {
    setModal({
      open: true
    })
  }
  return (
    <div>
      {
        modal.open && <div className="spinner-div"></div>
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