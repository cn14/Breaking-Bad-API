import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Header from './Components/Header';
import Characters from './Components/Characters';
import Search from './Components/Search';

const App = () => {
  const [items, setItems] = useState([]);
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    const res = await axios.get(`https://www.breakingbadapi.com/api/characters?name=${query}`);
    setItems(res.data);
  }

  useEffect(() => {
    fetchData();
    setIsLoading(false);
  }, [query])

  const onchange = (e) => {
    setQuery(e.target.value);
  }

  return (
    <div className='container'>
      <Header/>
      <Search query = {query} onchange = {onchange}/>
      <Characters isLoading = {isLoading} items = {items}/>
    </div>
  );
}

export default App;
