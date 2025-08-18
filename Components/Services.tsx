import React from 'react'
import Image from "next/image";


export const Services = () => {
  
  const services = [
  {
    id: 1,
    title: "UI/UX DESIGN",
    img: "/ui-ux.png",
  },
  {
    id: 2,
    title: "تصميم وبرمجة مواقع إلكترونية",
    img: "/design.png",
  },
  {
    id: 3,
    title: "برمجة وتصميم تطبيقات",
    img: "/app-design.png",
  },
  {
    id: 4,
    title: "GRAPHIC DESIGN",
    img: "/graphic.png",
  },
  {
    id: 5,
    title: "برمجة الألعاب",
    img: "/games.png",
  },
  {
    id: 6,
    title: "تطوير سيستم شركات",
    img: "/system.png",
  },
];

  return (
    <div className='Services'>
      <div className='container pt-5 text-center'>
        <h2 className="mb-5 fw-bold">خدماتنا</h2>
        <div className='row'>
          {services.map((service, id) => (
            <div className='col-lg-4' key={id}>
              <div className='card h-100 border-0'>
                <Image
                src={service.img}
                alt={service.title}
                width={400}
                height={250}
                className="card-img-top rounded"
                />
                <div className='card-body'>
                  <p className="fw-semibold">{service.title}</p>
                </div>
              </div>

            </div>
          ))} 
        </div>
      </div>
    </div>

  )
}
export default Services;
