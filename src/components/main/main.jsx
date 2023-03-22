import './main.scss'
import {Navbar} from '../'
import { Button } from '../../ui'

const Main = () => {
  return (
    <div className="main">
        <div className="main-inbox">
            <Navbar/>
            <div className="main-left">
                <h1>90% Clients Hire Freelancer with Better Reviews</h1>
                <Button
                    title={'Create Profile'}
                    width={'203.6px'}
                    height={'65px'}
                    color={'#263959'}
                    backgroundColor={'#3EE8B5'}
                />
            </div>
        </div>
    </div>
  )
}

export default Main