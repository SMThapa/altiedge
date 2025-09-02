import Image from "next/image";

import { AboutSection } from "./components/AboutSection";
import { Testimonial } from "./components/Testimonial";
import { SwiperSlide1 } from "./components/SwiperSlide1";
import { BlogSection } from "./components/BlogSection";
import { Faq } from "./components/Faq";

import ParallaxEffect from "@/hooks/ParallaxEffect";
//images
import herobanner from '../assets/09.webp';
import logo from '../assets/icons/logo.webp'


export default function Home() {
  return (
    <main className="homePage">
      <section id="hero-banner text-animate" className="bgDark">
        <ParallaxEffect/>
        <div className="heroBanner">
          <div className="bgLayer"></div>
          <Image src={herobanner} alt="hero-banner-image" className="parallax-image" priority='true' />
          <div className="heroBannerContent-center text-animate ">
            <Image src={logo} alt="logo" className="logo delay-it fade"  property='true'/>
            <p className="hero-logo-title sectionTitle colorLight">
              <span className="fade fade-delay-1">A</span>
              <span className="fade fade-delay-2">l</span>
              <span className="fade fade-delay-3">t</span>
              <span className="fade fade-delay-4">i</span>
              <span className="fade fade-delay-5">E</span>
              <span className="fade fade-delay-6">d</span>
              <span className="fade fade-delay-7">g</span>
              <span className="fade fade-delay-8">e</span>                                        
            </p>
          </div>
          <div className="heroBannerContent text-animate">
            {/* <p className="sectionTitle colorLight">AltiEdge</p>  */}
            <div className="underline"></div>
            <p className="fade-slide-right delay-it sectionDescription colorLight">
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
            </p>
          </div>
        </div>
      </section>
      <AboutSection/>
      <SwiperSlide1/>
      <Testimonial/>
      <BlogSection/>      
      <Faq/>            
    </main>
  );
}
