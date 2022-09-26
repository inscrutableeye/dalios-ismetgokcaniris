import React from 'react'
import Slider from 'react-slick'
import { useState } from 'react'
const servicesData: Array<{
  icon: any
  title: string
  desc: string
  buttontext: string
}> = [
  {
    icon: 'content.png',
    title: 'content writing',
    desc:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. A consequat nunc id purus pretium sagittis diam quis massa. Nulla ridiculus nullam bibendum luctus viverra. Eu pellentesque sem sed platea diam dignissim duis purus. ',
    buttontext: 'Read more'
  },
  {
    icon: 'content.png',
    title: 'content writing',
    desc:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. A consequat nunc id purus pretium sagittis diam quis massa. Nulla ridiculus nullam bibendum luctus viverra. Eu pellentesque sem sed platea diam dignissim duis purus. ',
    buttontext: 'Read more'
  }
]
const ServicesMobil: React.FC = () => {
  const settings = {
    dots: true,
    arrows: false,
    fade: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }
  const [slider, setSlider] = useState<Slider | null>(null)
  return (
    <>
      <div className='flex flex-row items-center justify-center'>
        <link
          rel='stylesheet'
          type='text/css'
          charSet='UTF-8'
          href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css'
        />
        <link
          rel='stylesheet'
          type='text/css'
          href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css'
        />
      </div>
      <Slider {...settings} ref={slider => setSlider(slider)} className='m-4'>
        {servicesData.map((val, index) => (
          <div
            className='flex flex-col items-start bg-servicesback justify-center rounded-5xl'
            key={index}
          >
            <img src={val.icon} className="className='w-14 h-14 ml-10 mt-24" />
            <div className='flex flex-col'>
              <text className='text-text text-3xl font-semibold leading-9 pl-9 py-9'>
                {' '}
                {val.title}
              </text>
              <text className='text-text text-base font-normal leading-8 px-20'>
                {val.desc}
              </text>
            </div>
            <button className=' border-2 border-text rounded-full h-14 w-32 mr-32 ml-9 mt-10 mb-20'>
              <text className='text-text py-2.5'>{val.buttontext}</text>
            </button>
          </div>
        ))}
      </Slider>
    </>
  )
}
export default ServicesMobil
