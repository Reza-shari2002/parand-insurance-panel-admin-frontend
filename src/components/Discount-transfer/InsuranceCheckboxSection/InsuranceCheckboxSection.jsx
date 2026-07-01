import { Controller } from "react-hook-form";
import UploadBoxField from "../../Basic_information/UploadBoxField/UploadBoxField";

export default function InsuranceCheckboxSection({
  control,
  watch,
  setValue,
  errors,
}) {
  const hasActiveInsurance = watch("has_active_insurance_transfer");

  return (
    <div className="bg-white p-16 rounded-2xl border border-gray-100 shadow-sm">
      <Controller
        name="has_active_insurance_transfer"
        control={control}
        render={({ field }) => (
          <label className="flex items-center gap-3 cursor-pointer mb-4">
            <input
              type="checkbox"
              checked={field.value === "1"}
              onChange={(e) => {
                const value = e.target.checked ? "1" : "0";
                field.onChange(value);

                if (value === "0") {
                  setValue("endorsement_image_url", null, {
                    shouldValidate: true,
                  });
                }
              }}
              className="checkbox checkbox-warning w-10 h-10"
            />

            <span className="font-bold text-gray-700">
              بیمه‌نامه فعال روی پلاک قبلی دارم
            </span>
          </label>
        )}
      />

      {hasActiveInsurance === "1" && (
        <UploadBoxField
          label="تصویر بیمه‌نامه پلاک قبلی *"
          fileName={watch("endorsement_image_url")?.name}
          error={errors.endorsement_image_url}
          onChange={(file) =>
            setValue("endorsement_image_url", file, {
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
