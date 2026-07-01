import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";

import { context } from "../../context/Formcontext";
import Progressbarandheader from "../common/Progressbarandheader";
import Button_submit from "../common/Button_submit";

import BasicInfoTextFields from "./BasicInfoTextFields/BasicInfoTextFields";
import DocumentTypeSelector from "./DocumentTypeSelector/DocumentTypeSelector";
import VehicleDocumentFields from "./VehicleDocumentFields/VehicleDocumentFields";
import UploadBoxField from "./UploadBoxField/UploadBoxField";
import { basicInformationSchema } from "../../schemas/basicInformationSchema";
import { Sofa } from "lucide-react";

function Basic_information_holder() {
  const navigate = useNavigate();
  const { current_page, set_current_page } = useContext(context);
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  useEffect(() => {
    if (current_page < 2) {
      navigate("/home");
    }
  }, []);

  const { set_data, data } = useContext(context);

  const {
    register,
    handleSubmit,
    control,
    watch,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(basicInformationSchema),
    defaultValues: {
      full_name: "",
      address: "",
      postal_code: "",
      phone_number: "",
      document_car_type: "0",
      car_card_image_front_url: null,
      car_card_image_back_url: null,
      green_paper_image_url: null,
      national_id_image_url: null,
    },
    mode: "onTouched",
  });

  const docType = watch("document_car_type");

  const onSubmit = (formData) => {
    set_current_page(3);
    set_data((prev) => ({
      ...prev,
      ...formData,
    }));

    navigate("/Discount_transfer");
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col items-center w-full max-w-2xl mx-auto px-4 py-8 pb-32 md:pb-12"
    >
      <Progressbarandheader
        current_step={2}
        title="تکمیل اطلاعات و مدارک"
        body="لطفاً اطلاعات خود و مدارک مورد نیاز را بارگذاری کنید."
      />

      <div className="w-full space-y-6 mt-8">
        <BasicInfoTextFields register={register} errors={errors} />

        <Controller
          name="document_car_type"
          control={control}
          render={({ field }) => (
            <DocumentTypeSelector
              value={field.value}
              onChange={(value) => {
                field.onChange(value);

                if (value === "0") {
                  setValue("green_paper_image_url", null, {
                    shouldValidate: false,
                  });
                } else {
                  setValue("car_card_image_front_url", null, {
                    shouldValidate: false,
                  });
                  setValue("car_card_image_back_url", null, {
                    shouldValidate: false,
                  });
                }
              }}
              error={errors.document_car_type}
            />
          )}
        />

        <VehicleDocumentFields
          docType={docType}
          errors={errors}
          watch={watch}
          setValue={setValue}
        />

        <UploadBoxField
          label="تصویر کارت ملی *"
          fileName={watch("national_id_image_url")?.name}
          error={errors.national_id_image_url}
          onChange={(file) => {
            setValue("national_id_image_url", file, {
              shouldValidate: true,
            });
          }}
        />
      </div>

      <div className="w-full">
        <Button_submit loading={isSubmitting} />
      </div>
    </form>
  );
}

export default Basic_information_holder;
