function DashboardPagination({ page, pageCount, onPrev, onNext }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 bg-white border border-gray-100 rounded-2xl p-3 shadow-sm">
      <div className="text-sm text-gray-700 order-2 sm:order-1 text-center sm:text-right">
        صفحه <span className="font-bold">{page}</span> از{" "}
        <span className="font-bold">{pageCount}</span>
      </div>

      <div className="flex gap-2 order-1 sm:order-2">
        <button
          onClick={onPrev}
          disabled={page <= 1}
          className="h-10 flex-1 sm:flex-none px-4 rounded-xl bg-gray-100 text-gray-700 text-sm font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-200 transition"
        >
          قبلی
        </button>

        <button
          onClick={onNext}
          disabled={page >= pageCount}
          className="h-10 flex-1 sm:flex-none px-4 rounded-xl bg-gray-100 text-gray-700 text-sm font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-200 transition"
        >
          بعدی
        </button>
      </div>
    </div>
  );
}

export default DashboardPagination;
