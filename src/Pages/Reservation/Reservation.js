import React from 'react'
import CalenderWrapper from '../../Components/Calendar/CalenderWrapper'
import Times from '../../Components/Times/Times'
import ReservationForm from '../../Components/ReservationForm/ReservationForm'
import ReservationNote from '../../Components/ReservationNote/ReservationNote'
import './Reservation.css'

function Reservation() {
  const times = ['10:00AM', '11:00AM', '12:00PM', '1:00PM', '2:00PM', '3:00PM', '4:00PM'
    , '5:00PM', '6:00PM', '7:00PM', '8:00PM', '9:00PM', '10:00PM', '11:00PM']
    
  return (
    <section className='reservation-page'>
      <div className='container reservation-bg'>
        <div className='row'>
          <div className='col-12 col-md-6'>
            <div className=' w-100 mt-5'>
              <CalenderWrapper />
            </div>
            <div className=' w-100 mb-5'>
              <p>إختر الوقت</p>
              <div className='row'>
                {times.map((time, index) => (
                  <Times key={index} time={time} />
                ))}
              </div>
            </div>
          </div>
          <div className='col-12 col-md-6 p-5'>
            <div className=''>
              <ReservationNote/>
              <ReservationForm/>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Reservation
