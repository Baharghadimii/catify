import React from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import CatsList from './components/CatsList';

function App() {
  return (
    <div className="App">
      <NavBar />
      <CatsList />
    </div>
  );
}

export default App;
