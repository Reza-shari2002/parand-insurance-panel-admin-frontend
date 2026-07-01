import { useEffect, useContext } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { context } from "../../context/Formcontext";
import schema from "../../schemas/discounttransferfamily";

import Progressbarandheader from "../common/Progressbarandheader";
import UploadBoxField from "../Basic_information/UploadBoxField/UploadBoxField";
import Button_submit from "../common/Button_submit";
import FamilyDiscountSection from "./FamilyDiscountSection/FamilyDiscountSection";
function Discount_transfer_family_holder() {
  const navigate = useNavigate();
  const { set_data } = useContext(context);
  const { current_page, set_current_page } = useContext(context);
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  useEffect(() => {
    if (current_page < 4) {
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
      relationship_docs1_image_person1_url: null,
      relationship_docs2_image_person1_url: null,
      relationship_docs1_image_person2_url: null,
      relationship_docs2_image_person2_url: null,
      is_relative_transfer: "0",
    },
    mode: "onTouched",
  });

  const has_relative_transfer = watch("is_relative_transfer");
  useEffect(() => {
    if (has_relative_transfer === "0") {
      setValue("relationship_docs1_image_person1_url", null);
      setValue("relationship_docs2_image_person1_url", null);
      setValue("relationship_docs1_image_person2_url", null);
      setValue("relationship_docs2_image_person2_url", null);
    }
  }, [has_relative_transfer, setValue]);

  const onSubmit = (formData) => {
    set_current_page(5);
    set_data((prev) => ({ ...prev, ...formData }));
    navigate("/Confirm");
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-2xl mx-auto space-y-6"
      >
        <Progressbarandheader
          current_step={4}
          title="تکمیل اطلاعات و مدارک"
          body="لطفاً اطلاعات خود و مدارک مورد نیاز را بارگذاری کنید."
        />

        <div className="bg-white p-6 rounded-2xl border border-gray-100 flex justify-between items-center shadow-sm">
          <label className="font-bold text-gray-700">
            آیا درخواست انتقال تخفیف به همسر یا فرزند دارید؟
          </label>

          <Controller
            name="is_relative_transfer"
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

        {has_relative_transfer === "0" && (
          <div className="h-[200px] w-full bg-transparent"></div>
        )}

        {has_relative_transfer === "1" && (
          <div className="space-y-6 animate-in fade-in duration-500">
            <FamilyDiscountSection
              watch={watch}
              setValue={setValue}
              errors={errors}
            ></FamilyDiscountSection>
          </div>
        )}

        <div className="pt-4">
          <Button_submit loading={isSubmitting} />
        </div>
      </form>
    </>
  );
}

export default Discount_transfer_family_holder;
