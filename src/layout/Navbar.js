import React from 'react'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'
const Navbar = () => {
  return (
    <nav className='flex flex-row justify-between my-5'>
      <button className='flex items-center'>
        <div className='bg-white mr-2 p-1 rounded-full'>
          <BsChevronLeft className='fill-gray-200' />
        </div>
        Archive
      </button>
      <h5 className='text-lg font-bold'>Today's Plan</h5>
      <button className='flex items-center'>
        This Week
        <div className='bg-white ml-2 p-1 rounded-full'>
          <BsChevronRight className='fill-gray-200' />
        </div>
      </button>
    </nav>
  )
}

export default Navbar
