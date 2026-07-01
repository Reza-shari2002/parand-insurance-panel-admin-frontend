function Button_submit({ disabled = false, loading = false }) {
  return (
    <div
      className="fixed bottom-4 left-0 right-0 px-4 z-[9999] flex justify-center
      md:static md:bottom-auto md:left-auto md:right-auto md:px-0 md:z-auto md:mt-12 md:w-full"
    >
      <button
        type="submit"
        disabled={disabled || loading}
        className={`w-full max-w-md py-4 rounded-2xl font-bold text-white transition-colors shadow-lg
        ${
          disabled || loading
            ? "bg-gray-300 cursor-not-allowed"
            : "bg-orange-500 hover:bg-orange-600 shadow-orange-200"
        }`}
      >
        {loading ? "در حال بررسی..." : "ادامه ←"}
      </button>
    </div>
  );
}

export default Button_submit;
