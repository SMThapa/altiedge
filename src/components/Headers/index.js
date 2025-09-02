import Image from 'next/image';
import Link from 'next/link';
import ScrollEffect from './ScrollEffect';
import { headers } from 'next/headers';
import ActiveLink from './ActiveLink';

import logo from '../../assets/icons/logo.webp'

export const Header = async () => {
  const requestHeaders = await headers();
  const pathname = requestHeaders.get('x-invoke-path') || '/';
  const links = [
    {href:'/', name:'Home'},
    {href:'/readiness-test', name:'Readiness Test'},
    {href:'/programs-&-events', name:'Programs & Events'},
    {href:'/blogs', name:'Blogs'},
    {href:'/about-us', name:'About Us'},
  ]  

  return (
    <nav className="header-nav">      
      <div className="navigation">
        <div className="logo">
          <a href="/">
            <Image src={logo} alt="logo" width={50} height={50} />
          </a>
        </div>
        <div className="menu-section">
          <ul>
            {
              links.map((link)=>(
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className={pathname === link.href ? 'active' : ''}
                    data-href={link.href}
                  >{link.name}</Link>
                </li>
              ))
            }                      
          </ul>
        </div>
        <div className="action-section">
          <Link href={'/contact-us'}>
            <button className="get-in-touch">Get In Touch</button>
          </Link>
        </div>
      </div>
      <ScrollEffect />
      <ActiveLink/>
    </nav>
  );
};
