import React from 'react'

const Status = () => {
  return (
    <div className='w-2/4 text-start'>
      <h3 className='text-3xl font-bold mb-5'>Stats</h3>
      <div className='w-full pr-5 flex flex-col'>
        <div className='w-full font-bold p-4 bg-teal-200 rounded-xl'>
          <p className='text-xl mb-5'>
            Good day,
            <br /> Kristin
          </p>
          <button className='bg-white rounded-lg text-sm py-1 px-2'>
            Start Tracking
          </button>
        </div>
        <div className='flex flex-row justify-between '>
          <div className='w-3/6 bg-yellow-200 p-4 my-5 mr-5 rounded-xl'>
            <h4 className='text-3xl mb-2 font-bold'>20</h4>
            <p className='text-neutral-600 font-semibold'>Tasks finished</p>
          </div>
          <div className='w-3/6 bg-yellow-200 p-4 my-5 rounded-xl'>
            <h4 className='text-3xl mb-2 font-bold'>5,5</h4>
            <p className='text-neutral-600 font-semibold'>Tracked hours</p>
          </div>
        </div>
        <div className='w-full font-bold p-4 bg-teal-200 rounded-xl'>
          <p className='text-xl mb-4'>Your daily plan</p>
          <p className='text-neutral-600 font-semibold'>5 of 8 completed</p>
        </div>
      </div>
    </div>
  )
}

export default Status
