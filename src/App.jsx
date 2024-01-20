import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.scss';
import XLogo from './assets/square-x-twitter.svg';
import Vector from './assets/Vector.svg'

const App = () => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  useEffect(() => {
    fetchQuote();
  }, []);

  const fetchQuote = async () => {
    try {
      const response = await axios.get('https://api.quotable.io/random');
      const { content, author } = response.data;
      setQuote(content);
      setAuthor(author);
    } catch (error) {
      console.error('Erro ao obter citação:', error.message);
    }
  };

  const handleNewQuote = () => {
    fetchQuote();
  };

  return (
    <div className="App">
      <div className="content">
        <div className='quote'>
          <div>
            <img src={Vector} alt="Vector illustration" />
          </div>
          <p>{quote}</p>
          <div className="divider"></div>
          <p>- {author}</p>
        </div>
        <div className="buttons">
          <div>
            <a href="https://twitter.com/GabrielRedCat">
              <img src={XLogo} alt="X logo" width={30} />
            </a>
          </div>
          <button onClick={handleNewQuote}>New Quote</button>
        </div>
      </div>
    </div>
  );
};

export default App;
