import React from 'react'
import Slider from 'react-slick'
import { useState } from 'react'
const categoriesdata: Array<{
  image: any
  title: string
}> = [
  {
    image: 'games.png',
    title: 'Games'
  },
  {
    image: 'sports.png',
    title: 'Sports'
  },
  {
    image: 'metaverse.png',
    title: 'Metaverse'
  },
  {
    image: 'art.png',
    title: 'Art'
  },
  {
    image: 'sports.png',
    title: 'Sports'
  },
  {
    image: 'metaverse.png',
    title: 'Metaverse'
  },
  {
    image: 'art.png',
    title: 'Art'
  }
]

const Categories: React.FC = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 2500,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
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
  const [slider, setSlider] = React.useState<Slider | null>(null)
  return (
    <>
      <div>
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
      <div className='m-12'>
        <Slider {...settings}>
          {categoriesdata.map((val, index) => (
            <div
              className='flex flex-col items-center justify-center bg-category rounded-6xl   '
              key={index}
            >
              <div className='flex items-center justify-around pt-2.5'>
                <img src={val.image} />
              </div>
              <text className='text-text flex text-center items-center justify-center text-2xl font-bold leading-8 pt-12 pb-12'>
                {val.title}
              </text>
            </div>
          ))}
        </Slider>
      </div>
    </>
  )
}
export default Categories
