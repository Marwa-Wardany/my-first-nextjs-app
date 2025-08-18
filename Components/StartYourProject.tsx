import React from 'react'
import Image from "next/image";
export const StartYourProject = () => {
  return (
    <div className='start '>
        <div className='container d-flex justify-content-center align-items-center'>
            <div className='row'>
                <div className='col-lg-4'>
                    <Image src="/rocket.png" alt="hero" width={1500}
                                height={1500}
                                className="img-fluid rocket" />
                </div>
                <div className='col-lg-8 text-white'>
                    <h1 className='mb-4'>لتبدأ معنا قصة نجاحك </h1>
                    <button className='main-btn rounded-pill'>ابدأ مشروعك</button>
                </div>

            </div>
        </div>
    </div>
  )
}
export default StartYourProject;
