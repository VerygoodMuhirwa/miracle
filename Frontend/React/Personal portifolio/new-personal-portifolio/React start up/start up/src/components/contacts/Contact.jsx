import React from 'react'
import {BsWhatsapp} from "react-icons/bs"
import {RiMessengerLine} from "react-icons/ri"
import {MdOutlineEmail} from "react-icons/md"
import "./contact.css"
import  { useRef } from 'react';
import emailjs from "emailjs-com"
const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_hldx29s', 'template_aynv5hr', form.current, 'Ne8MFb415mmePvu0B')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset()
  };
  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
          <MdOutlineEmail className='contact_option-icon'/>
            <h4>Email</h4>
            <h5>verygoodmuhirwa@gmail.com</h5>
            <a href="mailto:verygoodmuhirwa2@gmail.com" target='_blank'>Send a message</a>
          </article>
          <article className="contact_option">
            <RiMessengerLine className='contact_option-icon' />
            <h4>Messenger</h4>
            <h5>Verygood Muhirwa Bizurisana</h5>
            <a href="https://m.me/verygood.muhirwa.5" target='_blank'>Send a message</a>
          </article>
          <article className="contact_option">
            <BsWhatsapp className='contact_option-icon' />
            <h4>WhatsApp</h4>
            <h5>+250787023438</h5>
            <a href="https://api.whatsapp.com/send?phone= 0787023438" target='_blank'>Send a message</a>
          </article>

        </div>
        <form action="" ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your full Name' required />
          <input type="email" name='email' placeholder='Your email' required />
          <textarea name="message"   rows="7" placeholder='Your message' required></textarea>
       <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact