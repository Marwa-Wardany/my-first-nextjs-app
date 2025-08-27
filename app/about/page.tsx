import React from 'react'
import Image from "next/image";
import Link from 'next/link';
const page = () => {
  return (
    <div className='about'>
        <div className='container pt-5 d-flex justify-content-center align-items-center text-center'>
            <div className='content'>
                <h1 className='blue-text mb-4 fw-bold'>واقعك The New Code</h1>
                <h5>شركة تقنية مبتكرة متخصصة في تطوير الحلول البرمجية وتصميم التجارب الرقمية المتكاملة، تهدف إلى مساعدة الأفراد والمؤسسات على الانتقال بسلاسة إلى عصر الرقمنة. نقدم مجموعة متنوعة من الخدمات تشمل تصميم وتطوير المواقع والتطبيقات، برمجة الأنظمة المخصصة، تطوير المنصات التعليمية، وحلول التجارة الإلكترونية، مع التركيز على الجودة العالية وتجربة المستخدم المميزة.
نعمل بفلسفة "الكود الجديد" التي تعكس التزامنا بابتكار أساليب برمجية حديثة وذكية، تواكب التطورات التقنية وتلبي احتياجات السوق المحلي والعالمي. فريقنا يتكون من مبرمجين ومصممين محترفين يمتلكون خبرة واسعة في UI/UX، والتقنيات الحديثة مثل React، Node.js، وLaravel، إضافة إلى التزامنا بمعايير الأمان والمرونة في جميع المشاريع.
رؤيتنا أن نكون شريكك الرقمي الموثوق الذي يحول أفكارك إلى منتجات ناجحة تحقق لك التميز والتأثير في عالم التقنية.</h5>
                <div className="mt-5">
                  <h3 className="blue-text fw-bold">هل أنت مستعد لأعمال أفضل وأكثر إنتاجية؟</h3>
                  <p>
                    توقف عن القلق بشأن مشاكل التكنولوجيا. ركز على عملك. دعونا نقدم الدعم الذي تستحقه
                  </p>
                  <button className="main-btn rounded-pill mb-5">
                    <Link href='/order' className='link'>
                      اتصل الان
                    </Link>
                  </button>
                </div>
            </div>  
        </div>
        <Image src="/about.png" alt="hero" width={1600} height={300} className='object-contain mt-5' />
    </div>
  )
}

export default page;