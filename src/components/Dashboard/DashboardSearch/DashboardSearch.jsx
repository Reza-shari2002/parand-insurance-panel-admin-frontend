import { useEffect, useState } from "react";

function DashboardSearch({ value, onSearch, onClear }) {
  const [local, setLocal] = useState(value);

  useEffect(() => setLocal(value), [value]);

  const submit = (e) => {
    e.preventDefault();
    onSearch?.(local);
  };

  return (
    <form
      onSubmit={submit}
      className="bg-white border border-gray-100 rounded-2xl p-4 shadow-sm"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        <div className="flex flex-col gap-2">
          <label className="text-xs text-gray-600">شماره تماس</label>
          <input
            value={local.phone}
            onChange={(e) => setLocal((s) => ({ ...s, phone: e.target.value }))}
            placeholder="مثلاً 0912..."
            className="w-full h-11 rounded-xl border border-gray-200 px-3 outline-none focus:ring-2 focus:ring-orange-200 focus:border-orange-300"
            inputMode="numeric"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-xs text-gray-600">نام و نام خانوادگی</label>
          <input
            value={local.fullName}
            onChange={(e) =>
              setLocal((s) => ({ ...s, fullName: e.target.value }))
            }
            placeholder="مثلاً علی رضایی"
            className="w-full h-11 rounded-xl border border-gray-200 px-3 outline-none focus:ring-2 focus:ring-orange-200 focus:border-orange-300"
          />
        </div>

        {/* دکمه‌ها: موبایل زیر هم و تمام‌عرض؛ دسکتاپ کنار هم */}
        <div className="flex flex-col sm:flex-row gap-2 sm:justify-end md:items-end">
          <button
            type="submit"
            className="h-11 w-full sm:w-auto px-5 rounded-xl bg-orange-500 text-white text-sm font-semibold hover:bg-orange-600 transition"
          >
            جستجو
          </button>
          <button
            type="button"
            onClick={() => {
              const cleared = { phone: "", fullName: "" };
              setLocal(cleared);
              onClear?.();
              onSearch?.(cleared);
            }}
            className="h-11 w-full sm:w-auto px-5 rounded-xl bg-gray-100 text-gray-700 text-sm font-semibold hover:bg-gray-200 transition"
          >
            پاک کردن
          </button>
        </div>
      </div>
    </form>
  );
}

export default DashboardSearch;
