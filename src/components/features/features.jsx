import './features.scss'
import {
    dribble, behance, github, instagram, 
    stackoverflow, maskgroup, marketplacetop,
    collectBg, collectBgImage1, collectBgImage2
} from '../../assets/images/png'
import{
    Business, Contentwriting, Dataentry, RightIcon,
    Development, Digitalmarketing, Graphicdesign
} from '../../assets/images/svg'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import {Button} from '../../ui'

const Feature = () => {
    useEffect(()=>{
        AOS.init({duration: 1000})
    }, [])
  return (
    <div className='feauture'>
        {/*  PARTNER  */}
        <div className="partner" data-aos="fade-up">
            <img src={dribble} alt="dribble" className='partner-item' />
            <img src={behance} alt="dribble" className='partner-item' />
            <img src={github} alt="dribble" className='partner-item' />
            <img src={instagram} alt="dribble" className='partner-item' />
            <img src={stackoverflow} alt="dribble" className='partner-item' />
        </div>
        {/* AMAZING */}
        <div className="amazing">
            <div className="amazing-left" data-aos="fade-right">
                <img src={maskgroup} alt="markgroup" className='markgroup'/>
            </div>
            <div className="amazing-right" data-aos="fade-left">
                <h1>Our amazing Features Helpfull for your Business</h1>
                <div className="amazing-box">
                    <div className="amazing-box-item" data-aos="fade-down-right">
                        <h4>Collect Reviews </h4>
                        <p>Best way to collect review. Invite your client and get review from client.</p>
                    </div>
                    <div className="amazing-box-item" data-aos="fade-down-left">
                        <h4>Top Rated Freelancer </h4>
                        <p>Find the right freelancer to begin working on your project within minutes.</p>
                    </div>
                    <div className="amazing-box-item" data-aos="fade-up-right">
                        <h4>Find Out Project</h4>
                        <p>Find out project which match your skill and grab the opprtunity to work with popular companies.</p>
                    </div>
                    <div className="amazing-box-item" data-aos="fade-up-left">
                        <h4>Create portfolio</h4>
                        <p>Best way to show your outstanding skill by creating portflio and get more clients.</p>
                    </div>
                </div>
            </div>
        </div>

        {/*  MARKETPLACE  */}
        <div className="marketplace">
            {/* <span className="marketplace-bg"></span> */}
            <img src={marketplacetop} alt="marketplacetop" className='marketplacetop' />
                    <div className="explore-box">
                    <div className="explore" data-aos="zoom-in">
                        <h1>Explore the Marketplace</h1>
                        <p>We make it easy to work with professional, creative experts from around the world</p>
                    </div>
                    </div>
                    <div className="marketplace-box">
                        <div className="marketplace-box-item" data-aos="flip-left">{console.log(Graphicdesign)}
                            <Graphicdesign className="marketplace-item-icon"/>
                            <h5>Graphic Design</h5>
                            <p>12,437 Jobs</p>
                        </div>
                        <div className="marketplace-box-item" data-aos="flip-left">
                            <Digitalmarketing className="marketplace-item-icon"/>
                            <h5>Digital Marketing</h5>
                            <p>7234Jobs</p>
                        </div>
                        <div className="marketplace-box-item" data-aos="flip-left">
                            <Contentwriting className="marketplace-item-icon"/>
                            <h5>Content Writing</h5>
                            <p>8,231 Jobs</p>
                        </div>
                        <div className="marketplace-box-item" data-aos="flip-left">
                            <Development className="marketplace-item-icon"/>
                            <h5>Development</h5>
                            <p>9875 Jobs</p>
                        </div>
                        <div className="marketplace-box-item" data-aos="flip-left">
                            <Dataentry className="marketplace-item-icon"/>
                            <h5>Data Entry</h5>
                            <p>8,310 Jobs</p>
                        </div>
                        <div className="marketplace-box-item" data-aos="flip-left">
                            <Business className="marketplace-item-icon"/>
                            <h5>Business</h5>
                            <p>6,123 Jobs</p>
                        </div>
                        <div className="marketplace-box-item-category" data-aos="flip-right">
                            <h4>50+ <span> Categories</span></h4>
                            <h5>You can Explore</h5>
                            <p>
                                <RightIcon className="marketplace-item-icon-1"/>
                            </p>
                    </div>
                </div>
        </div>

        {/*  COLLECT  */}
        <div className="collect">
                {/* <img src={collectBg} alt="collectBg" className='collect-bg'/> */}
            <div className="collect-left" data-aos="zoom-in-right">
                <h1>Collect Reviews from Your Existing Clients.</h1>
                <p>To get reviews on, encourage your client to spread the word about your service. Verify your business so your information is eligible to appear on Maps.</p>
                <Button
                    title={'How it Works'}
                    width={'203.6px'}
                    height={'65px'}
                    color={'#263959'}
                    backgroundColor={'#3EE8B5'}
                />
            </div>
            <div className="collect-right" data-aos="zoom-in-left">
                <img src={collectBgImage1} className={'collect-right-img'}/>
                <img src={collectBgImage2} className={'collect-right-img-2'}/>
            </div>
        </div>
    </div>
  )
}

export default Feature