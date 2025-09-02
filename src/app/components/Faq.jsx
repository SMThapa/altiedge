'use client';
import React, { use, useState } from 'react';
import { useInView } from 'react-intersection-observer';

export const Faq = () => {

    const [openAccordion, setOpenAccordion] = useState('1faq');
    const handleOpenAccordion = (index) =>{
        if(openAccordion == index){
            setOpenAccordion('')
        }else{
            setOpenAccordion(index)
        }
    }
    const faqs = [
        {
            question: "What makes AltiEdge different from regular fitness or adventure training programs?",
            answer:
            "Unlike conventional gyms or outdoor courses, AltiEdge integrates physiology, endurance, strength, mental conditioning, nutrition, and technical mountaineering skills into one structured program. Every plan is personalized and data-driven to prepare climbers specifically for the challenges of high-altitude expeditions."
        },
        {
            question: "Do I need prior mountaineering experience to join?",
            answer:
            "Not at all. We welcome both beginners and seasoned climbers. For newcomers, we focus on building foundational fitness, mindset, and technical awareness. Experienced climbers benefit from advanced training, performance tracking, and targeted conditioning for more ambitious expeditions."
        },
        {
            question: "How does biometric tracking help in training?",
            answer:
            "Biometric data (such as oxygen saturation, heart rate, and recovery metrics) allows us to monitor your adaptation and progress in real time. This ensures training intensity is optimized, risks are minimized, and you build sustainable resilience for high-altitude climbs."
        },
        {
            question: "Is the training only for those planning Himalayan or high-altitude expeditions?",
            answer:
            "While many of our clients prepare for Himalayan peaks, our programs are designed for anyone aiming to take on demanding treks, alpine climbs, or even personal fitness goals. The core principles of endurance, strength, and resilience apply to diverse mountain and outdoor challenges."
        },
        {
            question: "Why is specialized training necessary for mountaineering?",
            answer:
            "Mountains pose extreme conditions — thin air, freezing temperatures, and relentless exertion. Regular fitness routines don’t account for altitude adaptation, nutrition strategies, or technical survival skills. Specialized training ensures climbers can adapt, perform, and return safely."
        },
        {
            question: "Does AltiEdge also teach technical climbing skills?",
            answer:
            "Yes. Alongside physical and mental conditioning, we offer mentorship in technical aspects like ropework, glacier travel, safety systems, and acclimatization techniques — essential for safe and efficient mountaineering."
        },
        {
            question: "What values guide AltiEdge’s approach?",
            answer:
            "We believe climbing is more than reaching summits. It’s about discipline, resilience, camaraderie, and forging a deeper connection with nature. Safety, responsibility, and respect for the mountains are at the core of everything we do."
        }
    ];

    const {ref: containerRef, inView: isVisible} = useInView({
        threshold: .4,
        triggerOnce: true
    })

  return (
    <section>
        <div className="faqSection" ref={containerRef}>
            <div className="header-content">
                <div className="title">
                    Curious? We've Got You Covered.<span>&#43; FAQ</span>
                </div>
                <div className="description">
                - Find quick answers to the most common questions and clear your doubts in no time.
                </div>
            </div>
            <div className={`faq-content ${isVisible ? 'text-animate':''}`}>
                <div className="accordion">
                    {
                        faqs.map((item, index)=>(
                            <div className={`accordion-item fade-slide-right fade-long-delay-${index+1} ${openAccordion == `${index+1}faq` ? 'open':'close'}`} key={index+1}>
                                <a href={`/#${index+1}faq`}>
                                    <div className="question" id={`${index+1}faq`} onClick={()=>handleOpenAccordion(`${index+1}faq`)}>0{index+1}. {item.question}</div>    
                                </a>                                
                                <div className='answer'>
                                    <p>{item.answer}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    </section>
  )
}
