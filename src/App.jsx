import React, { useState, useEffect } from 'react';
import axios from 'axios';

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
      <div>
        <p>{quote}</p>
        <p>- {author}</p>
      </div>
      <button onClick={handleNewQuote}>Nova Citação</button>
    </div>
  );
};

export default App;
