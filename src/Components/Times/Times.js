import React from 'react'
import './Times.css'

function Times({ time, onSelect }) {
  return (
    <div className="col-6 col-md-4 col-lg-3 mb-2">
      <button className='btn timeCard' onClick={() => onSelect(time)}>{time}</button>
    </div>
  )
}

export default Times
