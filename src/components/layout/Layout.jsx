import React from "react";
import { Link, useLocation } from "react-router-dom"; // ایمپورت روتینگ

function Layout({ children }) {
  const location = useLocation(); // گرفتن مسیر فعلی صفحه

  return (
    <div dir="rtl" className="flex min-h-screen bg-gray-100 font-vazir">
      
      {/* Sidebar - سمت راست */}
      <aside className="w-64 bg-white shadow-md flex flex-col items-center py-8">
        <div className="mb-10">
          <svg className="text-orange-500" xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 256 256">
            <g fill="currentColor">
              <path d="M224 152a24 24 0 0 1-24 24h-48a24 24 0 0 1 24 24a24 24 0 0 1-24 24a24 24 0 0 1-24-24v-24h24a24 24 0 0 1-24-24v-24h72a24 24 0 0 1 24 24M104 80h24V56a24 24 0 0 0-24-24a24 24 0 0 0-24 24a24 24 0 0 0 24 24H56a24 24 0 0 0-24 24a24 24 0 0 0 24 24h72v-24a24 24 0 0 0-24-24" opacity="0.2"></path>
              <path d="M221.13 128A32 32 0 0 0 184 76.31V56a32 32 0 0 0-56-21.13A32 32 0 0 0 76.31 72H56a32 32 0 0 0-21.13 56A32 32 0 0 0 72 179.69V200a32 32 0 0 0 56 21.13A32 32 0 0 0 179.69 184H200a32 32 0 0 0 21.13-56M200 88a16 16 0 0 1 0 32h-16v-16a16 16 0 0 1 16-16m-48-48a16 16 0 0 1 16 16v48a16 16 0 0 1-16 16h-16V56a16 16 0 0 1 16-16M88 56a16 16 0 0 1 32 0v16h-16a16 16 0 0 1-16-16m-48 48a16 16 0 0 1 16-16h48a16 16 0 0 1 16 16v16H56a16 16 0 0 1-16-16m16 64a16 16 0 0 1 0-32h16v16a16 16 0 0 1-16 16m48 48a16 16 0 0 1-16-16v-48a16 16 0 0 1 16-16h16v64a16 16 0 0 1-16 16m64-16a16 16 0 0 1-32 0v-16h16a16 16 0 0 1 16 16m32-32h-48a16 16 0 0 1-16-16v-16h64a16 16 0 0 1 0 32"></path>
            </g>
          </svg>
        </div>
        
        <nav className="w-full px-4 space-y-4">
          {/* مسیر فرضی داشبورد (مثلاً /dashboard یا /) */}
          <SidebarItem to="/" title="داشبورد" active={location.pathname === "/dashboard"} />
          
        </nav>
      </aside>

      {/* Main Content - سمت چپ */}
      <main className="flex-1 p-8">
        {children}
      </main>
      
    </div>
  );
}

// کامپوننت کمکی
function SidebarItem({ title, to, active }) {
  return (
    <Link 
      to={to} 
      className={`flex justify-center items-center text-right py-3 px-4 rounded-lg cursor-pointer transition ${
        active 
          ? "bg-orange-500 text-white shadow-md shadow-orange-200" // استایل حالت فعال (بک‌گراند نارنجی)
          : "text-gray-600 hover:bg-orange-50 hover:text-orange-500" // استایل حالت معمولی و هاور
      }`}
    >
      {title}
    </Link>
  );
}

export default Layout;
