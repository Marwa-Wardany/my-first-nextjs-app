import React from 'react'

export const Hero = () => {
  return (
    <div className='hero d-flex justify-content-center align-items-center text-center'>
      <div className='container'>
        <div className='hero-content text-white'>
          <h1 className='fw-bold'>واقعك لتصميم وبرمجة
            المواقع والتطبيقات
          </h1>
          <p className='mb-3'>نحن مؤسسة تصميم وبرمجة مواقع وتطبيقات رقمية قائمة على نجاح تجربة المستخدم، نعمل على خلق حلول تصميمية وبرمجية مبتكرة </p>
          <button className='main-btn rounded-pill '>اتصل بنا</button>
        </div>
      </div>
    </div>
  )
}

export default Hero;