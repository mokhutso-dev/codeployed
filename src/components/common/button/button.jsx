import React from 'react';
import { Link } from 'react-router-dom'
import './button.css'
function button() {
  return (
    <div>
      {/* <button class="fixed-button">Apply</button> */}
      <Link to="/apply" className='fixed-button'>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        Apply
      </Link>
      {/* <div class="snake-container"></div> */}
    </div>
  );
}
export default button;