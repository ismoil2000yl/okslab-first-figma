import './navbar-responsive-items.scss'
import {Button} from '../../ui'

const NavbarResponsiveItems = () => {
  return (
    <ul className='navbar-responsive-items'>
        <li><a href="#" className='nav-responsive-link'>Home</a></li>
        <li><a href="#" className='nav-responsive-link'>Rate a Client</a></li>
        <li><a href="#" className='nav-responsive-link'>Rate a Freelancer</a></li>
        <li><a href="#" className='nav-responsive-link'>Log In</a></li>
        <li>
          <Button
            title={'Create Accaunt'}
            width={'155px'}
            height={'49px'}
            color={'#FFFFFF'}
            backgroundColor={'rgba(255, 255, 255, 0.19)'}
          />
        </li>
    </ul>
  )
}

export default NavbarResponsiveItems