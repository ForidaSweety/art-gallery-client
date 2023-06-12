import e1 from '../../../assets/image/Ex1.jpg'
import e2 from '../../../assets/image/Ex2.jpg'
import e3 from '../../../assets/image/Ex3.jpg'
import e4 from '../../../assets/image/Ex4.jpg'
import e5 from '../../../assets/image/Ex5.jpg'
import e6 from '../../../assets/image/Ex-6.jpg'
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Flip } from 'react-awesome-reveal'

const Exhibitions = () => {
    return (

        <div className="mt-12 mb-20  rounded-xl p-8">
          <Flip>  <h1 className="text-4xl font-semibold text-center text-pink-600 mb-4 ">Exhibitions</h1></Flip>
            <p className="mb-5"> <hr /></p>
            <div>

                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    freeMode={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[FreeMode, Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img className='h-64 w-full' src={e1} alt="" />
                        <h3 className='text-center font-bold text-2xl mt-2'>Arts At The Limits Of Reason</h3>
                        <p className='text-center text-sm text-orange-500'>20 june 2023</p>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='h-64 w-full' src={e2} alt="" />
                        <h3 className='text-center font-bold text-2xl mt-2'>Luminous Odyssey</h3>
                        <p className='text-center text-sm text-orange-500'>08 August 2023</p>
                        </SwiperSlide>
                    <SwiperSlide>
                        <img className='h-64 w-full' src={e3} alt="" />
                        <h3 className='text-center font-bold text-2xl mt-2'>Serene Reflections</h3>
                        <p className='text-center text-sm text-orange-500'>15 August 2023</p>
                        </SwiperSlide>
                    <SwiperSlide>
                        <img className='h-64 w-full' src={e4} alt="" />
                        <h3 className='text-center font-bold text-2xl mt-2'>Whispering Meadows</h3>
                        <p className='text-center text-sm text-orange-500'>12 September 2023</p>
                        </SwiperSlide>
                    <SwiperSlide>
                        <img className='h-64 w-full' src={e5} alt="" />
                        <h3 className='text-center font-bold text-2xl mt-2'> Persistence Memory</h3>
                        <p className='text-center text-sm text-orange-500'>16  November 2023</p>
                        </SwiperSlide>
                    <SwiperSlide>
                        <img className='h-72 w-full' src={e6} alt="" />
                        <h3 className='text-center font-bold text-2xl mt-2'>Ethereal Symphony</h3>
                        <p className='text-center text-sm text-orange-500'>30  November 2023</p>
                        </SwiperSlide>

                </Swiper>
            </div>

        </div>


    );
};

export default Exhibitions;