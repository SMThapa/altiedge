'use client';

import { useEffect } from 'react';

export default function ScrollEffect() {
  useEffect(() => {
    const nav = document.querySelector('.header-nav');
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentY = window.scrollY;
      if (currentY > lastScrollY) {
        nav.style.top = '-90px';
      } else {
        nav.style.top = '0';
      }
      lastScrollY = currentY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return null; // No UI
}
