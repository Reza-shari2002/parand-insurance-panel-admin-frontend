import { useEffect, useContext } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { context } from "../../context/Formcontext";
import schema from "../../schemas/discounttransferschema";

import Progressbarandheader from "../common/Progressbarandheader";
import UploadBoxField from "../Basic_information/UploadBoxField/UploadBoxField";
import PlateTypeSelector from "./PlateTypeSelector/PlateTypeSelector";
import InsuranceCheckboxSection from "./InsuranceCheckboxSection/InsuranceCheckboxSection";
import Button_submit from "../common/Button_submit";

function Discount_transfer_holder() {
  const navigate = useNavigate();
  const { set_data } = useContext(context);
  const { current_page, set_current_page } = useContext(context);
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  useEffect(() => {
    if (current_page < 3) {
      navigate("/home");
    }
  }, []);

  const {
    control,
    register,
    watch,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      has_discount_transfer: "0",
      plate_history_type: "2",
      has_active_insurance_transfer: "0",
      plate_history_code: "",
      plate_history_image_url: null,
      prev_insurance_image_url: null,
      endorsement_image_url: null,
    },
    mode: "onTouched",
  });

  const hasDiscount = watch("has_discount_transfer");
  const hasActiveInsurance = watch("has_active_insurance_transfer");

  useEffect(() => {
    if (hasDiscount === "0") {
      setValue("plate_history_type", "2");
      setValue("plate_history_code", "");
      setValue("plate_history_image_url", null);
      setValue("prev_insurance_image_url", null);
      setValue("endorsement_image_url", null);
      setValue("has_active_insurance_transfer", "0");
    }
  }, [hasDiscount, setValue]);

  useEffect(() => {
    if (hasActiveInsurance === "0") {
      setValue("endorsement_image_url", null);
    }
  }, [hasActiveInsurance, setValue]);

  const onSubmit = (formData) => {
    set_current_page(4);
    set_data((prev) => ({ ...prev, ...formData }));
    navigate("/Discount-transfer-family");
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-2xl mx-auto space-y-6"
    >
      <Progressbarandheader
        current_step={3}
        title="تکمیل اطلاعات و مدارک"
        body="لطفاً اطلاعات خود و مدارک مورد نیاز را بارگذاری کنید."
      />

      <div className="bg-white p-6 rounded-2xl border border-gray-100 flex justify-between items-center shadow-sm">
        <label className="font-bold text-gray-700">
          آیا انتقال پلاک با انتقال تخفیف دارید؟
        </label>

        <Controller
          name="has_discount_transfer"
          control={control}
          render={({ field }) => (
            <input
              type="checkbox"
              checked={field.value === "1"}
              onChange={(e) => field.onChange(e.target.checked ? "1" : "0")}
              className="toggle toggle-warning w-10 h-10"
            />
          )}
        />
      </div>

      {hasDiscount === "0" && (
        <div className="h-[200px] w-full bg-transparent"></div>
      )}

      {hasDiscount === "1" && (
        <div className="space-y-6 animate-in fade-in duration-500">
          <UploadBoxField
            label="تصویر بیمه‌نامه قبلی *"
            fileName={watch("prev_insurance_image_url")?.name}
            error={errors.prev_insurance_image_url}
            onChange={(file) =>
              setValue("prev_insurance_image_url", file, {
                shouldValidate: true,
                shouldDirty: true,
                shouldTouch: true,
              })
            }
          />

          <PlateTypeSelector
            register={register}
            watch={watch}
            setValue={setValue}
            errors={errors}
          />

          <InsuranceCheckboxSection
            control={control}
            watch={watch}
            setValue={setValue}
            errors={errors}
          />
        </div>
      )}

      <div className="pt-4">
        <Button_submit loading={isSubmitting} />
      </div>
    </form>
  );
}

export default Discount_transfer_holder;
