"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const pathname = usePathname(); 

  return (
    <div className="rounded-b-4xl px-5 shadow-xl">
      <nav className="navbar navbar-expand-lg navbar-light ">
        <Link href="/" className="navbar-brand">
          <img src="\logo.png" width="100" height="100" alt="Logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link href="/" className={`nav-link ${pathname === "/" ? "active" : ""}`}>
                الرئيسية
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/about" className={`nav-link ${pathname === "/about" ? "active" : ""}`}>
                عن الشركة
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/services" className={`nav-link ${pathname === "/services" ? "active" : ""}`}>
                الخدمات
              </Link>
            </li>
            {/* <li className="nav-item">
              <Link href="/" className={`nav-link ${pathname === "/team" ? "active" : ""}`}>
                أعمالنا
              </Link>
            </li> */}
            {/* <li className="nav-item">
              <Link href="/" className={`nav-link ${pathname === "/team" ? "active" : ""}`}>
                المدونة
              </Link>
            </li> */}
            <li className="nav-item">
              <Link href="/order" className={`nav-link ${pathname === "/order" ? "active" : ""}`}>
                اطلب الأن
              </Link>
            </li>
            {/* <li className="nav-item">
              <Link href="/" className={`nav-link ${pathname === "/team" ? "active" : ""}`}>
                خدمة العملاء
              </Link>
            </li> */}
          </ul>
      </nav>
    </div>
  );
};

export default NavBar;


