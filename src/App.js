import React, { useState, useEffect } from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import CatsList from './components/CatsList';
import Cat from './components/Cat';
import useApplicationData from './hooks/useApplicationData.js';

function App() {

  const [display, setDisplay] = useState('LIST');
  const {
    state
  } = useApplicationData();
  const [catList, setCatList] = useState([]);

  useEffect(() => {
    setCatList(state.catList);
  }, [state]);
  const show = (item) => {
    setDisplay(item)
  }
  console.log(state)
  return (
    <div className="App">
      <NavBar show={show} />
      {display === 'LIST' && <CatsList onClick={show} list={catList} />}
      {display === 'ITEM' && <Cat />}
    </div>
  );
}

export default App;
