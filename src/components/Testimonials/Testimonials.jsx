import './Testimonials.css'
import React from 'react'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import {Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    avatar: AVTR1,
    name : 'abbas',
    review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis optio minima impedit maxime quia quibusdam harum officiis ea quaerat ipsum corporis molestiae inventore vel incidunt odio animi nesciunt, ab perspiciatis!',
  },
  {
    avatar: AVTR2,
    name : 'abbas',
    review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis optio minima impedit maxime quia quibusdam harum officiis ea quaerat ipsum corporis molestiae inventore vel incidunt odio animi nesciunt, ab perspiciatis!',
  },
  {
    avatar: AVTR3,
    name : 'abbas',
    review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis optio minima impedit maxime quia quibusdam harum officiis ea quaerat ipsum corporis molestiae inventore vel incidunt odio animi nesciunt, ab perspiciatis!',
  },
  {
    avatar: AVTR4,
    name : 'abbas',
    review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis optio minima impedit maxime quia quibusdam harum officiis ea quaerat ipsum corporis molestiae inventore vel incidunt odio animi nesciunt, ab perspiciatis!',
  },
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper className="container testimonials__container"
      // install Swiper modules
      modules={[Pagination]} spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
      >
        {data.map(({avatar, name, review}, index) => {
          return (
            <SwiperSlide key={index} className='testimonial'>
              <div className="client__avatar">
                <img src={avatar} />
              </div>
              <h5 className='client__name'>{name}</h5>
              <small className='client__review'>{review}</small>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </section>
  )
}

export default Testimonials