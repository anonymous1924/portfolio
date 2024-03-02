import React from 'react'
import {TypeAnimation} from 'react-type-animation'
import {FaTwitter,FaFacebook,FaLinkedin,FaInstagram} from 'react-icons/fa'
const Main = () => {
  return (
    <div id='main'>
    <img className='w-full h-screen object-cover bg-white/50 object-left scale-x-[-1]' src='./src/images/green.jpg' />
    <div className='w-full h-screen absolute top-0 left-0 max-w-[700px] m-auto h-full w-full flex fc justify-center lg:items-start items-center'>
    <div>
    <h1 className='text-[#ffffff] sm:text-5xl text-4xl '>I'm Simbo Fekadu</h1>
    <h2 className='text-[#ffffff] flex sm:text-3xl text-2xl pt-4 lg:justify-start justify-center'>I'm a
    <TypeAnimation
      sequence={[
        'Developer',
        1000, 
        'Coder',
        2000,
        'Designer',
        2000]}
      wrapper="div"
      speed={50}
      repeat={Infinity}
      style={{ fontSize: '1em', paddingLeft:'5px', textColor:'white' }}/>
    </h2>
    <div className='flex justify-between pl-2 pt-6 ml-20 max-w-[200px] w-full'>
    <FaTwitter className='fill-white size-6' />
    <FaFacebook className='fill-white size-6'/>
    <FaInstagram className='fill-white size-6'/>
    <FaLinkedin className='fill-white size-6'/>
    
    </div>
    </div>
    </div>
    </div>
  )
}  

export default Main