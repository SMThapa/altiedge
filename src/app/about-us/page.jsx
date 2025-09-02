import React from 'react'
import { PageBanner } from '../components/PageBanner';
import Image from 'next/image';

import bannerImg from '../../assets/16.webp';
import image1 from '../../assets/14.webp';
import image2 from '../../assets/15small.webp';

import team1 from '../../assets/team1.webp';
import team2 from '../../assets/team2.webp';
import team3 from '../../assets/team3.webp';

const page = () => {

  const banner = {
    bannerImg: bannerImg,
    title: 'About AltiEdge',
    subTitle: 'Shaping Mountaineers, One Summit at a Time',
    description: "Learn about our mission, vision, and the mentors behind AltiEdge. Discover how we prepare climbers through personalized guidance, technical expertise, and a passion for the mountains."
  }

  return (
    <main>
      <section>
        <div className='about-page'>
          <PageBanner banner={banner}/>

          <div className='pageContents'>                      
            <div className="about-left">
              <div className='about-title'>What AltiEdge Is <br />About?</div>


              <Image src={image2} alt='image' placeholder='blur'/>

              <div className="bottom-text">
                "it is not the mountain we conquer, but ourselves." <br /><span> — Sir Edmund Hillary</span>
              </div>
            </div>
            
            <div className="about-right ">
              <div className="about-text-content">
                <h2>Our story</h2>
                <p>AltiEdge is more than a training platform — it’s a movement to prepare climbers to meet the mountains on their terms. Founded by seasoned Indian mountaineers, we provide personalized, science-driven mentorship that blends endurance, strength, mental conditioning, nutrition, acclimatization, and technical skills into one cohesive program.</p>
                <p>By tracking progress and analyzing biometric data, we build efficient, resilient climbers who are fully prepared for high-altitude challenges and committed to safe, responsible mountaineering.</p>
                <h2>Why Train?</h2>
                <p>
                  The world&apos;s most stunning peaks are also the most unforgiving. Thin air, low oxygen, and relentless exertion demand more than conventional fitness — they require targeted preparation rooted in physiology and precision.
                  AltiEdge ensures every climber can adapt, perform, and return safely, no matter how extreme the climb.
                </p>
                <h2>Why Climb?</h2>
                <p>
                  Climbing is more than reaching summits — it&apos;s about overcoming fear, pushing limits, and finding clarity in wild, unyielding places. Each ascent transforms you, forging resilience, camaraderie, and a profound connection with nature&apos;s raw beauty.
                </p>
              </div>

              <Image src={image1} alt='image1'/>
            </div>

          </div>

          <div className="the-team">
            <div className="heading">Meet the Team</div>

            <div className="team-group">
              <div className="team-card">
                <div className="team-image">
                  <Image src={team1} alt='team1'/>
                </div>
                <div className="team-name">Bharath Thammineni</div>
                <div className="team-title"> — Partner</div>
                <div className="team-about">
                  A renowned name in Indian Mountaineering, he comes with unmatched experience of climbing six of the 14 highest peaks in the world (Everest, Kanchenjunga, Lhotse, Makalu, Annapurna & Manaslu) and six of the Seven Summits! He is also the Founder of Boots & Crampons.
                </div>
              </div>
              <div className="team-card">
                <div className="team-image">
                  <Image src={team3} alt='team1'/>
                </div>
                <div className="team-name">Satyadeep Gupta</div>
                <div className="team-title"> — Founder</div>
                <div className="team-about">
                  One of India&apos;s leading mountaineer, and World Record holder for climbing Everest & Lhotse twice in a single season in 2024.
                </div>
              </div>
              <div className="team-card">
                <div className="team-image">
                  <Image src={team2} alt='team1'/>
                </div>
                <div className="team-name">Lt Col Romil Barthwal</div>
                <div className="team-title"> — Partner</div>
                <div className="team-about">
                  Retired as a Special Forces officer, he has lead several successful Army mountaineering expeditions including the mighty Mt Everest in 2019. He is a Boston Marathoner, Half Ironman Podium finisher, La Ultra 111 km non Ladakhi record holder & Ultra cyclist Super Randonneur. He is also the CEO of Boots & Crampons.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default page