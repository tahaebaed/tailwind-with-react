import React from 'react'
import { BsChatFill } from 'react-icons/bs'

const Header = () => {
  return (
    <div className='flex flex-col items-start pb-8 border-b-2 border-gray-300'>
      <h3 className='text-4xl font-bold text-left mb-8'>
        Messaging ID framework development for the marketing branch
      </h3>
      <div className='flex flex-row justify-between items-center w-full pr-5'>
        <div className='flex flex-row gap-5 items-center'>
          <p className='text-gray-500 text-md text-left border-r-2 border-gray-300 pr-5'>
            Members <br /> connected
          </p>
          <div className='flex items-center'>
            <div className='py-1 px-2 bg-lime-400 rounded-full '>
              <p className='text-2xl'>JD</p>
            </div>
            <div className='py-1 px-2 bg-lime-400 rounded-full relative right-3'>
              <p className='text-2xl'>JD</p>
            </div>
          </div>
        </div>
        <div className='flex items-center text-lg'>
          <button>
            <BsChatFill className='mr-4 border-2  w-9 h-9 p-2 rounded-lg hover:bg-black hover:fill-white' />
          </button>
          <button className='bg-black text-white font-semibold text-md px-4 py-1 rounded-lg'>
            Open
          </button>
        </div>
      </div>
    </div>
  )
}

export default Header
