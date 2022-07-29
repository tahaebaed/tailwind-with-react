import React from 'react'
import {
  BsFillCalendarEventFill,
  BsDoorClosedFill,
  BsFileTextFill,
  BsFolderFill,
  BsBookmarkFill,
} from 'react-icons/bs'

const SideBar = () => {
  const list = [
    {
      component: <BsFillCalendarEventFill className='mr-3' />,
      name: 'Plan',
      active: true,
    },
    {
      component: <BsFileTextFill className='mr-3' />,
      name: 'Task List',
    },
    {
      component: <BsFolderFill className='mr-3' />,
      name: 'Projects',
    },
    {
      component: <BsBookmarkFill className='mr-3' />,
      name: 'tags',
    },
  ]
  return (
    <div className='bg-white h-screen w-80'>
      <header className='py-3 border-b-2 '>
        <h1 className='text-2xl text-orange-500 font-bold border-gray-300'>
          Task Manger <span className='text-black'>App</span>
        </h1>
      </header>
      <div className='flex  flex-col justify-between h-90 container mt-3 text-lg font-bold'>
        <ul className='flex gap-x-3 flex-col h-60 px-5 text-lg'>
          {list.map((elem, index) => (
            <li
              key={index}
              className={`${
                elem.active
                  ? 'bg-yellow-400 mb-1 cursor-pointer rounded-xl'
                  : 'hover:bg-yellow-400 cursor-pointer mb-1 rounded-xl'
              }`}
            >
              <button className='flex flex-row items-center p-4 ml-3 mb-2 '>
                {elem.component} {elem.name}
              </button>
            </li>
          ))}
        </ul>
        <button className='flex mb-5 mx-auto w-72 flex-row items-center text-xl ml-4 hover:bg-yellow-400 cursor-pointer p-4 rounded-xl'>
          <div className='mr-3  bg-black p-2 rounded-lg'>
            <BsDoorClosedFill className='fill-white' />
          </div>
          <p>Logout</p>
        </button>
      </div>
    </div>
  )
}

export default SideBar
