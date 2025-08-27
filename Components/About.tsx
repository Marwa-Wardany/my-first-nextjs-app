import React from 'react'
import Image from "next/image";

export const About = () => {
  return (
    <div className='pt-5'>
        <div className='container'>
        <div className='main-title text-center position-relative w-100 d-flex justify-content-center align-items-center mb-3'>
            <h1 className='text-line fw-bold w-25'>من <span className='blue-text'>نحن ؟</span></h1>
        </div> 
        <div className='row d-flex justify-content-center align-items-center'>
            <div className='col-lg-6 col-md-6'>
                <h1>خطوتك الأولى <span className='blue-text'>نحو القمة</span></h1>
                <p className='text-black-50'>كوننا روّاد التقنية، نعمل لنجعل كل عميل رائدًا في مجاله، ونرتقي بمشاريعه نحو آفاق النجاح، لنكون خياره الأول في تقنية المعلومات ونحافظ على ريادتنا في عالم البرمجة.</p>
            </div>
            <div className='col-lg-6 col-md-6'>
                <Image src="/Image.png" alt="hero" width={400}
                    height={400}
                    className='object-contain' />
            </div>
        </div>
        <div className='row d-flex justify-content-center align-items-center'>
            <div className='col-lg-6 col-md-6'>
                <Image src="/whoIs.png" alt="hero" width={400}
                    height={400}
                    className='object-contain' />
            </div>
            <div className='col-lg-6 col-md-6'>

                <h1>اهدافك <span className='blue-text'>هي اهدافنا</span></h1>
                <p className='text-black-50'>في واقعك، نجمع نخبة من الخبراء في مجالات متعددة لنحوّل الأفكار إلى إنجازات ملموسة. نعمل بشغف وإتقان لتمكين قدرات عملائنا، ودعم مشاريعهم لتتصدر المنافسة وتصبح معيارًا للتميز. رؤيتنا واضحة: نحول أحلامك إلى واقع يلامس القمة.</p>
            </div>
        </div>

        </div>
    </div>
  )
}
export default About;
