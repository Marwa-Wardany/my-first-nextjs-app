"use client";
import React from "react";


const Footer = () => {
  return (
    <footer className="text-white bg-gradient-to-r from-blue-950 to-blue-900 pt-5">
      <div className="container">
        <div className="row text-center text-md-start">
          <div className="col-lg-3 mb-4">
            <p>
              واكب أحدث ابتكاراتنا، وتعرّف على مستجدات خدماتنا، واقرأ مقالات مهمة تساعدك على
              الارتقاء بمشاريعك نحو النجاح.
            </p>
          </div>
          <div className="col-lg-3 mb-4">
            <h6 className="fw-bold mb-3">روابط مهمة</h6>
            <ul className="list-unstyled">
              <li>تدريبات وأفكار</li>
              <li>فريق العمل</li>
              <li>العملاء</li>
              <li>المدونات</li>
            </ul>
          </div>
          <div className="col-lg-3 mb-4">
            <h6 className="fw-bold mb-3">التواصل الاجتماعي</h6>
            <ul className="list-unstyled">
              <li>واتساب</li>
              <li>فيسبوك</li>
              <li>لينكد إن</li>
              <li>إنستجرام</li>
            </ul>
          </div>
          <div className="col-lg-3 mb-4">
            <h6 className="fw-bold mb-3">مركز المساعدة</h6>
            <ul className="list-unstyled">
              <li>أسئلة شائعة</li>
              <li>تواصل معنا</li>
              <li>الدليل الإرشادي</li>
            </ul>
          </div>
        <hr className="border-secondary" />  
        <div className="d-flex justify-content-center align-items-center">
          <p>2025 thenewcode@gmail.com</p>
        </div>
      </div>
      </div>
    </footer>
  );
};

export default Footer;

