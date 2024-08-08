import React, { useState } from 'react'
import emailjs from 'emailjs-com';

export default function ReservationForm({date , time}) {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [error, setError] = useState('')

  const handleNameChange = (event) => {
    setName(event.target.value)
  }

  const handlePhoneChange = (event) => {
    setPhone(event.target.value)
  }

  const validatePhone = (phone) => {
    const regex = /^\d{10}$/;
    return regex.test(phone);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (date && time) {
      if (!validatePhone(phone)) {
        setError('يرجى إدخال رقم هاتف صحيح مكون من 10 أرقام')
        return
      }
      console.log('start')
      const templateParams = {
        name: name,
        phone: phone,
        date: date,
        time: time,
      };

      emailjs.send(
        'service_5vgud6g',
        'template_4pkshdn',
        templateParams,
        'Xj7mw436AqKgkWDfb'
      ).then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
        },
        (err) => {
          console.log('FAILED...', err);
        }
      );
    }else{
      setError('يرجى إختيار تاريخ ووقت')
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-group mb-4">
          <label for="exampleInputName" className='mb-2'>الإسم</label>
          <input type="text" className="form-control" id="exampleInputName" aria-describedby="nameHelp" placeholder="أدخل اسمك" value={name} onChange={handleNameChange} />
        </div>
        <div className="form-group mb-4">
          <label for="exampleInputphone" className='mb-2'>رقم الهاتف</label>
          <input type="text" className="form-control" id="exampleInputphone" placeholder="أدخل رقم الهاتف الذي تفضل أن يتم التواصل معك من خلاله" value={phone} onChange={handlePhoneChange} />
        </div>
        <button type="submit" className="primary-btn btn primary-blue-background ">إحجز الآن</button>
      </form>
      {error}
    </div>
  )
}