import React from "react";
import { ArrowLeft } from "lucide-react";

const Insurancecard = ({
  type,
  title,
  desc,
  icon: Icon,
  isEmpty,
  set_insurance_type,
  insurance_type,
}) => {
  const handleSelect = () => {
    if (!isEmpty) {
      set_insurance_type(type);
    }
  };

  return (
    <button
      onClick={handleSelect}
      disabled={isEmpty}
      className="focus:outline-none w-full md:w-auto" // جلوگیری از خطای فوکوس دکمه
    >
      <div
        className={`relative flex flex-col items-center justify-between p-6 rounded-[32px] border-2 transition-all duration-300 bg-white
        w-full min-h-[280px] md:w-64
        ${
          isEmpty
            ? "border-dashed border-gray-200 opacity-60 cursor-not-allowed"
            : type === insurance_type
              ? "border-orange-500 shadow-lg shadow-orange-100 ring-2 ring-orange-500/20"
              : "border-orange-50 border-transparent hover:border-orange-200 cursor-pointer"
        }`}
      >
        {/* بخش آیکون */}
        <div
          className={`w-20 h-20 mt-4 flex items-center justify-center rounded-full ${isEmpty ? "border-2 border-dashed border-gray-100" : "bg-white"}`}
        >
          {!isEmpty && Icon && (
            <Icon size={48} className="text-orange-500 stroke-[1.2]" />
          )}
        </div>

        {/* بخش متن */}
        <div className="text-center flex flex-col items-center gap-2 mb-4">
          {isEmpty ? (
            <>
              <div className="w-20 h-3 bg-gray-100 rounded-full"></div>
              <div className="w-28 h-2 bg-gray-50 rounded-full mt-1"></div>
            </>
          ) : (
            <>
              <h3 className="font-black text-gray-800 text-lg">{title}</h3>
              <p className="text-xs text-gray-400 px-4 leading-5">{desc}</p>
            </>
          )}
        </div>

        {/* فلش پایین */}
        <div
          className={`mb-2 w-10 h-10 rounded-full flex items-center justify-center transition-colors ${isEmpty ? "bg-transparent" : "bg-gray-50 text-orange-500"}`}
        >
          {!isEmpty && <ArrowLeft size={18} />}
        </div>
      </div>
    </button>
  );
};

export default Insurancecard;
