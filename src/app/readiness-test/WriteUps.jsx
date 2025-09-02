'use client'
import React, { Fragment } from 'react'
import Image from 'next/image';
import img from '../../assets/11.webp';
import { useInView } from 'react-intersection-observer';

export const WriteUps = () => {

    const {ref: container1Ref, inView: is1Visible} = useInView({
        threshold: .3,
        triggerOnce: true
    })
    const {ref: container2Ref, inView: is2Visible} = useInView({
        threshold: .2,
        triggerOnce: true
    })
    const {ref: container3Ref, inView: is3Visible} = useInView({
        threshold: .2,
        triggerOnce: true
    })

  return (
    <Fragment>
        <div className="header-content">
            <div className="title">how it works <span>&#43; Steps</span></div>                        
        </div>
        <div className="detailedSteps">                        
            <div className="step" ref={container1Ref}>
                <div className="image-container">
                    <Image src={img} alt="step1_image" className={is1Visible ? "reveal" : ""} width={800} height={800}/>
                </div>
                
                <div className={`step-contents ${is1Visible ? 'text-animate':''}`}>
                    <div className="stepNo">01</div>
                    <div className="stepTitle fade-slide-right fade-delay-2">Complete the Multi-Step Assessment</div>
                    <div className="stepDesc fade-slide-right fade-delay-2">Answer a series of structured questions covering your physical fitness, high-altitude experience, mental preparedness, and technical climbing skills. The form takes just a few minutes and is designed for beginners and experienced climbers alike.</div>
                </div>
            </div>                    
            <div className="step" ref={container2Ref}>
                <div className="image-container">
                    <Image src={img} alt="step1_image" className={is2Visible ? "reveal" : ""} width={800} height={800}/>
                </div>
                <div className={`step-contents ${is2Visible ? 'text-animate':''}`}>
                    <div className="stepNo">02</div>
                    <div className="stepTitle fade-slide-right fade-delay-2">Understand Your Readiness Level</div>
                    <div className="stepDesc fade-slide-right fade-delay-2">Your responses will help you assess how prepared you are for the physical and environmental challenges of high-altitude expeditions. It reveals both your strengths and areas that may need improvement before you climb.</div>
                </div>
            </div>              
            <div className="step" ref={container3Ref}>
                <div className="image-container">
                    <Image src={img} alt="step1_image" className={is3Visible ? "reveal" : ""} width={800} height={800}/>
                </div>
                <div className={`step-contents ${is3Visible ? 'text-animate':''}`}>
                    <div className="stepNo">03</div>
                    <div className="stepTitle fade-slide-right fade-delay-2">Use Your Results to Plan Ahead</div>
                    <div className="stepDesc fade-slide-right fade-delay-2">Based on your inputs, you can make informed decisions on training, gear, acclimatization, or whether you need expert guidance. The test acts as a starting point for building a safer and smarter climbing plan.</div>
                </div>
            </div>             
        </div> 
    </Fragment>
  )
}
