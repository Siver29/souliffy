import React from 'react'
import './Times.css'

function Times({time}) {
  return (
    <div className="col-6 col-md-4 col-lg-3 mb-2">
      <button className='btn timeCard'>{time}</button>
    </div>
  )
}

export default Times
