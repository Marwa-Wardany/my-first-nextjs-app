import React from 'react';
import { FaLinkedin, FaFacebook, FaTwitter, FaPhone, FaEnvelope } from "react-icons/fa";

export const TopHeader = () => {
  return (
    <div className='header text-white pt-2 px-5'>
      <div className=" d-flex justify-content-between ">
        <div className=" d-flex gap-4">
          <div className='d-flex gap-1'>
            <p>thenewcode@gmail.com</p>
            <a  target="_blank">
              <FaEnvelope size={18}  />
            </a>
          </div>
          <div  className='d-flex gap-1'>
            <p>010000000000</p>
            <a  target="_blank">
              <FaPhone size={18}  />
            </a>
          </div>                              
        </div>
        <div className="d-flex gap-1">
          <p>تابعنا على الصفحات :</p>
          <a  target="_blank">
            <FaLinkedin size={18}  />
          </a>
          <a  target="_blank">
            <FaFacebook size={18}  />
          </a>
          <a  target="_blank">
            <FaTwitter size={18}  />
          </a>                           
        </div>
      </div>
    </div>
  )
}
