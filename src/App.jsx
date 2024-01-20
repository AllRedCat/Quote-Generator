import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import '@fortawesome/fontawesome-free/css/all.css';
import './App.css';

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
        <div>
          <p>{quote}</p>
          <p>- {author}</p>
        </div>
        <div className="buttons">
          <div>
            <a>
              <FontAwesomeIcon icon="fa-brands fa-square-x-twitter" style={{ color: "#364ba7", }} />
            </a>
          </div>
          <button onClick={handleNewQuote}>New Quote</button>
        </div>
      </div>
    </div>
  );
};

export default App;
