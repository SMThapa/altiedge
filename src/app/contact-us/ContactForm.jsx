import React from 'react'

export const ContactForm = () => {
  return (
    <div className="contact-form">
        <div className="page-contacts">
            <div className="left">
                <span>+</span>
                <p className="left-title">
                    Tell us a bit about yourself and we'll help you find the perfect MTB or E-MTB adventure for you!
                </p>
            </div>
            <div className="right">
                <form>
                    <div className="form-group">
                        <label htmlFor="name">Full Name</label>
                        <input type="text" id='name' required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id='email' required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="mobile">Mobile No.</label>
                        <input type="number" id='mobile'/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">How can we help you?</label>
                        <textarea name="message" id="message" rows={5}></textarea>
                    </div>

                    <div className="btn-primary">Submit</div>
                </form>
            </div>
        </div>
    </div>
  )
}
