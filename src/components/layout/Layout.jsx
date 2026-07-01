import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom"; // ایمپورت روتینگ

function Layout({ children }) {
  const location = useLocation(); // گرفتن مسیر فعلی صفحه
  const [isOpen, setIsOpen] = useState(false); // کنترل باز و بسته بودن منو در موبایل

  // تابع کمکی برای بستن سایدبار بعد از کلیک روی لینک‌ها در موبایل
  const handleClose = () => setIsOpen(false);

  return (
    <div dir="rtl" className="flex flex-col md:flex-row min-h-screen bg-gray-100 font-vazir relative overflow-x-hidden">
      
      {/* ۱. هدر موبایل (فقط در موبایل و تبلت < md نمایش داده می‌شود) */}
      <header className="flex md:hidden items-center justify-between bg-white px-4 py-3 shadow-sm z-30">
        {/* دکمه همبرگری */}
        <button 
          onClick={() => setIsOpen(true)} 
          className="text-gray-600 hover:text-orange-500 transition-all focus:outline-none p-1"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="21" y1="10" x2="3" y2="10"></line>
            <line x1="21" y1="6" x2="3" y2="6"></line>
            <line x1="21" y1="14" x2="3" y2="14"></line>
            <line x1="21" y1="18" x2="3" y2="18"></line>
          </svg>
        </button>

        {/* لوگوی کوچک هدر موبایل */}
        <div className="flex items-center gap-2">
          <span className="text-gray-800 font-bold text-sm">پنل مدیریت بیمه</span>
          <svg className="text-orange-500" xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 256 256">
            <g fill="currentColor">
              <path d="M224 152a24 24 0 0 1-24 24h-48a24 24 0 0 1 24 24a24 24 0 0 1-24 24a24 24 0 0 1-24-24v-24h24a24 24 0 0 1-24-24v-24h72a24 24 0 0 1 24 24M104 80h24V56a24 24 0 0 0-24-24a24 24 0 0 0-24 24a24 24 0 0 0 24 24H56a24 24 0 0 0-24 24a24 24 0 0 0 24 24h72v-24a24 24 0 0 0-24-24" opacity="0.2"></path>
              <path d="M221.13 128A32 32 0 0 0 184 76.31V56a32 32 0 0 0-56-21.13A32 32 0 0 0 76.31 72H56a32 32 0 0 0-21.13 56A32 32 0 0 0 72 179.69V200a32 32 0 0 0 56 21.13A32 32 0 0 0 179.69 184H200a32 32 0 0 0 21.13-56M200 88a16 16 0 0 1 0 32h-16v-16a16 16 0 0 1 16-16m-48-48a16 16 0 0 1 16 16v48a16 16 0 0 1-16 16h-16V56a16 16 0 0 1 16-16M88 56a16 16 0 0 1 32 0v16h-16a16 16 0 0 1-16-16m-48 48a16 16 0 0 1 16-16h48a16 16 0 0 1 16 16v16H56a16 16 0 0 1-16-16m16 64a16 16 0 0 1 0-32h16v16a16 16 0 0 1-16 16m48 48a16 16 0 0 1-16-16v-48a16 16 0 0 1 16-16h16v64a16 16 0 0 1-16 16m64-16a16 16 0 0 1-32 0v-16h16a16 16 0 0 1 16 16m32-32h-48a16 16 0 0 1-16-16v-16h64a16 16 0 0 1 0 32"></path>
            </g>
          </svg>
        </div>
      </header>

      {/* ۲. لایه تیره پشت سایدبار در موبایل (Backdrop) */}
      {isOpen && (
        <div 
          onClick={handleClose} 
          className="fixed inset-0 bg-black/40 z-40 md:hidden transition-opacity duration-300"
        />
      )}

      {/* ۳. سایدبار (در موبایل کشویی و در دسکتاپ ثابت در راست) */}
      <aside className={`
        fixed md:relative top-0 bottom-0 right-0 z-50
        w-64 bg-white shadow-xl md:shadow-md flex flex-col items-center py-8 h-full md:h-auto
        transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "translate-x-full md:translate-x-0"}
      `}>
        
        {/* دکمه بستن (ضربدر) - فقط در موبایل در بالای سایدبار نشان داده می‌شود */}
        <div className="flex md:hidden w-full justify-start px-6 mb-4">
          <button 
            onClick={handleClose}
            className="text-gray-500 hover:text-orange-500 transition-all p-1"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        {/* لوگو بزرگ دسکتاپ (در موبایل مخفی می‌شود) */}
        <div className="mb-10 hidden md:block">
          <svg className="text-orange-500" xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 256 256">
            <g fill="currentColor">
              <path d="M224 152a24 24 0 0 1-24 24h-48a24 24 0 0 1 24 24a24 24 0 0 1-24 24a24 24 0 0 1-24-24v-24h24a24 24 0 0 1-24-24v-24h72a24 24 0 0 1 24 24M104 80h24V56a24 24 0 0 0-24-24a24 24 0 0 0-24 24a24 24 0 0 0 24 24H56a24 24 0 0 0-24 24a24 24 0 0 0 24 24h72v-24a24 24 0 0 0-24-24" opacity="0.2"></path>
              <path d="M221.13 128A32 32 0 0 0 184 76.31V56a32 32 0 0 0-56-21.13A32 32 0 0 0 76.31 72H56a32 32 0 0 0-21.13 56A32 32 0 0 0 72 179.69V200a32 32 0 0 0 56 21.13A32 32 0 0 0 179.69 184H200a32 32 0 0 0 21.13-56M200 88a16 16 0 0 1 0 32h-16v-16a16 16 0 0 1 16-16m-48-48a16 16 0 0 1 16 16v48a16 16 0 0 1-16 16h-16V56a16 16 0 0 1 16-16M88 56a16 16 0 0 1 32 0v16h-16a16 16 0 0 1-16-16m-48 48a16 16 0 0 1 16-16h48a16 16 0 0 1 16 16v16H56a16 16 0 0 1-16-16m16 64a16 16 0 0 1 0-32h16v16a16 16 0 0 1-16 16m48 48a16 16 0 0 1-16-16v-48a16 16 0 0 1 16-16h16v64a16 16 0 0 1-16 16m64-16a16 16 0 0 1-32 0v-16h16a16 16 0 0 1 16 16m32-32h-48a16 16 0 0 1-16-16v-16h64a16 16 0 0 1 0 32"></path>
            </g>
          </svg>
        </div>
        
        {/* منو‌های ناوبری */}
        <nav className="w-full px-4 space-y-4">
          <SidebarItem 
            to="/dashboard" 
            title="داشبورد" 
            active={location.pathname === "/dashboard"} 
            onClick={handleClose} 
          />
          {/* می‌تونی آیتم‌های دیگر رو هم اینجا اضافه کنی */}
        </nav>
      </aside>

      {/* ۴. محتوای اصلی (پدینگ در موبایل کمتر می‌شود تا فضا حفظ شود) */}
      <main className="flex-1 p-4 md:p-8 overflow-x-hidden">
        {children}
      </main>
      
    </div>
  );
}

// کامپوننت کمکی منو با پشتیبانی از کلیک (جهت بستن در موبایل)
function SidebarItem({ title, to, active, onClick }) {
  return (
    <Link 
      to={to} 
      onClick={onClick}
      className={`flex justify-center items-center text-right py-3 px-4 rounded-xl cursor-pointer transition-all duration-200 text-sm font-semibold w-full ${
        active 
          ? "bg-orange-500 text-white shadow-md shadow-orange-200" // فعال
          : "text-gray-600 hover:bg-orange-50 hover:text-orange-500" // غیرفعال
      }`}
    >
      {title}
    </Link>
  );
}

export default Layout;
