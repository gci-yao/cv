import React from 'react'
import './testimonials.css'
import AVTR1 from '../../Asserts/AVATAR 1.JPG'
import AVTR2 from '../../Asserts/AVATAR 2.PNG'
import AVTR3 from '../../Asserts/AVATAR 3.JPG'
import AVTR4 from '../../Asserts/AVATAR 4.PNG'

// import Swiper JS

//import { Pagination }  from 'swiper/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
// import Swiper styles 
import "swiper/css";
import "swiper/css/pagination";


const Testimonials = () => {
  return (
    <section id='testimonials'>
        <h5>Review from clients</h5>
        <h2>Testimonials</h2>

        <Swiper className="container testimonials__container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}>
          
          <SwiperSlide className ="testimonials">
            <div className="client__avatar">
              <img src={AVTR1} alt="Avatar one" />            
            </div>
            <h5 className='client__name'>junior juju</h5>
            <small className='client__review'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur atque sunt magni totam cupiditate vel sed impedit quibusdam minima inventore incidunt exercitationem laborum necessitatibus, unde laudantium? Placeat magni voluptatum tenetur?                
            </small>
          </SwiperSlide>
          <SwiperSlide  className ="testimonials">
            <div className="client__avatar">
              <img src={AVTR2} alt="Avatar one" />            
            </div>
            <h5 className='client__name'>Ernest Achiever</h5>
            <small className='client__review'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur atque sunt magni totam cupiditate vel sed impedit quibusdam minima inventore incidunt exercitationem laborum necessitatibus, unde laudantium? Placeat magni voluptatum tenetur?                
            </small>
          </SwiperSlide >
          <SwiperSlide  className ="testimonials">
            <div className="client__avatar">
              <img src={AVTR3} alt="Avatar one" />            
            </div>
            <h5 className='client__name'>Guy charles</h5>
            <small className='client__review'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur atque sunt magni totam cupiditate vel sed impedit quibusdam minima inventore incidunt exercitationem laborum necessitatibus, unde laudantium? Placeat magni voluptatum tenetur?                
            </small>
          </SwiperSlide >
          <SwiperSlide  className ="testimonials">
            <div className="client__avatar">
              <img src={AVTR4} alt="Avatar one" />            
            </div>
            <h5 className='client__name'>Boomaley la legende</h5>
            <small className='client__review'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur atque sunt magni totam cupiditate vel sed impedit quibusdam minima inventore incidunt exercitationem laborum necessitatibus, unde laudantium? Placeat magni voluptatum tenetur?                
            </small>
          </SwiperSlide >
        </Swiper>
    </section>
  )
}

export default Testimonials