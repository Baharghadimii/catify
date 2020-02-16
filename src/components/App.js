import React, { useState, useEffect } from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './NavBar';
import CatsList from './CatsList';
import Cat from './Cat';
import useApplicationData from '../hooks/useApplicationData.js';

function App() {

  const [display, setDisplay] = useState('LIST');
  const {
    state
  } = useApplicationData();
  const [catList, setCatList] = useState([]);
  const [cat, setCat] = useState({});

  useEffect(() => {
    setCatList(state.catList);
  }, [state]);

  const show = (item, cat) => {
    setDisplay(item)
    setCat(cat);
  }
  return (
    <div className="App">
      <NavBar show={show} />
      {display === 'LIST' && <CatsList onClick={show} list={catList} />}
      {display === 'ITEM' && <Cat cat={cat} />}
    </div>
  );
}

export default App;
