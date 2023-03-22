import {Star} from '../../assets/images/svg'


const CarouselItem = ({img, username, job, title, body}) => {
  return (
    <div className='carousel-item'>
                  <div className="user">
                    <img src={img} alt=""/>
                    <div className="username">
                      <h4>{username}</h4>
                      <p>{job}</p>
                    </div>
                  </div>
                  <div className="user-info">
                    <h5>{title}</h5>
                    <p>{body}</p>
                  </div>
                  <div className="star">
                    <span  className='star-item'>
                      <Star className='star-icon'/>
                    </span>
                    <span  className='star-item'>
                      <Star className='star-icon'/>
                    </span>
                    <span  className='star-item'>
                      <Star className='star-icon'/>
                    </span>
                    <span  className='star-item'>
                      <Star className='star-icon'/>
                    </span>
                    <span  className='star-item'>
                      <Star className='star-icon'/>
                    </span>
                  </div>
                </div>
  )
}

export default CarouselItem