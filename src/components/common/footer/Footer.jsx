import React from "react"
import "./footer.css"

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();

  return (
    <>
      <div className='legal'>
        <span>&copy; {year} Apployed, All Rights Reserved.</span>
      </div>
    
    </>
  )
}

export default Footer
