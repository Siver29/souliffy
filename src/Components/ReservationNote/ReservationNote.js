import React from 'react'
import './ReservationNote.css'

function ReservationNote() {
  return (
    <div className='text-center reservation-notes'>
      <img src={'/assets/svg/CharecterGreenWithoutLegs.svg'} className='img-fluid'/>
      <p>ملاحظات:</p>
      <ul className='w-100 '>
        <li className='mb-2 text-end'>يرجى إختيار موعد حجز بعد ثلاثة أيام على الأقل من اليوم الحالي </li>
        <li className='mb-2 text-end'>يرجى إدخال رقم هاتف صحيح حيث سيتم التواصل معكم من خلاله</li>
        <li className='text-end'>يرجى أخذ العلم بأن الموعد الذي تم إختياره قد يتم التعديل عليه بناءاً<br/> على جدول مواعيد الطبيب وسيتم ذلك بعد التنسيق معكم</li>
        <li className='text-end'>ثمن جلسة الاستشارة للمقيمين داخل سوريا 75 الف ليرة سورية لا غير</li>
        <li className='text-end'>يتم تحديد ثمن الجلسة للمقيمين خارج سوريا بعد تثبيت الطلب و التواصل معنا</li>
      </ul>
    </div>
  )
}

export default ReservationNote
