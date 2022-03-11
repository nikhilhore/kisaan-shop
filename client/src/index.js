import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Home from './Home';
import axios from 'axios';

async function renderPage() {
  const auth = await axios.get('/authenticate');
  if (auth.data.valid === true) {
    ReactDOM.render(
      <React.StrictMode>
        <App user={auth.data.user} />
      </React.StrictMode>,
      document.getElementById('root')
    );
  }
  else {

    ReactDOM.render(
      <React.StrictMode>
        <Home />
      </React.StrictMode>,
      document.getElementById('root')
    );
  }
}

renderPage();