import './slider.scss'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {avatar1, avatar2, avatar3} from '../../assets/images/jpg'
import {CarouselItem} from '../'

const Slider = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
  return (
    <div className='carousel'>
        <h1 data-aos="zoom-in">Check Out Recent Review</h1>
        <div className="carousel-box">
            <Carousel responsive={responsive}>
                <CarouselItem 
                  data-aos="flip-left"
                  img={avatar1} 
                  username={'James Conway'}
                  job={'Developer'}
                  title={'Awesome Work!!'}
                  body={'This is unbelievable. He is too fast and he work with details. I will hire him again.'}
                />
                <CarouselItem 
                  data-aos="flip-left"
                  img={avatar2} 
                  username={'Augustine Watkins'}
                  job={'UX/ UI Designer'}
                  title={'Awesome UX/ UI designer'}
                  body={'Augustine is still one of the best i have had the pleasure of working with. Her professionalism and detail'}
                />
                <CarouselItem 
                  data-aos="flip-left"
                  img={avatar3} 
                  username={'Jorge Mclaughlin'}
                  job={'Digital Marketer'}
                  title={'Perfection! Went above!'}
                  body={'Augustine is still one of the best i have had the pleasure of working with. Her professionalism and detail'}
                />
                <CarouselItem 
                  data-aos="flip-left"
                  img={avatar1} 
                  username={'James Conway'}
                  job={'Developer'}
                  title={'Awesome Work!!'}
                  body={'This is unbelievable. He is too fast and he work with details. I will hire him again.'}
                />
                <CarouselItem 
                  data-aos="flip-left"
                  img={avatar2} 
                  username={'Augustine Watkins'}
                  job={'UX/ UI Designer'}
                  title={'Awesome UX/ UI designer'}
                  body={'Augustine is still one of the best i have had the pleasure of working with. Her professionalism and detail'}
                />
                <CarouselItem 
                  data-aos="flip-left"
                  img={avatar3} 
                  username={'Jorge Mclaughlin'}
                  job={'Digital Marketer'}
                  title={'Perfection! Went above!'}
                  body={'Augustine is still one of the best i have had the pleasure of working with. Her professionalism and detail'}
                />
            </Carousel>
        </div>
    </div>
  )
}

export default Slider