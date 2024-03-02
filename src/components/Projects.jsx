import React from 'react'
import Projectitem from './Projectitem';
import darkImg from '../images/dark.jpg';
import dark2Img from '../images/dark2.jpg';
import skyImg from '../images/sky.jpg';
import plantImg from '../images/plant.jpg';
const Projects = () => {
  return (
    <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
      <h1 className='text-4xl font-bold text-center text-[#oo1b5e]'>Projects</h1>
      <p className='text-center py-8'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat.
      </p>
      <div className='grid sm:grid-cols-2 gap-12'>
      <Projectitem img={darkImg} title='Test app 1' />
      <Projectitem img={dark2Img} title='CRUD app' />
      <Projectitem img={plantImg} title='CRUD app 2' />
      <Projectitem img={skyImg} title='Test app 2' />
      </div>
    </div>
  )
}

export default Projects