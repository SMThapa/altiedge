import React from 'react';
import { PageBanner } from '../components/PageBanner';
import { Test } from './Test';

import bannerImg from '../../assets/12.webp';
import { WriteUps } from './WriteUps';

const page = () => {

  const banner = {
    bannerImg: bannerImg,
    title:'Are You Ready for High Altitude Climbing?',
    subTitle: 'Start Your journey',
    description: "Take our expert-designed readiness test to evaluate your physical fitness, altitude experience, technical skills, and mental resilience before heading to the mountains."
  }

  return (
    <main>
      <section>
        <div className="readinessPage">
          <PageBanner banner={banner}/>
          <div className="pageContents">            
          <WriteUps/>                                 
          </div>
          <div className='pageContents'>
            <Test/>
          </div>
        </div>
      </section>
    </main>
  )
}

export default page