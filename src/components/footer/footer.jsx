import './footer.scss'
import {line, footerBg1, footerBg2} from '../../assets/images/png'
import {Instagram, Facebook, Twitter, FooterLogo} from '../../assets/images/svg'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-box">
            <div className="footer-left">
                {/* <img src={footerLogo} alt="footer-logo" className='footer-logo' /> */}
                <a href="#" className='footer-logo'><FooterLogo className='logo-footer'/></a>
                <div className="network-box">
                    <div className="network-box-item">
                        <Instagram width={'25px'} height={'25px'} className='network-box-icon'/>
                    </div>{console.log(Instagram)}
                    <div className="network-box-item">
                        <Twitter width={'25px'} height={'25px'} className='network-box-icon'/>
                    </div>
                    <div className="network-box-item">
                        <Facebook width={'25px'} height={'25px'} className='network-box-icon'/>
                    </div>
                </div>
            </div>
            <div className="footer-right">
                <div className="footer-box">
                    <h4>About Us</h4>
                    <a href="#" className='footer-item'>Our Company</a><br />
                    <a href="#" className='footer-item'>Blog</a><br />
                    <a href="#" className='footer-item'>Blog</a><br />
                    <a href="#" className='footer-item'>Press Center</a><br />
                    <a href="#" className='footer-item'>Contact</a>
                </div>
                <div className="footer-box">
                    <h4>Community</h4>
                    <a href="#" className='footer-item'>Support Center</a><br />
                    <a href="#" className='footer-item'>Freelancer</a><br />
                    <a href="#" className='footer-item'>Reviews</a><br />
                    <a href="#" className='footer-item'>Log In</a><br />
                    <a href="#" className='footer-item'>Sign Up</a>
                </div>
                <div className="footer-box">
                    <h4>Business</h4>
                    <a href="#" className='footer-item'>Grabstar Business</a><br />
                    <a href="#" className='footer-item'>Product</a><br />
                    <a href="#" className='footer-item'>Pricing</a><br />
                    <a href="#" className='footer-item'>Template</a><br />
                    <a href="#" className='footer-item'>Find Job</a>
                </div>
            </div>
        </div>
        <img src={line} alt="line" className='line' />
        {/* <img src={footerBg1} alt="footer-1" className='footer-bg-1' />
        <img src={footerBg2} alt="footer-2" className='footer-bg-2' /> */}
    </div>
  )
}

export default Footer