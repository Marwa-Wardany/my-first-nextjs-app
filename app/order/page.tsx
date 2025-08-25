"use client";

import React, { use } from 'react'
import { useState } from 'react';
function page() {
    const [formInput, setFormInput] = useState({
        firstName: "",
        secondName: "",
        email: "",
        phone: "",
        massage: ""
    })

    const btnIsDisabled = formInput.firstName === "" || formInput.secondName === ""  || formInput.email === "" || formInput.phone === "" || formInput.massage === "" ;

  return (
    <div className='order my-5'>
        <div className='container rounded-2xl p-3 bg-gradient-to-r from-gray-400 to-gray-50'>
            <form>
                <h1 className='blue-text text-center'>تواصل معنا</h1>
                <div className='d-flex gap-3 w-100'>
                    <div className='w-50'>
                        <label className="form-label">الاسم الاول </label><br />
                        <input type='text' placeholder='الاسم الاول ' className="form-control mb-3" value={formInput.firstName} onChange={(e) => setFormInput({...formInput, firstName: e.target.value})}/>
                    </div>
                    <div className='w-50'>
                        <label className="form-label">الاسم الثاني</label><br />
                        <input type='text' placeholder='الاسم الثاني' className="form-control mb-3" value={formInput.secondName} onChange={(e) => setFormInput({...formInput, secondName: e.target.value})}/>
                    </div>
                    
                </div>
                <label className="form-label">البريد الإلكتروني</label><br />
                    <input type='text' placeholder='مثال thenewcode@gmail.com' className="form-control mb-3" value={formInput.email} onChange={(e) => setFormInput({...formInput, email: e.target.value})}/>
                    <label className="form-label">رقم الهاتف</label><br />
                    <input type='text' placeholder='مثال 0562313214' className="form-control mb-3" value={formInput.phone} onChange={(e) => setFormInput({...formInput, phone: e.target.value})}/>
                    <label className="form-label">نص الرسالة</label><br />
                    <textarea placeholder='اكتب كافة تفاصيل طلبك' className="form-control" value={formInput.massage} onChange={(e) => setFormInput({...formInput, massage: e.target.value})}/>
                <div className='d-flex justify-content-center align-items-center my-3'>
                    <button type='submit' disabled={btnIsDisabled} className={`main-btn rounded-pill ${btnIsDisabled ? "disabled" : ""}`} >ارسل طلبك</button>
                </div>
                
            </form>
        </div>
    </div>
  )
}

export default page;