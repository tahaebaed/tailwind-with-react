import React from 'react'
import { BsFillExclamationCircleFill } from 'react-icons/bs'

const Card = ({ title, subtitle, time, note }) => {
  return (
    <div className='w-full mb-3'>
      <div className='border-2 mb-3 rounded-xl p-2 border-gray-200 w-full'>
        <div className='flex w-full mb-1 justify-between text-gray-400'>
          <p>{subtitle}</p>
          <p>{time}</p>
        </div>
        <h5 className='text-lg font-bold mb-4'>{title}</h5>
        <p className='text-bold text-md text-gray-500 flex items-center'>
          {note && (
            <>
              <BsFillExclamationCircleFill className='fill-black mr-1' />
              {note}
            </>
          )}
        </p>
      </div>
    </div>
  )
}

export default Card
