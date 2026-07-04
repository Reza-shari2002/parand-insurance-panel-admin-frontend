function Boolbadage({ type, message0, message1 }) {
  return (
    <span
      className={`inline-flex items-center justify-center px-2 py-1 rounded-lg text-xs font-semibold ${
        type === "0"
          ? "bg-green-50 text-amber-300"
          : "bg-gray-100 text-green-500"
      }`}
    >
      {type === "0" ? message0 : message1}
    </span>
  );
}

function RowCard({ r, onViewDetails }) {
  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-4 shadow-sm">
      <div className="flex items-start justify-between gap-3">
        <div>
          <div className="text-sm font-bold text-gray-900">
            {r.full_name || "-"}
          </div>

          <div className="text-xs text-gray-500 mt-1">
            {r.phone_number || "-"}
          </div>
        </div>

        <button
          onClick={() => onViewDetails?.(r)}
          className="h-9 px-3 rounded-xl bg-white border border-orange-200 text-orange-600 text-xs font-semibold hover:bg-orange-50 transition"
        >
          مشاهده
        </button>
      </div>

      <div className="mt-3 grid grid-cols-1 gap-2 text-xs sm:grid-cols-2">
        <div className="flex items-center justify-between bg-gray-50 rounded-xl px-3 py-2">
          <span className="text-gray-600">نوع کارت</span>
          <Boolbadage
            type={r.document_car_type}
            message0="کارت ماشین"
            message1="کارت سبز"
          />
        </div>

        <div className="flex items-center justify-between bg-gray-50 rounded-xl px-3 py-2">
          <span className="text-gray-600">زمان ایجاد</span>
          <span className="font-semibold text-gray-800">{r.created_at}</span>
        </div>

        <div className="flex items-center justify-between bg-gray-50 rounded-xl px-3 py-2 sm:col-span-2">
          <span className="text-gray-600">انتقال تخفیف تعویض پلاک</span>
          <Boolbadage
            type={r.has_discount_transfer}
            message0="ندارد"
            message1="دارد"
          />
        </div>

        <div className="flex items-center justify-between bg-gray-50 rounded-xl px-3 py-2 sm:col-span-2">
          <span className="text-gray-600">الحاقیه بیمه‌نامه قبلی</span>
          <Boolbadage
            type={r.has_active_insurance_transfer}
            message0="ندارد"
            message1="دارد"
          />
        </div>

        <div className="flex items-center justify-between bg-gray-50 rounded-xl px-3 py-2 sm:col-span-2">
          <span className="text-gray-600">انتقال تخفیف به بستگان</span>
          <Boolbadage
            type={r.is_relative_transfer}
            message0="ندارد"
            message1="دارد"
          />
        </div>
      </div>
    </div>
  );
}

function DashboardTable({ rows, onViewDetails }) {
  return (
    <div className="w-full">
      {/* Mobile / Tablet */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:hidden">
        {rows.length === 0 ? (
          <div className="bg-white border border-gray-100 rounded-2xl p-6 text-sm text-gray-500">
            موردی یافت نشد.
          </div>
        ) : (
          rows.map((r) => (
            <RowCard key={r.id} r={r} onViewDetails={onViewDetails} />
          ))
        )}
      </div>

      {/* Desktop */}
      <div className="hidden md:block bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-[1100px] w-full text-sm">
            <thead className="bg-gray-50 text-gray-600">
              <tr className="text-right">
                <th className="py-3 px-4 font-semibold">نام و نام خانوادگی</th>
                <th className="py-3 px-4 font-semibold">شماره تماس</th>
                <th className="py-3 px-4 font-semibold">نوع کارت ماشین</th>
                <th className="py-3 px-4 font-semibold">
                  درخواست انتقال تخفیف تعویض پلاک
                </th>
                <th className="py-3 px-4 font-semibold">
                  الحاقیه بیمه‌نامه قبلی
                </th>
                <th className="py-3 px-4 font-semibold">
                  انتقال تخفیف به بستگان
                </th>
                <th className="py-3 px-4 font-semibold">زمان ایجاد</th>
                <th className="py-3 px-4 font-semibold">مشاهده جزئیات</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-100">
              {rows.length === 0 ? (
                <tr>
                  <td className="py-6 px-4 text-gray-500" colSpan={8}>
                    موردی یافت نشد.
                  </td>
                </tr>
              ) : (
                rows.map((r) => (
                  <tr key={r.id} className="hover:bg-orange-50/40 transition">
                    <td className="py-3 px-4 text-gray-800">{r.full_name}</td>
                    <td className="py-3 px-4 text-gray-800">
                      {r.phone_number}
                    </td>
                    <td className="py-3 px-4 text-gray-800">
                      <Boolbadage
                        type={r.document_car_type}
                        message0="کارت ماشین"
                        message1="کارت سبز"
                      />
                    </td>
                    <td className="py-3 px-4">
                      <Boolbadage
                        type={r.has_discount_transfer}
                        message0="ندارد"
                        message1="دارد"
                      />
                    </td>
                    <td className="py-3 px-4">
                      <Boolbadage
                        type={r.has_active_insurance_transfer}
                        message0="ندارد"
                        message1="دارد"
                      />
                    </td>
                    <td className="py-3 px-4">
                      <Boolbadage
                        type={r.is_relative_transfer}
                        message0="ندارد"
                        message1="دارد"
                      />
                    </td>
                    <td className="py-3 px-4 text-gray-700">{r.created_at}</td>
                    <td className="py-3 px-4">
                      <button
                        onClick={() => onViewDetails?.(r)}
                        className="h-9 px-3 rounded-xl bg-white border border-orange-200 text-orange-600 font-semibold hover:bg-orange-50 transition"
                      >
                        مشاهده
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default DashboardTable;
