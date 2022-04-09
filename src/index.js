import React from 'react';
import { Provider } from 'react-redux';
import App from './components/App/App.jsx';
import { store } from 'redux/store.js';
import * as ReactDOMClient from 'react-dom/client';
import './index.css';

const root = ReactDOMClient.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
