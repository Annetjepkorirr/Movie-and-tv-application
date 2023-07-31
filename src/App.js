
import React from 'react';
import './App.css';
import NavBar from './components/GetMovie/NavBar'
import MovieList from './components/GetMovie';
import MovieLists from './components/GetMovie/slider/slider';

function App() {
  return (
    <div className='main'>
      <NavBar/>
       <MovieLists />
       <MovieList />
    </div>
  );
}

export default App;

