import React from "react"
import "./footer.css"

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();

  return (
    <>
    <div className='footer'>
      {/* <div className='follow'>
        <span>Follow Us</span>
        <div className="icons">
          <div className="facebook"></div>
        </div>
      </div> */}

      <div className='legal'>
        <span>&copy; {year} Apployed, All Rights Reserved.</span>
      </div>
    </div>
    
    </>
  )
}

export default Footer
