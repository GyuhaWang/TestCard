import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Todo from './Tables/Todo';
import Inprogress from './Tables/InProgress';
import Done from './Tables/Done';
import reportWebVitals from './reportWebVitals';
const cards=[{key: 1, doneCard:"It is done"},]
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className='navbar'></div>
    <div className='Tables'> <Todo /> <Inprogress/> <Done cards={cards} /></div> 
   
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
