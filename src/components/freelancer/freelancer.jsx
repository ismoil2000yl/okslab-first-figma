import './freelancer.scss'
import { freelancerImg} from '../../assets/images/png'
import {Button} from '../../ui/'

const Freelancer = () => {
  return (
    <div className='freelancer'>
        <div className="freelancer-left" data-aos="zoom-in-down">
            <img src={freelancerImg} alt="freelancerImg" />
        </div>
        <div className="freelancer-right" data-aos="zoom-in-left">
            <h1>Hire Our Top Rated Freelancer</h1>
            <p>To get reviews on, encourage your client to spread the word about your service. Verify your business so your information is eligible to appear on Maps.</p>
            <Button
                title={'Checkout Profile'}
                width={'203.6px'}
                height={'65px'}
                color={'#263959'}
                backgroundColor={'#3EE8B5'}
            />
        </div>
    </div>
  )
}

export default Freelancer