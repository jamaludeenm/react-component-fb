import React from 'react';
import ReactDOM from 'react-dom/client';
import './reset.css';
import './index.css';
import Navi from './Components/Navigation/Navi';
import Feed from './Components/Banner/Feed';

const Fb = () => {
  return (
    <div className='fb'>
      <div className='navbar'>  < Navi /></div>
      <div className='Banner'><Feed /></div>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Fb />);


