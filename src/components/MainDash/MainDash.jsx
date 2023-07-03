import React from 'react';
import "./MainDash.css"
import Cards from '../cards/cards';

function MainDash() {
  return (
    <div className="mainDash">
        <h1>Dashboard</h1>
        <Cards></Cards>
    </div>
  )
}

export default MainDash