import React from "react";
import { useSecureImage } from "../../../hooks/SecureImage/useSecureImage";

function SecureDocumentCard({ title, imageUrl }) {
  // استفاده از هوک سفارشی برای دریافت داده‌ها و وضعیت درخواست
  const { imageSrc, loading, error } = useSecureImage(imageUrl);

  return (
    <div className="flex flex-col border border-gray-200 rounded-xl overflow-hidden shadow-sm bg-white max-w-sm w-full mx-auto" dir="rtl">
      {/* هدر کارت */}
      <div className="p-3 bg-gray-50 border-b border-gray-100 flex justify-between items-center">
        <span className="text-sm font-bold text-gray-700">{title}</span>
      </div>

      {/* بخش نمایش عکس */}
      <div className="relative aspect-video w-full flex items-center justify-center bg-gray-100 min-h-[180px]">
        {loading && (
          <div className="text-xs text-gray-500 animate-pulse font-medium">در حال دریافت تصویر...</div>
        )}

        {error && (
          <div className="text-xs text-red-500 font-medium">عدم موفقیت در بارگذاری تصویر</div>
        )}

        {!loading && !error && imageSrc && (
          <img
            src={imageSrc}
            alt={title}
            className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
          />
        )}

        {!imageUrl && (
          <div className="text-xs text-gray-400 font-medium">تصویری آپلود نشده است</div>
        )}
      </div>

      {/* دکمه‌های پایین کارت */}
      <div className="p-3 bg-gray-50 border-t border-gray-100 flex gap-2">
        {imageSrc ? (
          <>
            {/* دکمه دانلود مستقیم */}
            <a
              href={imageSrc}
              download={`${title || "document"}.png`}
              className="flex-1 text-center bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold py-2 px-4 rounded transition-colors"
            >
              دانلود تصویر
            </a>

            {/* دکمه باز کردن در تب جدید */}
            <a
              href={imageSrc}
              target="_blank"
              rel="noreferrer"
              className="text-center border border-gray-300 hover:bg-gray-100 text-gray-700 text-xs font-semibold py-2 px-3 rounded transition-colors"
            >
              نمایش بزرگ
            </a>
          </>
        ) : (
          <button
            disabled
            className="flex-1 text-center bg-gray-300 text-gray-500 text-xs font-semibold py-2 px-4 rounded cursor-not-allowed"
          >
            غیر قابل دانلود
          </button>
        )}
      </div>
    </div>
  );
}

export default SecureDocumentCard;
