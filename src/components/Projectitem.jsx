import React from 'react'

const Projectitem = (img,title) => {
  return (
    <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group'>
    <img src={img}/>
    <div>
    <h3></h3>
    </div>
    </div>
  )
}

export default Projectitem