"use client";

import FormModal from '@/Components/FormModal';
import React from 'react'
import { useState } from 'react';

interface FormInput {
  firstName: string;
  secondName: string;
  email: string;
  phone: string;
  message: string;
}

function page() {
    const [formInput, setFormInput] = useState<FormInput>({
        firstName: "",
        secondName: "",
        email: "",
        phone: "",
        message: "",
    })
    const[submitted, setSubmitted]= useState(false)
    const [errorMessage, setErrorMessage] = useState(null)

    const btnIsDisabled = formInput.firstName === "" || formInput.secondName === ""  || formInput.email === "" || formInput.phone === "" || formInput.message === "" ;

    function handleSubmit(event){
        event.preventDefault();
        setErrorMessage(null);
        const {phone} = formInput
        if (phone.length < 10 || phone.length > 12){
            setErrorMessage("Phone number is incorrect");
        }
        setSubmitted(true)
  };

  function handleDivClick (){
    if(submitted){
        setSubmitted(false)
    }
    
  }
  return (
    <div className='order my-4' onClick={handleDivClick}>
        <FormModal errorMessage={errorMessage}  isVisible={submitted}/>
        <div className='container rounded-2xl p-3 bg-gradient-to-r from-gray-400 to-gray-50'>
            <form onSubmit={handleSubmit}>
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
                    <textarea placeholder='اكتب كافة تفاصيل طلبك' className="form-control" value={formInput.message} onChange={(e) => setFormInput({...formInput, message: e.target.value})}/>
                <div className='d-flex justify-content-center align-items-center my-3'>
                    <button type='submit' disabled={btnIsDisabled} className={`main-btn rounded-pill ${btnIsDisabled ? "disabled" : ""}`} >ارسل طلبك</button>
                </div>
                
            </form>
            
        </div>
        
        <div className='container d-flex justify-content-center mt-5 rounded-2xl  border-4 border-neutral-400'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d175675.18711882306!2d30.376145579089247!3d31.030101657516344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f60d81ab2c6a57%3A0xa93943f019ef168!2sDamanhour%2C%20Beheira%20Governorate!5e0!3m2!1sen!2seg!4v1756131901312!5m2!1sen!2seg" height="450" className='w-100'  loading="lazy" ></iframe>
        </div>
       
    </div>
  )
}

export default page;