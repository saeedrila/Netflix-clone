import React from 'react';
import Navbar from './components/Navbar/Navbar';
import {orginals,action, romance, documentaries, comedy, malayalam, topRatedMovies} from './urls'
import './App.css'
import Banner from './components/Banner/Banner';
import Rowposter from './components/Rowposter/Rowposter';

function App() {
  const row = [
    {url: orginals, title: 'Netflix orginals', isSmall: true},
    {url: topRatedMovies, title: 'Top rated movies', isSmall: false},
    {url: action, title: 'Action', isSmall: true},
    {url: romance, title: 'Romance', isSmall: true},
    {url: documentaries, title: 'Documentaries', isSmall: false},
    {url: comedy, title: 'Comedy', isSmall: true},
    {url: malayalam, title: 'Malayalam', isSmall: true}
  ]
  return (
    <div >
      <Navbar/>
      <Banner/>
      {row.map((row, index)=>(
        <Rowposter key={index} url={row.url} title={row.title} isSmall={row.isSmall} />
      ))}
    </div>
  );
}

export default App;
