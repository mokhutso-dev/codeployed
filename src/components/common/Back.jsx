import React from "react"
import './back.css'
const Back = ({ name, title, cover }) => {
  return (
    <>
      <div className='back'>
        <div className='container'>
          <h1>{name}</h1>
          <span>{title}</span>
        </div>
        <img src={cover} alt='' />
      </div>
    </>
  )
}
export default Back