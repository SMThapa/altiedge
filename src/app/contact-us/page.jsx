import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ContactForm } from './ContactForm';

import facebook from '../../assets/icons/facebook.webp';
import instagram from '../../assets/icons/instagram.webp';
import linkedIn from '../../assets/icons/linkedin.webp';
import whatsApp from '../../assets/icons/whatsapp.webp';
import youtube from '../../assets/icons/youtube.webp';
import phone from '../../assets/icons/iphone.webp';
import mail from '../../assets/icons/email.webp';

const page = () => {
  return (
    <main>
      <section className='bgDark'>
        <div className="contact-page">          
          <div className="pageContents">            

            <div className="contact-page-top">
              <div className="page-title">Contact</div>
              <div className="contact-contents">
                <div className="left">
                  <p className="description">We’d love to hear from you, so please use the form or contact details below to get in touch with one of our tour specialists.</p>
                </div>
                <div className="right">
                  <div className="info">
                    <div className="info-title">Contact Info.</div>
                    <ul>
                      <li>
                        <Link href={'mailto:mail@bootsandcrampons.com'}><Image src={mail} alt='mail-icon'/>mail@bootsandcrampons.com</Link>
                      </li>
                      <li>
                        <Link href={'tel:9000603444'}><Image src={phone} alt='phone-icon'/> 9000603444</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="info">
                    <div className="info-title">Social Info.</div>
                    <div className="socials">
                      <Link href={'https://www.facebook.com/Bootsandcrampons/'} target='_blank'>
                        <Image src={facebook} alt='facebook-icon'/>
                      </Link>
                      <Link href={'https://www.instagram.com/bootsandcrampons'} target='_blank'>
                        <Image src={instagram} alt='instagram-icon'/>
                      </Link>
                      <Link href={'https://www.linkedin.com/company/bootscrampons'} target='_blank'>
                        <Image src={linkedIn} alt='linked-in-icon'/>
                      </Link>
                      <Link href={'https://wa.me/9000603444'} target='_blank' >
                        <Image src={whatsApp} alt='whatapp-icon'/>
                      </Link>
                      <Link href={'https://www.youtube.com/channel/UCXYUq721diYcEW4LSha3XVA'} target='_blank'>
                        <Image src={youtube} alt='youtube-icon'/>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>   

            <ContactForm/>                    
            
          </div>
        </div>
      </section>
    </main>
  )
}

export default page