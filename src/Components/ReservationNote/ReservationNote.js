import React from 'react'
import './ReservationNote.css'

function ReservationNote() {
  return (
    <div className='text-center reservation-notes'>
      <img src={'/assets/svg/CharecterGreenWithoutLegs.svg'} className='img-fluid'/>
      <p>ملاحظات:</p>
      <ul className='w-100'>
        <li className='mb-2'>يرجى إختيار موعد حجز بعد ثلاثة أيام على الأقل من اليوم الحالي </li>
        <li className='mb-2'>يرجى إدخال رقم هاتف صحيح حيث سيتم التواصل معكم من خلاله</li>
        <li >يرجى أخذ العلم بأن الموعد الذي تم إختياره قد يتم التعديل عليه بناءاً على جدول مواعيد الطبيب وسيتم ذلك بعد التنسيق معكم</li>
      </ul>
    </div>
  )
}

export default ReservationNote
