import React from 'react';
import './Cat.scss';

const Cat = () => {
  return (
    <div className='item'>
      <h1 className='itm-txt'>Abyssinian</h1>
      <div className='div-desc'>
        <p className='itm-desc'>
          The Abyssinian is easy to care for, and a joy to have in your home. They’re affectionate cats and love both people and other animals.
      </p>
      </div>
      <button className='btn-itm'>Add to list</button>
    </div>
  )
}

export default Cat;