import React from 'react'

import "./footer.css"

function Footer() {
  const today = new Date();
  const year = today.getFullYear();

  return (
    <>
      <div className="legal">
        <span>{year} &copy; Apployed, All Rights Reserved. </span>
      </div>
    </>
  )
}

export default Footer