import { Fade } from 'react-awesome-reveal';
import slider1 from '../../../assets/image/b1.jpg'
import slider2 from '../../../assets/image/b2.jpg'
import slider3 from '../../../assets/image/b3.jpg'
import 'animate.css';

const Banner = () => {
    return (
        
        <div className="carousel w-full h-[600px]">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={slider1} className="w-full rounded-xl" />
                <div className="absolute rounded-xl flex justify-center items-center h-full left-0 top-0 bg-gradient-to-r from-[#3e3939] to-[rgba(21, 21, 21, 0)]">
                    <div className='text-white space-y-7 pl-12 w-2/3'>
                        
                   <Fade> <h2 className='text-5xl font-bold '>An Artistic Wonderland of Inspiration and Beauty</h2></Fade>
                        <p></p>
                        <div>
                            <button className="btn btn-secondary">Explore More</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide4" className="btn btn-circle bg-pink-400 mr-5">❮</a>
                    <a href="#slide2" className="btn btn-circle bg-pink-400">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={slider2} className="w-full rounded-xl" />
                <div className="absolute rounded-xl flex justify-center items-center h-full left-0 top-0 bg-gradient-to-r from-[#3e3939] to-[rgba(21, 21, 21, 0)]">
                    <div className='text-white space-y-7 pl-12 w-2/3'>
                    <h2 className='text-5xl font-bold'>Unveiling the Masterpieces in Our Art and Gallery Oasis</h2>
                        
                        <div>
                        <button className="btn btn-secondary">Explore More</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide1" className="btn btn-circle bg-pink-400 mr-5">❮</a>
                    <a href="#slide3" className="btn btn-circle bg-pink-400">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={slider3} className="w-full rounded-xl" />
                <div className="absolute rounded-xl flex justify-center items-center h-full left-0 top-0 bg-gradient-to-r from-[#3e3939] to-[rgba(21, 21, 21, 0)]">
                    <div className='text-white space-y-7 pl-12 w-2/3'>
                        <h2 className='text-5xl font-bold'>Discover, Engage, and Be Transformed in Our Captivating Gallery Wonderland</h2>
                
                        <div>
                        <button className="btn  btn-secondary">Explore More</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex  justify-between transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide2" className="btn btn-circle bg-pink-400 mr-5">❮</a>
                    <a href="#slide4" className="btn btn-circle bg-pink-400">❯</a>
                </div>
            </div>
            
        </div>
    );
};

export default Banner;