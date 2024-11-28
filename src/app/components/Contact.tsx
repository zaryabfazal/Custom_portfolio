import React from 'react'
import { MdOutlineEmail } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";
import'../styles/contact.css';

const Contact = () => {
  return (
    <div id="contact" className='contact-container'>
        <div className='contact-grid md:grid-cols-2'>
            <div className='contact-spaces'>
                <h2 className='contact-heading' data-aos="zoom-in-up">Get in Touch</h2>
                <p className='contact-text' data-aos="zoom-in-up">
                Drop me a line,give me a call, or send me a message by submitting the form.</p>
                <div className='contact-flex'data-aos="zoom-in-up">
                <MdOutlineEmail size={50} /> ZaryabfazalHussain@gmail.com
                </div>
                <div className='contact-flex'data-aos="zoom-in-up">
                <BsTelephone  size={50}/> 03412104880
 
                </div>
            </div>
            <div className='contact-space'>
                <div className='form'data-aos="zoom-in-up">
                    <label htmlFor='name'>Name</label>
                    <input type="text" className="input-feild" id="name" />
                    </div>
                
                <div className='form'data-aos="zoom-in-up">
                    <label htmlFor='email'>Email</label>
                    <input type="text"
                    className="input-feild" id="email" />
                </div>
                <div className='form'data-aos="zoom-in-up">
                    <label htmlFor='message'>Message</label>
                    <textarea 
                    className='textarea-feild' id="message" rows={5} >
                        </textarea>
                </div>
                <button className='button'data-aos="zoom-in-up">Send</button>
            </div>
        </div>
      
    </div>
  )
}

export default Contact
