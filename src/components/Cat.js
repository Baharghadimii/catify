import React, { useState } from 'react';
import { FaCheck } from 'react-icons/fa';
import './Cat.scss';

const Cat = (props) => {

  const [modal, setModal] = useState({
    open: false
  });
  const [spinner, setSpinner] = useState({
    opshowen: false
  });
  const [check, setCheck] = useState({
    show: false
  })

  const handleAddToList = () => {
    localStorage.setItem('token', props.cat)
    setModal({
      open: true
    });
    setSpinner({
      show: true
    })
    setTimeout(() => {
      setSpinner({
        show: false
      });
      setCheck({
        show: true
      })
    }, 3000)
    setTimeout(() => {
      setCheck({
        show: false
      });
      setModal({
        open: false
      })
    }, 4000);

  }

  return (
    <div>
      {
        modal.open &&
        <div className="spinner-div">
          {check.show && <div className="div-check">
            < span style={{ color: 'white' }}><FaCheck size={50} /></span>
            <h4 className="spinner-txt success">Added to your List</h4>
          </div>}
          {spinner.show && <div>
            < div class="sk-circle">
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
            <h4 className="spinner-txt">Adding...</h4>
          </div>}
        </div>
      }
      {
        !modal.open && < div className='item-card' >
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
        </div >
      }
    </div >

  )
}

export default Cat;