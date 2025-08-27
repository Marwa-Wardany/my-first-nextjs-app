import React from 'react'
import Image from "next/image";
import Link from "next/link";

export const StartYourProject = () => {
  return (
    <div className='start position-relative p-3 mt-24 mb-24'>
        <div className='container'>
            <div className='row d-flex '>
                <div className='col-lg-6 col-md-6'>
                    <img src="/rocket.png" alt="hero" 
                                className="rocket position-absolute" style={{top: "-150px", left: "700px"}}/>
                </div>
                <div className='col-lg-6 text-white pt-5 col-md-6'>
                    <h1 className='mb-4 font-normal '>لتبدأ معنا قصة نجاحك </h1>
                    <button className="main-btn rounded-pill mb-5">
                        <Link href='/order' className='link'>
                            اتصل الان
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}
export default StartYourProject;
