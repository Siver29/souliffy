import React, { useState , useContext } from 'react'
import { IpContext } from '../../Contexts/IpContext'
import emailjs from 'emailjs-com';

export default function ReservationForm({date , time , handleDateSelect , handleTimeSelect}) {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [code, setCode] = useState('')
  const [birthDate, setBirthDate] = useState('')
  const [error, setError] = useState('')
  const [ip, setIp] = useState('');
  const { country } = useContext(IpContext);

  const handleNameChange = (event) => {
    setName(event.target.value)
  }

  const handleBirthDateChange = (event) => {
    setBirthDate(event.target.value)
  }

  const handlePhoneChange = (event) => {
    setPhone(event.target.value)
  }

  const handleCodeChange = (event) => {
    setCode(event.target.value)
  }

  const validatePhone = (phone) => {
    const regex = /^\d{10}$/;
    return regex.test(phone);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    // if (date && time) {
      if (!validatePhone(phone)) {
        setError('يرجى إدخال رقم هاتف صحيح مكون من 10 أرقام')
        return
      }
      fetch('https://api.ipify.org?format=json')
        .then(response => response.json())
        .then(data => {
          setIp(data.ip);
          console.log(data.ip);
          const templateParams = {
            name: name,
            phone: phone,
            birthDate : birthDate,
            // date: date,
            // time: time,
            country : country,
            code : code,
            ip: data.ip, // use the fetched IP address here
          };
          emailjs.send(
            'service_5vgud6g',
            'template_4pkshdn',
            templateParams,
            'Xj7mw436AqKgkWDfb'
          ).then(
            (response) => {
              alert('تم تسجيل حجز موعد بنجاح')
              setName('')
              setPhone('')
              handleDateSelect('')
              handleTimeSelect('')
              setIp('')
              setCode('')
              setError('')
              // console.log('SUCCESS!', response.status, response.text);
            },
            (err) => {
              alert('لم يتم تسجيل حجز موعد , يرجى إعادة المحاولة')
              // console.log('FAILED...', err);
            }
          );
        })
        .catch(error => {
          alert('لم يتم تسجيل حجز موعد , يرجى إعادة المحاولة')
        });
    // } else {
    //   setError('يرجى إختيار تاريخ ووقت')
    // }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-group mb-4">
          <label for="exampleInputName" className='mb-2'>الإسم</label>
          <input type="text" className="form-control mb-2" id="exampleInputName" aria-describedby="nameHelp" placeholder=" أدخل اسمك " value={name} onChange={handleNameChange} required/>
          <p className='h6'>يمكنك إدخال اسم مستعار لضمان سرية هويتك</p>
        </div>
        <div className="form-group mb-4">
          <label for="exampleInputName" className='mb-2'>تاريخ الميلاد</label>
          <input type="date" className="form-control text-end" id="exampleInputBirthDate" value={birthDate} onChange={handleBirthDateChange} required/>
        </div>
        <div className="form-group mb-4">
          <label for="exampleInputphone" className='mb-2'>رقم الهاتف</label>
          <input type="text" className="form-control" id="exampleInputphone" placeholder="الرقم الخاص بالواتساب حيث سيتم التواصل معكم من خلاله" value={phone} onChange={handlePhoneChange} required/>
        </div>
        <div className="form-group mb-4">
          {/* <label for="exampleInputCode" className='mb-2 d-block'>كود الحسم (إن وجد)</label> */}
          {/* <input type="text" className="form-control w-75 d-inline-block" id="exampleInputCode" placeholder="أدخل كود الحسم" value={code} onChange={handleCodeChange} /><button className='btn primary-blue-background primary-btn w-25' style={{ marginTop: -4 }} >تحقق</button> */}
        </div>
        <button type="submit" className="primary-btn btn primary-blue-background ">إحجز الآن</button>
      </form>
      {error}
    </div>
  )
}