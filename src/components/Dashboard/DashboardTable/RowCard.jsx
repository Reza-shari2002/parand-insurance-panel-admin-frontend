import {Boolbadage} from "./Boolbadage";
function formatIranianDate(dateValue) {
  if (!dateValue) return "—";

  const date = new Date(dateValue);

  if (Number.isNaN(date.getTime())) {
    return "تاریخ نامعتبر";
  }

  return new Intl.DateTimeFormat("fa-IR-u-ca-persian", {
    timeZone: "Asia/Tehran",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  }).format(date);
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
          onClick={() => onViewDetails?.(r.id)}
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
          <span className="font-semibold text-gray-800"> {formatIranianDate(r.created_at)}</span>
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

export default RowCard;