import React from 'react'
import Card from '../../components/Card'

const tasks = [
  {
    subtitle: 'Number 10',
    time: '4h',
    title: 'Blog and social posts',
    note: 'Deadline is is toady',
  },
  {
    subtitle: 'Grace Aroma',
    time: '7d',
    title: 'new campaign review',
    note: 'new feedback',
  },
  {
    subtitle: 'Petz App',
    time: '2h',
    title: 'Cross-platform and browser QA',
    note: null,
  },
]

const Info = () => {
  return (
    <div className='text-start w-2/4'>
      <h3 className='text-3xl font-bold mb-5'>Your tasks today</h3>
      {tasks.map((task, index) => (
        <Card
          key={index}
          title={task.title}
          subtitle={task.subtitle}
          time={task.time}
          note={task.note}
        />
      ))}
    </div>
  )
}

export default Info
