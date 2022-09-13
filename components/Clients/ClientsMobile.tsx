import React from 'react'
import Slider from 'react-slick'
import { useState } from 'react'
const clientsData: Array<{
  icon: any
  clientdesc: string
  person: any
  personname: string
  personcompany: string
}> = [
  {
    icon: 'clienticon.png',
    clientdesc:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit semperconsequat in dolor mattis pellentesque suspendisse vulputate nec. Scelerisqueelementum,  consequat pharetra lectus eget vivamus ut.Magna aliquam tellus at volutpat crasaliquet facilisi quisadipiscing. Proin egestas et pellentesque augue pretium, amet. Natoque blandit augue integer maecenas mattis amet, nec.',
    person: 'Ellipse 5.png',
    personname: 'Brooklyn Simmons',
    personcompany: 'Pendron.Inc, Ceo'
  },
  {
    icon: 'clienticon.png',
    clientdesc:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit semperconsequat in dolor mattis pellentesque suspendisse vulputate nec. Scelerisqueelementum,  consequat pharetra lectus eget vivamus ut.Magna aliquam tellus at volutpat crasaliquet facilisi quisadipiscing. Proin egestas et pellentesque augue pretium, amet. Natoque blandit augue integer maecenas mattis amet, nec.',
    person: 'Ellipse 5.png',
    personname: 'Brooklyn Simmons',
    personcompany: 'Pendron.Inc, Ceo'
  },
  {
    icon: 'clienticon.png',
    clientdesc:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit semperconsequat in dolor mattis pellentesque suspendisse vulputate nec. Scelerisqueelementum,  consequat pharetra lectus eget vivamus ut.Magna aliquam tellus at volutpat crasaliquet facilisi quisadipiscing. Proin egestas et pellentesque augue pretium, amet. Natoque blandit augue integer maecenas mattis amet, nec.',
    person: 'Ellipse 5.png',
    personname: 'Brooklyn Simmons',
    personcompany: 'Pendron.Inc, Ceo'
  },
  {
    icon: 'clienticon.png',
    clientdesc:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit semperconsequat in dolor mattis pellentesque suspendisse vulputate nec. Scelerisqueelementum,  consequat pharetra lectus eget vivamus ut.Magna aliquam tellus at volutpat crasaliquet facilisi quisadipiscing. Proin egestas et pellentesque augue pretium, amet. Natoque blandit augue integer maecenas mattis amet, nec.',
    person: 'Ellipse 5.png',
    personname: 'Brooklyn Simmons',
    personcompany: 'Pendron.Inc, Ceo'
  },
  {
    icon: 'clienticon.png',
    clientdesc:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit semperconsequat in dolor mattis pellentesque suspendisse vulputate nec. Scelerisqueelementum,  consequat pharetra lectus eget vivamus ut.Magna aliquam tellus at volutpat crasaliquet facilisi quisadipiscing. Proin egestas et pellentesque augue pretium, amet. Natoque blandit augue integer maecenas mattis amet, nec.',
    person: 'Ellipse 5.png',
    personname: 'Brooklyn Simmons',
    personcompany: 'Pendron.Inc, Ceo'
  },
  {
    icon: 'clienticon.png',
    clientdesc:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit semperconsequat in dolor mattis pellentesque suspendisse vulputate nec. Scelerisqueelementum,  consequat pharetra lectus eget vivamus ut.Magna aliquam tellus at volutpat crasaliquet facilisi quisadipiscing. Proin egestas et pellentesque augue pretium, amet. Natoque blandit augue integer maecenas mattis amet, nec.',
    person: 'Ellipse 5.png',
    personname: 'Brooklyn Simmons',
    personcompany: 'Pendron.Inc, Ceo'
  },
  {
    icon: 'clienticon.png',
    clientdesc:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit semperconsequat in dolor mattis pellentesque suspendisse vulputate nec. Scelerisqueelementum,  consequat pharetra lectus eget vivamus ut.Magna aliquam tellus at volutpat crasaliquet facilisi quisadipiscing. Proin egestas et pellentesque augue pretium, amet. Natoque blandit augue integer maecenas mattis amet, nec.',
    person: 'Ellipse 5.png',
    personname: 'Brooklyn Simmons',
    personcompany: 'Pendron.Inc, Ceo'
  }
]

const ClientsMobile: React.FC = () => {
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
      },
      {
        breakpoint: 200,
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
      <div className='flex flex-col mb-40'>
        <text className='text-5xl text-text font-bold leading-10 mx-32 mt-32'>
          What say happy clients
        </text>
        <div className='flex flex-row base:justify-center  lg:justify-center'>
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
        <Slider
          {...settings}
          ref={slider => setSlider(slider)}
          className='mx-40'
        >
          {clientsData.map((val, index) => (
            <div
              className='flex flex-col bg-clientback mt-12 rounded-5xl  '
              key={index}
            >
              <img src={val.icon} className='pl-16 pt-14' />
              <text className='text-soldesc text-xs flex items-start justify-between px-16 pt-8'>
                {val.clientdesc}
              </text>
              <div className='flex flex-row pt-10 pl-6 pb-14'>
                <img src={val.person} />
                <div className='flex flex-col items-start justify-center pl-8'>
                  <text className='text-text text-base leading-8 font-normal '>
                    {val.personname}
                  </text>
                  <text className='text-heroButton text-base leading-8 font-normal'>
                    {val.personcompany}
                  </text>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  )
}
export default ClientsMobile
