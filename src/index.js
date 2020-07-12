import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// import App from './components/app';
import LandingPage from './components/landing-page';

ReactDOM.render(
  <React.StrictMode>
    {/* <App/> */}
    <LandingPage/>
  </React.StrictMode>,
  document.getElementById('root')
);
