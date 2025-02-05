import React from 'react'
import Back from '../common/Back'
import img from '../images/contact.jpg'

function Contact() {
  return (
    <>
      <section className="contact">
        <Back name="Get in touch with us" title='Find all your ...' cover={img} />
      </section>
    </>
  )
}
export default Contact