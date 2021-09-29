import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ContextProvider } from './context/Context';
import { ProductContextProvider } from './context/ProductContext';

ReactDOM.render(
  <React.StrictMode>
    <ContextProvider>
      <ProductContextProvider>
        <App />
      </ProductContextProvider>
    </ContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
