import React from 'react'
import Slider from 'react-slick'
const blogData: Array<{
  image: any
  badgetext: string
  date: string
  desc: string
  buttontext: string
}> = [
  {
    image: 'Rectangle 18.png',
    badgetext: 'TECHNOLOGY',
    date: 'John Doe • 19 Jan 2022',
    desc:
      'A small business is only as good as its tools and it is totally true.',
    buttontext: 'Read More'
  },
  {
    image: 'Rectangle 19.png',
    badgetext: 'WEBINER',
    date: 'John Doe • 19 Jan 2022',
    desc: 'Colaboration with team members that will be grow to business.',
    buttontext: 'Read More'
  }
]

const BlogMobile: React.FC = () => {
  const [slider, setSlider] = React.useState<Slider | null>(null)
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
          slidesToShow: 2,
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
  return (
    <>
      <div className='flex flex-row'>
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
        {blogData.map((val, index) => (
          <div className='flex flex-col items-center' key={index}>
            <div className='flex flex-col items-center pb-32'>
              <img src={val.image} />
              <div className='bg-text w-32 flex items-center justify-center rounded-full  mt-6'>
                <text>{val.badgetext}</text>
              </div>
              <text className='text-base leading-6 font-medium text-text  mt-4'>
                {val.date}
              </text>
              <text className=' text-text text-xl font-bold leading-9 mt-4 flex text-center'>
                {val.desc}
              </text>
              <button className='border-text flex  items-center justify-center ml-4 border-2 rounded-full  w-40 h-14 mt-8'>
                <text className=' text-text text-base'>{val.buttontext}</text>
              </button>
            </div>
          </div>
        ))}
      </Slider>
    </>
  )
}
export default BlogMobile
