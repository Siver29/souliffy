import React from 'react'

export default function ReservationForm() {
  return (
    <div>
        <form>
        <div className="form-group mb-4">
            <label for="exampleInputEmail1">الإسم</label>
            <input type="text" className="form-control" id="exampleInputName" aria-describedby="nameHelp" placeholder="أدخل اسمك"/>
        </div>
        <div className="form-group mb-4">
            <label for="exampleInputPassword1">رقم الهاتف</label>
            <input type="text" className="form-control" id="exampleInputphone" placeholder="أدخل رقم الهاتف الذي تفضل أن يتم التواصل معك من خلاله"/>
        </div>
        <button type="submit" className="btn ">Submit</button>
        </form>
    </div>
  )
}
