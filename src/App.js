import React, { useState } from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import CatsList from './components/CatsList';
import Cat from './components/Cat';


function App() {

  const [state, setState] = useState({
    display: 'LIST'
  });

  const show = (item) => {
    setState({ ...state, display: item })
  }

  return (
    <div className="App">
      <NavBar show={show} />
      {state.display === 'LIST' && <CatsList onClick={show} />}
      {state.display === 'ITEM' && <Cat />}
    </div>
  );
}

export default App;
