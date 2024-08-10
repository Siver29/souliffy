import React from 'react'
import './PrimaryButton.css'
import { Link } from 'react-router-dom'

const PrimaryButton = () => {
  return (
    <div>
      <Link to={'/reservation'}>
      <button className="primary-btn btn primary-blue-background">
      احجز الآن
      </button>
      </Link>
    </div>
  )
}

export default PrimaryButton
