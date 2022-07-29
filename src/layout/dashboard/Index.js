import React from 'react'
import Header from './Header'
import Info from './Info'
import Status from './Status'

const Index = () => {
  return (
    <div className='bg-white p-4 rounded-lg mt-10'>
      <Header />
      <div className='mt-10 flex '>
        <Status />
        <Info />
      </div>
    </div>
  )
}

export default Index
