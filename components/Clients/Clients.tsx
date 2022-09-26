import React from 'react'
import Slider from 'react-slick'
import { useState } from 'react'
import { useScreenSize } from '../Hook/useScreenSize'
import ClientsMobile from './ClientsMobile'
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

const Clients: React.FC = () => {
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
        breakpoint: 2500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      }
    ]
  }
  const [slider, setSlider] = React.useState<Slider | null>(null)
  const { screenControl } = useScreenSize(1024)
  return (
    <>
      {screenControl ? (
        <ClientsMobile />
      ) : (
        <div className='flex flex-col mb-40'>
          <text className='2xl:text-5xl lg:text-5xl sm:text-2xl base:text-2xl  text-text font-bold leading-10 2xl:mx-32 2xl:mt-32 lg:mx-32 lg:mt-32 sm:mx-4 sm:mt-32'>
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
                <text className='text-soldesc text-base flex items-start justify-between px-16 pt-8'>
                  {val.clientdesc}
                </text>
                <div className='flex flex-row pt-10 pl-16 pb-14'>
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
      )}
    </>
  )
}
export default Clients
