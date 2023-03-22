import {ReactComponent as Logo} from '../../assets/images/svg/logo.svg'
import './navbar.scss'
import {Button} from '../../ui'
import { useState } from 'react'
import { NavbarResponsiveItems } from '../'

const Navbar = () => {
    const [isHamburger, setIsHamburger] = useState(false)
    // const isHamburger = false;
  return (
    <nav className='navbar'>
        <a href="#" className='nav-logo'><Logo className='logo'/></a>
        <ul className='nav-menu'>
            <li className='nav-item'>
                <a href="#" className='nav-link'>Home</a>
            </li>
            <li className='nav-item'>
                <a href="#" className='nav-link'>Rate a Client</a>
            </li>
            <li className='nav-item'>
                <a href="#" className='nav-link'>Rate a Freelancer</a>
            </li>
            <li className='nav-item'>
                <a href="#" className='nav-link'>Log In</a>
            </li>
            <li className='nav-item'>
                <Button
                    title={'Create Accaunt'}
                    width={'155px'}
                    height={'49px'}
                    color={'#FFFFFF'}
                    backgroundColor={'rgba(255, 255, 255, 0.19)'}
                />
            </li>
        </ul>
        <div className={isHamburger?'hamburgerClose':'hamburger'} onClick={()=>setIsHamburger(prev=>!prev)}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
        </div>
        {
          isHamburger?
          <NavbarResponsiveItems/>:''
        }
    </nav>
  )
}

export default Navbar