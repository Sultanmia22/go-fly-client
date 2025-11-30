
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import bannerImg1 from '../../assets/banner/1.jpg'
import bannerImg2 from '../../assets/banner/2.jpg'
import bannerImg3 from '../../assets/banner/3.jpg'
const Banner = () => {
    return (
       <Carousel className='py-10' autoPlay='true'>
                <div>
                    <img src={bannerImg1} className='rounded-xl'/>
                   
                </div>
                <div>
                    <img src={bannerImg2} className='rounded-xl'/>
                    
                </div>
                <div>
                    <img src={bannerImg3} className='rounded-xl'/>
                    
                </div>
            </Carousel>
    );
};

export default Banner;