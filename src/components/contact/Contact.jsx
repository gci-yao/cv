import React from 'react'
import './contact.css'
import { MdOutlineMailOutline } from "react-icons/md";
import { SiWhatsapp } from "react-icons/si";
import { RiMessengerLine } from "react-icons/ri";
import  { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();

      emailjs.sendForm('service_3fjfb17', 'template_kylucaz', form.current, 'user_641J0AWGxx4qcKi835yDq');
      
      e.target.reset();
    };  
  return (
    <section id='contact'>
        <h5>Get In Touch</h5>
        <h2>Contact Me</h2>

        <div className="container contact__container">
          <div className="contact__options">
            <article className="contact__option">
                <MdOutlineMailOutline className='contact__option-icon' />
                <h4>Email</h4>
                <h5>yaogci2002@gmail.com</h5>
                <a href="yaogci2002@gmail.com" target="_blank">Send a Message</a>
            </article>
            <article className="contact__option">
                <RiMessengerLine className='contact__option-icon'/>
                <h4>Messenger</h4>
                <h5>gci yao</h5>
                <a href="https://m.me/gci.yao" target="_blank">Send a Message</a>
            </article>
            <article className="contact__option">
                <SiWhatsapp className='contact__option-icon'/>
                <h4>Whatsapp</h4>
                <h5>+225 0788650842</h5>
                <a href="https://whatsapp.com/dl/2250788650842" target="_blank">Send a Message</a>
            </article>
          </div>
          {/* END OF CONTACT OPTION  */}
          <form ref={form} onSubmitCapture={sendEmail}>
            <input type="text" name='name' placeholder='Your Full Name' required />
            <input type="email" name='email' placeholder='Your Email' required />
            <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
            <button type='submit'className='btn btn-primary'>Send Message</button>
          </form>
        </div>
    </section>
  )
}

export default Contact