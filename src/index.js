import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import About from './About';
// import Header from './Header';
// import Contact from './Contact';
// import Home from './Home';
import Nav from './Nav';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      {/* <App />  */}
    {/* <Header /> */}
    {/* <About/> */}
{/* < Home /> */}
    {/* <Contact />  */}
    <Nav />
   
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
