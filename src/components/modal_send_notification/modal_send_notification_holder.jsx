import useModal_send_notification from "../../hooks/modal_send_notification/useModal_send_notification";

function Modal_send_notification_holder({ phone_number, full_name }) {
  const {
    isOpen,
    loading,
    form,
    previewMessage,
    openModal,
    closeModal,
    handleChange,
    handleSubmit,
  } = useModal_send_notification({ phone_number, full_name });

  return (
    <>
      <button
        type="button"
        onClick={openModal}
        className="rounded-xl bg-orange-500 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-orange-600"
      >
        ارسال پیام
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
          <div
            dir="rtl"
            className="w-full max-w-3xl overflow-hidden rounded-2xl bg-white shadow-2xl"
          >
            <div className="flex items-center justify-between border-b border-slate-200 px-6 py-4">
              <div>
                <h2 className="text-lg font-bold text-slate-800">
                  ارسال پیام ثبت بیمه
                </h2>
                <p className="mt-1 text-sm text-slate-500">
                  نوع پرداخت را انتخاب کنید و اطلاعات بیمه‌نامه را وارد کنید.
                </p>
              </div>

              <button
                type="button"
                onClick={closeModal}
                className="rounded-lg px-3 py-1.5 text-xl text-slate-500 transition hover:bg-slate-100 hover:text-slate-800"
              >
                ×
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5 px-6 py-5">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div>
                  <label className="mb-1 block text-sm font-medium text-slate-700">
                    نام و نام خانوادگی
                  </label>
                  <input
                    name="full_name"
                    value={form.full_name}
                    readOnly
                    className="w-full rounded-xl border border-slate-200 bg-slate-100 px-3 py-2.5 text-sm outline-none"
                  />
                </div>

                <div>
                  <label className="mb-1 block text-sm font-medium text-slate-700">
                    شماره تلفن
                  </label>
                  <input
                    name="phone_number"
                    value={form.phone_number}
                    readOnly
                    className="w-full rounded-xl border border-slate-200 bg-slate-100 px-3 py-2.5 text-sm outline-none"
                  />
                </div>

                <div>
                  <label className="mb-1 block text-sm font-medium text-slate-700">
                    نام خودرو
                  </label>
                  <input
                    name="car_name"
                    value={form.car_name}
                    onChange={handleChange}
                    placeholder="مثلاً پراید"
                    className="w-full rounded-xl border border-slate-200 px-3 py-2.5 text-sm outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
                  />
                </div>

                <div>
                  <label className="mb-1 block text-sm font-medium text-slate-700">
                    مبلغ کل
                  </label>
                  <input
                    name="total_cost"
                    type="number"
                    value={form.total_cost}
                    onChange={handleChange}
                    placeholder="مثلاً 300000"
                    className="w-full rounded-xl border border-slate-200 px-3 py-2.5 text-sm outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  نوع پرداخت
                </label>

                <div className="grid grid-cols-2 gap-3">
                  <label
                    className={`flex cursor-pointer items-center justify-center gap-2 rounded-xl border px-4 py-3 text-sm font-semibold transition ${
                      form.payment_type === "0"
                        ? "border-orange-500 bg-orange-50 text-orange-600"
                        : "border-slate-200 text-slate-600 hover:bg-slate-50"
                    }`}
                  >
                    <input
                      type="radio"
                      name="payment_type"
                      value="0"
                      checked={form.payment_type === "0"}
                      onChange={handleChange}
                      className="accent-orange-500"
                    />
                    نقد
                  </label>

                  <label
                    className={`flex cursor-pointer items-center justify-center gap-2 rounded-xl border px-4 py-3 text-sm font-semibold transition ${
                      form.payment_type === "1"
                        ? "border-orange-500 bg-orange-50 text-orange-600"
                        : "border-slate-200 text-slate-600 hover:bg-slate-50"
                    }`}
                  >
                    <input
                      type="radio"
                      name="payment_type"
                      value="1"
                      checked={form.payment_type === "1"}
                      onChange={handleChange}
                      className="accent-orange-500"
                    />
                    اقساط
                  </label>
                </div>
              </div>

              {form.payment_type === "1" && (
                <div className="grid grid-cols-1 gap-4 rounded-2xl border border-orange-100 bg-orange-50/50 p-4 md:grid-cols-3">
                  <div>
                    <label className="mb-1 block text-sm font-medium text-slate-700">
                      پیش پرداخت
                    </label>
                    <input
                      name="precome"
                      type="number"
                      value={form.precome}
                      onChange={handleChange}
                      placeholder="مثلاً 20000"
                      className="w-full rounded-xl border border-slate-200 px-3 py-2.5 text-sm outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
                    />
                  </div>

                  <div>
                    <label className="mb-1 block text-sm font-medium text-slate-700">
                      مبلغ هر قسط
                    </label>
                    <input
                      name="cost_of_rate"
                      type="number"
                      value={form.cost_of_rate}
                      onChange={handleChange}
                      placeholder="مثلاً 800"
                      className="w-full rounded-xl border border-slate-200 px-3 py-2.5 text-sm outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
                    />
                  </div>

                  <div>
                    <label className="mb-1 block text-sm font-medium text-slate-700">
                      تعداد ماه
                    </label>
                    <input
                      name="count_of_rate"
                      type="number"
                      value={form.count_of_rate}
                      onChange={handleChange}
                      placeholder="مثلاً 3"
                      className="w-full rounded-xl border border-slate-200 px-3 py-2.5 text-sm outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
                    />
                  </div>
                </div>
              )}

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="mb-2 text-sm font-bold text-slate-700">
                  پیش‌نمایش پیام
                </h3>
                <p className="text-sm leading-8 text-slate-600">
                  {previewMessage}
                </p>
              </div>

              <div className="flex items-center justify-end gap-3 border-t border-slate-200 pt-4">
                <button
                  type="button"
                  onClick={closeModal}
                  className="rounded-xl border border-slate-200 px-5 py-2.5 text-sm font-semibold text-slate-600 transition hover:bg-slate-50"
                >
                  انصراف
                </button>

                <button
                  type="submit"
                  disabled={loading}
                  className="rounded-xl bg-orange-500 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-orange-600 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {loading ? "در حال ارسال..." : "تایید و ارسال"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default Modal_send_notification_holder;
