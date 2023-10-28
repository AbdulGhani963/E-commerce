import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

// import './index.css';
import App from './App';
import "./Styles/templatemo-hexashop.css";
import "./Styles/bootstrap.min.css";
import "./Styles/font-awesome.css";
import "./Styles/lightbox.css";
import "./Styles/flex-slider.css";
import { store } from './Components/Redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}><App /></Provider>
  </React.StrictMode>
);
