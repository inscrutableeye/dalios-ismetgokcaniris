import React from 'react'
import { useState } from 'react'
import Slider from 'react-slick'
const projectmobiledata: Array<{
  title: string
  image: any
  image2: any
}> = [
  {
    title: 'All',
    image: 'Rectangle 12.png',
    image2: 'Rectangle 13.png'
  },
  {
    title: 'UI/UX',
    image: 'Rectangle 12.png',
    image2: 'Rectangle 13.png'
  },
  {
    title: 'Web Design',
    image: 'Rectangle 12.png',
    image2: 'Rectangle 13.png'
  },
  {
    title: 'Branding',
    image: 'Rectangle 12.png',
    image2: 'Rectangle 13.png'
  },
  {
    title: 'Interaction',
    image: 'Rectangle 12.png',
    image2: 'Rectangle 13.png'
  }
]
const ProjectMobile: React.FC = () => {
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
  const [selectedIndex, setSelectedIndex] = useState(0)
  return (
    <>
      <div className='flex flex-col items-center justify-center pt-32'>
        <div className='flex flex-row items-center justify-between'>
          <text className='text-text text-2xl font-bold leading-7'>
            Our Latest Projects
          </text>
          <text className=' text-heroButton  text-base font-normal leading-5 ml-16'>
            See All
          </text>
        </div>
        <div className='flex flex-row items-center  justify-center pt-6 overflow-x-auto'>
          {projectmobiledata.map((val: any, index: any) => {
            return (
              <text
                onClick={() => setSelectedIndex(index)}
                className={
                  selectedIndex === index
                    ? 'text-select px-6 text-base font-medium leading-7  '
                    : 'text-text px-6 text-base font-medium leading-7'
                }
              >
                {val.title}
              </text>
            )
          })}
        </div>
      </div>
      <div className='flex flex-row items-center justify-center '>
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
      <Slider {...settings} ref={slider => setSlider(slider)} className='m-4 '>
        {projectmobiledata.map((val, index) => (
          <div
            className='flex flex-row items-center justify-center'
            key={index}
          >
            <div className='flex flex-row pt-10'>
              <img src={val.image} />
              <img src={val.image2} className='pl-24' />
            </div>
          </div>
        ))}
      </Slider>
    </>
  )
}
export default ProjectMobile
