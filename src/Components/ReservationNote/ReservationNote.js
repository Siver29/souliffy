import React , {useContext} from 'react'
import { IpContext } from '../../Contexts/IpContext'
import './ReservationNote.css'

function ReservationNote() {
  const { ip, country } = useContext(IpContext);
  return (
    <div className='text-center reservation-notes'>
      <img src={'/assets/svg/CharecterGreenWithoutLegs.svg'} className='img-fluid'/>
      <p>ملاحظات:</p>
      <ul className='w-100 '>
        {/* <li className='mb-2 text-end'>يرجى إختيار موعد حجز بعد ثلاثة أيام على الأقل من اليوم الحالي </li> */}
        {/* <li className='text-end'>يرجى أخذ العلم بأن الموعد الذي تم إختياره قد يتم التعديل عليه بناءاً<br/> على جدول مواعيد الطبيب وسيتم ذلك بعد التنسيق معكم</li> */}
        {country == 'Syria' && <li className='text-end'>المواعيد حاليا للأشخاص المتضررين من الحرب في سوريا , يرجى عدم الإحراج إن لم يكن لديكم حالة نفسية مستعجلة</li>}
        {/* {country == 'Syria' && <li className='text-end'>ثمن جلسة الاستشارة للمقيمين داخل سوريا 100 الف ليرة سورية لا غير</li>} */}
        {/* {country != 'Syria' &&<li className='text-end'>ثمن جلسة الاستشارة للمقيمين خارج سوريا 750 الف ليرة سورية لا غير</li>} */}
        {/* {country != 'Syria' &&<li className='text-end'>يرجى التأكد من عدم تشغيل vpn للمقيمين داخل سوريا</li>} */}
      </ul>
    </div>
  )
}

export default ReservationNote
