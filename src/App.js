import React, { useState } from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import CatsList from './components/CatsList';
import Cat from './components/Cat';
import useApplicationData from './hooks/useApplicationData.js';

function App() {

  const [display, setDisplay] = useState('LIST')

  const {
    state
  } = useApplicationData();

  const show = (item) => {
    setDisplay(item)
  }
  return (
    <div className="App">
      <NavBar show={show} />
      {display === 'LIST' && <CatsList onClick={show} list={state.catList} />}
      {display === 'ITEM' && <Cat />}
    </div>
  );
}

export default App;
