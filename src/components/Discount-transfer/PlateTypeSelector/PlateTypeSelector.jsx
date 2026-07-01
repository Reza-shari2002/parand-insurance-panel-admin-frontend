import { useEffect } from "react";
import UploadBoxField from "../../Basic_information/UploadBoxField/UploadBoxField";

export default function PlateTypeSelector({
  register,
  watch,
  setValue,
  errors,
}) {
  const type = watch("plate_history_type");
  const discount = watch("has_discount_transfer");

  useEffect(() => {
    if (discount === "1") {
      setValue("plate_history_type", "0", {
        shouldValidate: true,
        shouldDirty: true,
        shouldTouch: true,
      });
    }
  }, [discount, setValue]);

  return (
    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
      <label className="block font-bold text-gray-700 mb-4">
        {"یکی از دو راه زیر برای سابقه پلاک انتخاب شود"}
      </label>

      <div className="flex bg-gray-50 p-1 rounded-xl mb-4">
        <button
          type="button"
          onClick={() => {
            setValue("plate_history_type", "0", {
              shouldValidate: true,
              shouldDirty: true,
              shouldTouch: true,
            });
            setValue("plate_history_image_url", null, {
              shouldValidate: true,
            });
          }}
          className={`flex-1 py-3 rounded-lg font-bold transition ${
            type === "0"
              ? "bg-white text-orange-500 shadow-sm border border-orange-200"
              : "text-gray-500"
          }`}
        >
          ورود کد
        </button>

        <button
          type="button"
          onClick={() => {
            setValue("plate_history_type", "1", {
              shouldValidate: true,
              shouldDirty: true,
              shouldTouch: true,
            });
            setValue("plate_history_code", "", {
              shouldValidate: true,
            });
          }}
          className={`flex-1 py-3 rounded-lg font-bold transition ${
            type === "1"
              ? "bg-white text-orange-500 shadow-sm border border-orange-200"
              : "text-gray-500"
          }`}
        >
          بارگذاری تصویر
        </button>
      </div>

      {type === "0" && (
        <>
          <p className="text-sm text-gray-600 mb-3 leading-7">
            برای دریافت تاریخچه پلاک، از طریق{" "}
            <a
              href="https://ghabzino.com/platehistory"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-500 font-bold hover:underline"
            >
              سایت قبضینو
            </a>{" "}
            اقدام کنید و کد تاریخچه پلاک را دریافت نمایید.
          </p>

          <input
            {...register("plate_history_code")}
            className={`w-full p-4 border rounded-xl ${
              errors.plate_history_code
                ? "border-red-300 bg-red-50/40"
                : "border-gray-200"
            }`}
            placeholder="مثال: ۱۲۳۴۵ ایران ۴۴"
          />

          {errors.plate_history_code && (
            <p className="text-xs text-red-500 mt-2">
              {errors.plate_history_code.message}
            </p>
          )}
        </>
      )}

      {type === "1" && (
        <UploadBoxField
          label="تصویر سابقه پلاک *"
          fileName={watch("plate_history_image_url")?.name}
          error={errors.plate_history_image_url}
          onChange={(file) =>
            setValue("plate_history_image_url", file, {
              shouldValidate: true,
              shouldDirty: true,
              shouldTouch: true,
            })
          }
        />
      )}
    </div>
  );
}
