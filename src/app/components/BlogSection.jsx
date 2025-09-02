'use client';
import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Scrollbar } from 'swiper/modules';

import { useInView } from 'react-intersection-observer';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import Image from 'next/image';

import img2 from '../../assets/02.webp';
import img3 from '../../assets/03.webp';
import img4 from '../../assets/04.webp';
import img5 from '../../assets/05.webp';
import img1 from '../../assets/06.webp';

import pin from '../../assets/icons/pin.webp'

const blogs = [
    {
        img: img1,
        title: "Conquering the Himalayas: A Beginner’s Guide",
        description:
            "An in-depth guide for first-time trekkers preparing to explore the Himalayas, covering gear, routes, and safety tips.",
        categories: ["Adventure", "Travel", "Guides"],
        author: "Ravi Shrestha",
        location: "Kathmandu, Nepal",
        publishDate: "2025-08-10",
    },
    {
        img: img2,
        title: "The Future of Sustainable Tourism",
        description:
            "Exploring eco-friendly travel trends and how destinations are adapting to climate challenges while preserving culture.",
        categories: ["Environment", "Travel", "Sustainability"],
        author: "Ananya Desai",
        location: "Goa, India",
        publishDate: "2025-07-28",
    },
    {
        img: img3,
        title: "Mastering Altitude Training for Peak Performance",
        description:
            "Learn how altitude training can boost your endurance and the best practices for acclimatization.",
        categories: ["Fitness", "Health", "Adventure"],
        author: "David Lama",
        location: "Leh, Ladakh",
        publishDate: "2025-08-01",
    },
    {
        img: img4,
        title: "Capturing the Perfect Mountain Sunrise",
        description:
            "Photography tips for breathtaking sunrise shots in high-altitude locations, from gear selection to composition.",
        categories: ["Photography", "Travel", "Tips"],
        author: "Maya Gurung",
        location: "Darjeeling, India",
        publishDate: "2025-06-15",
    },
    {
        img: img5,
        title: "Top 10 Hidden Trails in the Himalayas",
        description:
            "Discover off-the-beaten-path trekking routes in the Himalayas that offer solitude, stunning views, and unique cultural experiences.",
        categories: ["Adventure", "Hiking", "Exploration"],
        author: "Siddharth Thapa",
        location: "Pokhara, Nepal",
        publishDate: "2025-08-12",
    },
];

export const BlogSection = () => {

    const {ref: containerRef, inView: isVisible} = useInView({
        threshold: .4,
        triggerOnce: true
    })

  return (
    <section ref={containerRef}>
        <div className={`blogsSection  ${isVisible ? 'text-animate' :''}`}>
            <div className="header-content">
                <div className="title fade fade-delay-1">Insights. Ideas. Inspiration.<span>&#43; blog</span></div>
                <div className="description fade fade-delay-3">- Explore stories, tips, and guides crafted to spark your next great adventure.</div>
            </div>

            <Swiper
                modules={[Navigation, Scrollbar]}
                slidesPerView={3}
                spaceBetween={20}                
                // direction={'vertical'}
                // mousewheel={true}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }}
                scrollbar={{
                    el: '.swiper-scrollbar',
                    draggable: true,
                    snapOnRelease: false,
                }}
                className='fade fade-delay-6'
            >
                {
                    blogs.map((item, index)=>(
                        <SwiperSlide>
                            <div className="blog-card" key={index}>
                                <Image src={item.img} className="background-img" alt='card-image'/>
                                <div className="bg-gradiant"></div>
                                <div className="text-content">            
                                    <div className="card-tags">
                                        {item.categories.map((cate, i) => (
                                            <span className="tag" key={i}>#{cate}</span>
                                        ))}
                                    </div>                        
                                    <div className="card-title">{item.title}</div>
                                    <div className="card-description">{item.description}</div>

                                    <div className="card-details">
                                        <span>{item.author}</span>
                                        <span>|</span>
                                        <span>{item.publishDate}</span>
                                    </div>
                                </div>
                                <div className="card-location">
                                    <Image src={pin} alt='pin'/>
                                    {item.location}
                                </div>
                            </div>
                        </SwiperSlide>
                    ))
                }

                <div className="swiper-controller-wrapper">
                    <div className="swiper-navigation">
                        <div className="swiper-button-prev" />
                        <div className="swiper-button-next" />
                    </div>
                    <div className="swiper-scrollbar" />
                </div>
            </Swiper>
        </div>  
    </section>
    
  )
}
