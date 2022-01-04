import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

/* import fonts */

import './Fonts/Poppins/Poppins-Bold.ttf'
import './Fonts/Poppins/Poppins-BoldItalic.ttf'
import './Fonts/Poppins/Poppins-Medium.ttf'
import './Fonts/Poppins/Poppins-Regular.ttf'
import './Fonts/Poppins/Poppins-SemiBold.ttf'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
