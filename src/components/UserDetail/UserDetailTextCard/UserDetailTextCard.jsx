import React from "react";

function UserDetailTextCard({ title, value, type = "text" }) {
  const isLongText = type === "address";

  return (
    <div
      className="flex flex-col border border-gray-200 rounded-xl overflow-hidden shadow-sm bg-white w-full"
      dir="rtl"
    >
      {/* هدر کارت */}
      <div className="p-3 bg-gray-50 border-b border-gray-100 flex justify-between items-center">
        <span className="text-sm font-bold text-gray-700">{title}</span>
      </div>

      {/* بخش متن */}
      <div className="p-4 min-h-[90px] flex items-center bg-white">
        {value ? (
          <p
            className={`text-sm text-gray-700 font-medium leading-7 ${
              isLongText ? "break-words whitespace-pre-line" : ""
            }`}
          >
            {value}
          </p>
        ) : (
          <span className="text-xs text-gray-400">مقداری ثبت نشده است</span>
        )}
      </div>
    </div>
  );
}

export default UserDetailTextCard;
