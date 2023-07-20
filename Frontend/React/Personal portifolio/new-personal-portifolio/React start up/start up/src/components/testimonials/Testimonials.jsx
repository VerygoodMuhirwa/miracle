import React from 'react'
import "./testimonials.css"
import Client1 from "../../assets/verygood image.jpg"
import Client2 from "../../assets/verygood image.jpg"
import Client3 from "../../assets/verygood image.jpg"
import Client4 from "../../assets/verygood image.jpg"
import Client5 from "../../assets/verygood image.jpg"
import {  Pagination} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
import 'swiper/css';

const Testimonials = () => {

  const data = [
    {
      avatar: Client1,
      name: "ISITE Yves",
      review:" What an amazing web developer Verygood Muhirwa is. He developed for me an awesome e-commerce application that is now helping me to earn lots of income nowadays"
    },

    {
      avatar: Client2,
      name: "TURINUMUGISHA Souvenir",
      review: " What an amazing web developer Verygood Muhirwa is.Although he is my young brother ,  He developed for me an awesome e-commerce application that is now helping me to earn lots of income nowadays"
    },
    {
      avatar: Client3,
      name: "MWUNGELE Elite",
      review: " What an amazing web developer Verygood Muhirwa is. He developed for me an awesome e-commerce application that is now helping me to earn lots of income nowadays"
    },
    {
      avatar: Client4,
      name: "MWIZERWA Stanley",
      review: " What an amazing web developer Verygood Muhirwa is. He developed for me an awesome e-commerce application that is now helping me to earn lots of income nowadays"
    },
    {
      avatar: Client5,
      name: "HABANASHAKA Jean Damascene",
      review: " What an amazing web developer Verygood Muhirwa is. He developed for me an awesome e-commerce application that is now helping me to earn lots of income nowadays"
    },
   

  ]

  return (
    <section id='testimonials'>

      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper className="container testimonial_container"

        //install Swipper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidePerView={1}
        pagination={{clickable:true}}
>
      {data.map(({ avatar, review, name },index) => {
        return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client_avatar">
                <img src={avatar} alt="First client" />
              </div>
              <h5 className="client_name">{name}</h5>
              <small className='client_review'>{review} </small>
            </SwiperSlide>
      )
    })}
          </Swiper>

    </section>
  )
}

export default Testimonials