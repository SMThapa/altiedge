import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

import location from '../../assets/icons/pin.webp';
import date from '../../assets/icons/calendar.webp';

export const ContentEvents = () => {

const events = [
  {
    id: "PT01",
    title: "Physical Training (1-Month Online Program)",
    price: "INR 8,000",
    description: "A structured one-month online program to build strength, endurance, and flexibility for mountaineering. Includes: • 2 sessions on physiology of training • 1 session on personalized training regime • 1 session on biometrics & feedback.",
    date: "2025-09-05",
    location: "Online",
    duration: "1 Month",
    status: "upcoming"
  },
  {
    id: "Tech01",
    title: "Basic Technical Training (Outdoor – 1 Day)",
    price: "On Request",
    description: "A hands-on one-day outdoor training covering essential mountaineering techniques: gear handling, rope knots, jumaring, rappelling, ladder crossing, and tent pitching.",
    date: "2025-09-12",
    location: "Manali, Himachal Pradesh",
    duration: "1 Day",
    status: "upcoming"
  },
  {
    id: "Tech02",
    title: "Advanced Technical Training (Outdoor – 7 Days)",
    price: "On Request",
    description: "An intensive seven-day training program in Himachal or Ladakh focusing on technical skills: ice, rock, and snow craft, along with winter conditioning for high-altitude expeditions.",
    date: "2025-10-01",
    location: "Leh, Ladakh",
    duration: "7 Days",
    status: "upcoming"
  },
  {
    id: "Web01",
    title: "Expert Talks & Webinars",
    price: "INR 1,500",
    description: "An engaging online session with experienced mountaineers, nutritionists, and high-altitude medical experts. Learn practical tips on health, training, and expedition preparation.",
    date: "2025-09-20",
    location: "Online",
    duration: "2 Hours",
    status: "upcoming"
  },
  {
    id: "MT01",
    title: "Mentorship Program (1-Month)",
    price: "INR 12,000",
    description: "A comprehensive one-month mentorship covering: physical training, mental conditioning, acclimatization, altitude illness prevention, and expedition planning. Includes free access to Web01.",
    date: "2025-09-15",
    location: "Online + Outdoor Sessions",
    duration: "1 Month",
    status: "upcoming"
  },
  {
    id: "MT03",
    title: "Mentorship Program (3-Months)",
    price: "INR 32,000",
    description: "A three-month mentorship program offering advanced guidance on training, acclimatization, and expedition planning. Includes free access to Web01 and Tech01.",
    date: "2025-10-05",
    location: "Online + Outdoor Sessions",
    duration: "3 Months",
    status: "upcoming"
  },
  {
    id: "MT06",
    title: "Mentorship Program (6-Months)",
    price: "INR 58,000",
    description: "An extended six-month mentorship with full benefits of MT01, plus regular progress tracking. Free access to Web01 (Webinars) and Tech01.",
    date: "2025-11-01",
    location: "Online + Outdoor Sessions",
    duration: "6 Months",
    status: "upcoming"
  },
  {
    id: "8k",
    title: "Elite Mentorship (8K Peaks & Everest Prep)",
    price: "On Request",
    description: "A six to twelve month high-level mentorship designed for expeditions to Mt. Everest and other 8,000m peaks. Includes lifetime access to Web01 and free access to Tech01.",
    date: "2025-12-01",
    location: "Nepal / Tibet (Expedition Prep)",
    duration: "6–12 Months",
    status: "upcoming"
  },
  {
    id: "Custom",
    title: "Custom Expedition Mentorship",
    price: "On Request",
    description: "A fully tailored mentorship program designed for your personal mountaineering goals. Options include: • Custom01 – EBC, Elbrus, Kilimanjaro, Island Peak • Custom02 – Lenin, Ama Dablam, Nun, Kun, Trishul • Custom03 – Denali, Aconcagua.",
    date: "Flexible",
    location: "Custom Locations",
    duration: "Flexible",
    status: "upcoming"
  }
]



  return (
    <div className="event-contents">


      <div className="header-content">
        <div className="title"> Upcoming Programms</div>        
      </div>

      {
        events.slice(0,3).map((item, index)=>(
          <div key={index}>
            <div className="event-card">     
              <div className="content-left">  
                <div className="event-info"><span><Image src={location} alt='location-icon'/> {item.location},</span> <span><Image src={date} alt='date-icon'/> {item.date}</span> </div>
                <div className="event-title">{item.title}</div>                  
                <div className="event-price"><span>Price:</span> {item.price} </div>
                <div className="event-description">{item.description}</div>
              </div>   
              <div className="content-right">
                <div className="action-group">
                  <div className="btn-primary-dark">Enroll</div>
                  <div className="btn-primary-dark">know more</div>
                </div>
              </div>
            </div>
            <div className="underline"></div>
          </div>
        ))
      }
      <div className='btn-primary-dark'>More Events</div>
    </div>
  )
}
