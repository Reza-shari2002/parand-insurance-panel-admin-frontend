import {Boolbadage} from "./Boolbadage";
import { Boolbadage_3message } from "./Boolbadage";
function DesktopTable({ rows, onViewDetails }) {
  return (
    <div className="hidden md:block bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden">
      <div className="overflow-x-auto">
        <table className="min-w-[1100px] w-full text-sm">
          <thead className="bg-gray-50 text-gray-600">
            <tr className="text-right">
              <th className="py-3 px-4 font-semibold">نام و نام خانوادگی</th>
              <th className="py-3 px-4 font-semibold">شماره تماس</th>
              <th className="py-3 px-4 font-semibold">نوع پرداخت</th>
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
                  <td className="py-3 px-4 text-gray-800">{r.phone_number}</td>
                  <td className="py-3 px-4 text-gray-800"><Boolbadage_3message type={r.payment_type} message0={'نقد'} message1={'اقساط'} message2={' هر دو'}></Boolbadage_3message></td>
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
                      onClick={() => onViewDetails?.(r.id)}
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
  );
}

export default DesktopTable