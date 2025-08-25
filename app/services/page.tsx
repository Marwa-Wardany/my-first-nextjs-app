"use client";
import React from "react";
import { Services } from "@/Components";

export default function Page() {
  return (
    <div>
      <Services />
      <div className="mt-5 text-center">
        <h3 className="blue-text fw-bold">هل أنت مستعد لأعمال أفضل وأكثر إنتاجية؟</h3>
        <p>
          توقف عن القلق بشأن مشاكل التكنولوجيا. ركز على عملك. دعونا نقدم الدعم الذي تستحقه
        </p>
        <button className="main-btn rounded-pill mb-5">
          اتصل الان
        </button>
      </div>
    </div>
  );
}

