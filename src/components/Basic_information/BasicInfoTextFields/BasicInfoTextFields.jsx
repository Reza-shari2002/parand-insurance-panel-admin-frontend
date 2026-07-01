function BasicInfoTextFields({ register, errors }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="flex flex-col gap-1">
        <label className="text-sm font-bold text-gray-700">
          نام و نام خانوادگی *
        </label>
        <input
          type="text"
          placeholder="نام خود را وارد کنید"
          className={`border rounded-xl p-3 outline-none transition-all bg-gray-50/50 ${
            errors.full_name
              ? "border-red-400 focus:border-red-500"
              : "border-gray-200 focus:border-orange-500"
          }`}
          {...register("full_name")}
        />
        {errors.full_name && (
          <p className="text-xs text-red-500">{errors.full_name.message}</p>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-sm font-bold text-gray-700">
          شماره موبایل *
        </label>
        <input
          type="text"
          placeholder="۰۹۱۲۳۴۵۶۷۸۹"
          dir="ltr"
          className={`border rounded-xl p-3 outline-none transition-all bg-gray-50/50 text-left ${
            errors.phone_number
              ? "border-red-400 focus:border-red-500"
              : "border-gray-200 focus:border-orange-500"
          }`}
          {...register("phone_number")}
        />
        {errors.phone_number && (
          <p className="text-xs text-red-500">{errors.phone_number.message}</p>
        )}
      </div>
      <div className="flex flex-col gap-1">
        <label className="text-sm font-bold text-gray-700">کد پستی *</label>
        <input
          type="text"
          placeholder="کد پستی در سامانه املاک ثبت شده باشد"
          dir="ltr"
          className={`border rounded-xl p-3 outline-none transition-all bg-gray-50/50 text-left ${
            errors.postal_code
              ? "border-red-400 focus:border-red-500"
              : "border-gray-200 focus:border-orange-500"
          }`}
          {...register("postal_code")}
        />
        {errors.postal_code && (
          <p className="text-xs text-red-500">{errors.postal_code.message}</p>
        )}
      </div>
      <div className="flex flex-col gap-1">
        <label className="text-sm font-bold text-gray-700">آدرس *</label>
        <input
          type="text"
          placeholder="آدرس خود را وارد کنید"
          dir="ltr"
          className={`border rounded-xl p-3 outline-none transition-all bg-gray-50/50 text-left ${
            errors.address
              ? "border-red-400 focus:border-red-500"
              : "border-gray-200 focus:border-orange-500"
          }`}
          {...register("address")}
        />
        {errors.address && (
          <p className="text-xs text-red-500">{errors.address?.message}</p>
        )}
      </div>
    </div>
  );
}

export default BasicInfoTextFields;
