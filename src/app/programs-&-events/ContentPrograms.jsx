'use client'
import React, { act, useState } from 'react';
import img from '../../assets/10.webp';
import Image from 'next/image';

export const ContentPrograms = () => {

    const programData = [
        {
        "title": "PT01",
        "price": "INR 8,000",
        "description": "One month online program on physical training. Includes two sessions on physiology of training, one session on customizing training regime, and one session on biometrics and feedback."
        },
        {
        "title": "Tech 01",
        "price": "On Request",
        "description": "One day outdoor technical training covering essentials like gear use, rope knots, jumaring, rappelling, ladder crossing, and tent pitching."
        },
        {
        "title": "Tech 02",
        "price": "On Request",
        "description": "Seven day outdoor technical training in Himachal or Ladakh covering ice, rock, snow crafts, and winter conditioning."
        },
        {
        "title": "Web 01",
        "price": "INR 1,500",
        "description": "Online interactive session with mountaineers, nutritionists, high altitude medical practitioners, and other experts."
        },
        {
        "title": "MT 01",
        "price": "INR 12,000",
        "description": "One month comprehensive mentorship including physical training, mental conditioning, acclimatization, altitude illness prevention, and expedition planning. Free access to Web01."
        },
        {
        "title": "MT 03",
        "price": "INR 32,000",
        "description": "Three months comprehensive mentorship with the same benefits as MT01. Free access to Web01 and Tech01."
        },
        {
        "title": "MT 06",
        "price": "INR 58,000",
        "description": "Six months comprehensive mentorship with the same benefits as MT01. Free access to Web01 (Webinars) and Tech01."
        },
        {
        "title": "8k",
        "price": "On Request",
        "description": "Six to twelve months mentorship for Mt Everest or similar 8K peaks. Lifetime access to Web01 and free access to Tech01."
        },
        {
        "title": "Custom",
        "price": "On Request",
        "description": "Fully tailored mentorship program based on your mountaineering goals. Categories: Custom01 – EBC, Elbrus, Kilimanjaro, Island Peak; Custom02 – Lenin, Ama Dablam, Nun, Kun, Trishul; Custom03 – Denali, Aconcagua."
        }
    ]

    const [active, setActive] = useState(0);
    const handleActive = (index) =>{
        if(index != active){
            setActive(index)
        }
    }

  return (
    <div className="program-contents">

        <div className="header-content">
            <div className="title"> Our Programs</div>   
                <div className="description">
                — Take the first step towards your next life-affirming adventure.
            </div>     
        </div>

        <div className="program-container">                
            {programData.map((item, index) => (
                <div className={`program-item  ${active == index ? 'bg-dark':'bg-light'}`} key={index}>
                    <button 
                        className={`program-question ${active == index ? 'active':''}`} 
                        onClick={() => handleActive(index)}
                    >
                        <h2>{'0' + (index+1)}. {item.title}</h2>
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                            d="M6 9L12 15L18 9"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            />
                        </svg>
                    </button>
                    <div className="program-answer">
                        <div className="left">
                            <Image src={img} alt='image'/>
                        </div>
                        <div className="right">
                            {/* <div className="index">{'0'+(index+1)}</div> */}
                            <div className="index">{item.title}</div>
                            <div className="title">{item.price}</div>
                            <p>{item.description}</p>
                            <div className="action-group">
                                <div className="btn-primary">enroll</div>
                                <div className="btn-primary">know more</div>
                            </div>
                        </div>
                    
                    </div>            
                </div>
            ))}
        </div>
    </div>
  )
}
