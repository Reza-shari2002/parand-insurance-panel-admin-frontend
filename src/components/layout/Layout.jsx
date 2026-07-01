import React, { useState } from "react";
import { Headset, Zap, ShieldCheck, Menu, X } from "lucide-react";

function Layout({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div
      className="min-h-screen flex font-vazir flex-col  bg-[#fafafa]"
      dir="rtl"
    >
      {/* تغییر کلاس به sticky top-0 برای ثابت ماندن هدر هنگام اسکرول */}
      <header className="w-full h-20 bg-white/95 backdrop-blur-sm shadow-sm py-3 px-6 md:px-16 flex justify-between items-center rounded-b-[24px] sticky top-0 z-[10000]">
        <div className="flex items-center gap-2">
          <span className="text-xl md:text-2xl font-black text-[#333333]">
            پرند <span className="text-orange-500">بیمه</span>
          </span>
          <div className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center">
            <svg
              viewBox="0 0 100 100"
              className="w-7 h-7 md:w-8 md:h-8 fill-orange-500"
            >
              <path d="M10 50 C20 40, 40 30, 60 45 C75 55, 90 40, 95 30 C90 50, 75 70, 50 70 C30 70, 15 60, 10 50 Z" />
              <path
                d="M40 48 C55 35, 75 25, 90 20 C80 35, 65 50, 45 53 Z"
                opacity="0.8"
              />
            </svg>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-gray-600 font-medium">
          <a
            href="#"
            className="text-orange-500 border-b-2 border-orange-500 pb-1 font-bold"
          >
            صفحه اصلی
          </a>
          <a href="#" className="hover:text-orange-500 transition-colors">
            تماس با ما
          </a>
        </nav>

        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-all"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="absolute top-full right-0 left-0 bg-white shadow-lg border-t border-gray-50 flex flex-col p-4 gap-4 md:hidden animate-in slide-in-from-top duration-300">
            <a
              href="#"
              className="text-orange-500 font-bold py-2 border-b border-gray-50"
            >
              صفحه اصلی
            </a>
            <a
              href="#"
              className="text-gray-600 font-medium py-2 hover:text-orange-500"
            >
              تماس با ما
            </a>
          </div>
        )}
      </header>

      <main className="flex-grow relative w-full h-full">{children}</main>

      <footer className="hidden md:block w-full bg-white border-t border-gray-100 py-4 md:py-8 px-4 md:px-12">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 md:gap-8 text-center md:text-right">
          <div className="grid grid-cols-1 md:flex md:flex-row w-full justify-between items-center gap-4 md:gap-12">
            <div className="flex items-center gap-3 justify-center md:justify-start">
              <div className="text-orange-500 bg-orange-50 p-2 md:p-3 rounded-full shrink-0">
                <Headset size={20} className="md:w-6 md:h-6" />
              </div>
              <div className="flex flex-col items-start md:items-start">
                <h4 className="font-bold text-gray-800 text-xs md:text-base leading-none">
                  پشتیبانی سریع
                </h4>
                <p className="text-[10px] md:text-sm text-gray-400 mt-1 hidden xs:block">
                  همه روزه
                </p>
              </div>
            </div>

            <div className="hidden md:block w-px h-8 bg-gray-100"></div>

            <div className="flex items-center gap-3 justify-center md:justify-start border-t border-gray-50 pt-3 md:pt-0 md:border-none w-full md:w-auto">
              <div className="text-orange-500 bg-orange-50 p-2 md:p-3 rounded-full shrink-0">
                <Zap size={20} className="md:w-6 md:h-6" />
              </div>
              <div className="flex flex-col items-start md:items-start">
                <h4 className="font-bold text-gray-800 text-xs md:text-base leading-none">
                  تجربه کاربری آسان
                </h4>
                <p className="text-[10px] md:text-sm text-gray-400 mt-1 hidden xs:block">
                  سریع و ساده
                </p>
              </div>
            </div>

            <div className="hidden md:block w-px h-8 bg-gray-100"></div>

            <div className="flex items-center gap-3 justify-center md:justify-start border-t border-gray-50 pt-3 md:pt-0 md:border-none w-full md:w-auto">
              <div className="text-orange-500 bg-orange-50 p-2 md:p-3 rounded-full shrink-0">
                <ShieldCheck size={20} className="md:w-6 md:h-6" />
              </div>
              <div className="flex flex-col items-start md:items-start">
                <h4 className="font-bold text-gray-800 text-xs md:text-base leading-none">
                  پوشش کامل
                </h4>
                <p className="text-[10px] md:text-sm text-gray-400 mt-1 hidden xs:block">
                  بهترین بیمه‌ها
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Layout;
