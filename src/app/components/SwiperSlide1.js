'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Scrollbar } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import Image from 'next/image';

import { useInView } from 'react-intersection-observer';

import img1 from '../../assets/01.webp';
import img2 from '../../assets/02.webp';
import img3 from '../../assets/03.webp';
import img4 from '../../assets/04.webp';
import img5 from '../../assets/05.webp';
import img6 from '../../assets/06.webp';


const slides = [
  {
    title: 'Majestic Heights',
    subtitle: 'Mount Everest',
    img1: img1,
    img2: img6,
    desc:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
  },
  {
    title: 'Snowy Summit',
    subtitle: 'Mount Kilimanjaro',
    img1: img2,
    img2: img5,
    desc:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
  },
  {
    title: 'Icy Peaks',
    subtitle: 'Mount Elbrus',
    img1: img3,
    img2: img4,
    desc:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
  },
  {
    title: 'Rugged Giant',
    subtitle: 'Denali',
    img1: img4,
    img2: img3,
    desc:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
  },
  {
    title: 'Andean Majesty',
    subtitle: 'Aconcagua',
    img1: img1,
    img2: img2,
    desc:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like img5"
  },
  {
    title: 'Frozen Frontier',
    subtitle: 'Mount Vinson',
    img1: img6,
    img2: img3,
    desc:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
  },
];

export const SwiperSlide1 = () => {

  const {ref: containerRef, inView: isVisible} = useInView({
    threshold: .4,
    triggerOnce: true
  })

  return (
    <section ref={containerRef}>
      <div className={`usp ${isVisible ? 'text-animate' :''}`}>
        <div className="header-content" >
          <div className="title fade fade-delay-1">
            Featured tours <span>+ USP</span>
          </div>
          <div className="description fade fade-delay-3">
            - Take the first step towards your next life-affirming adventure.
          </div>
        </div>

        <Swiper
          modules={[Navigation, Scrollbar]}
          slidesPerView={3.3}
          spaceBetween={30}
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
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <Image
                src={slide.img1}
                alt="usp-image"
                className="img-1"
                loading="lazy"
                width={400}
                height={250}
              />
              <Image
                src={slide.img2}
                alt="usp-image"
                className="img-2"
                loading="lazy"
                width={400}
                height={250}
              />
              <div className="slide-heading">
                {slide.title.split(' ')[0]} <br />
                {slide.title.split(' ')[1]}
                <p>+ {slide.subtitle}</p>
              </div>
              <div className="slide-desc">
                <p>
                  {slide.desc}
                </p>
                <div className="btn-primary">Know More</div>
              </div>
            </SwiperSlide>
          ))}

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
