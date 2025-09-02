import React from 'react'
import { PageBanner } from '../components/PageBanner'
import { ContentSwitch } from './ContentSwitch';
import bannerImg from '../../assets/17.webp';
import { ContentPrograms } from './ContentPrograms';
import { Mentorship } from './Mentorship';

const page = () => {
  const banner = {
    bannerImg: bannerImg,
    title: 'Discover Our Programs & Events',
    subTitle: 'Join, Learn, and Connect',
    description:"Explore our curated lineup of workshops, expeditions, and community events designed to inspire, educate, and bring adventure enthusiasts together.",
  }

  return (
    <main>
      <section>
        <div className='programs-events'>
          <PageBanner banner={banner}/>
          <div className="pageContents">
            <Mentorship/>
            <ContentPrograms/>                   
            <ContentSwitch/>                                                  
          </div>
        </div>
      </section>
    </main>
  )
}

export default page