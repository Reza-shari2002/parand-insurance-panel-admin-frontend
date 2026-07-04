import DashboardSearch from "./DashboardSearch/DashboardSearch";
import DashboardTable from "./DashboardTable/DashboardTable";
import DashboardPagination from "./DashboardPagination/DashboardPagination";

import { useFormsData } from "../../hooks/Dashboard/useFormsData";
import { useFilters } from "../../hooks/Dashboard/useFilters";
import { usePagination } from "../../hooks/Dashboard/usePagination";

function DashboardHolder() {
  const { loading, data, error } = useFormsData();
  const { filters, applyFilters, clearFilters } = useFilters();

  // فیلتر
  const filteredRows = data.filter((r) => {
    const matchPhone = filters.phone
      ? r.phone_number?.includes(filters.phone)
      : true;

    const matchName = filters.fullName
      ? r.full_name?.includes(filters.fullName)
      : true;

    return matchPhone && matchName;
  });

  // صفحه‌بندی
  const {
    onViewDetails,
    page,
    setPage,
    pageCount,
    pagedRows,
  } = usePagination(filteredRows, 7);

  if (loading) return <div>در حال بارگذاری...</div>;
  if (error) return <div>خطا: {error}</div>;

  return (
    <div className="w-full max-w-7xl mx-auto py-6 px-4">

      <DashboardSearch
        value={filters}
        onSearch={applyFilters}
        onClear={clearFilters}
      />

      <DashboardTable
        rows={pagedRows}
        onViewDetails={onViewDetails}
      />

      <DashboardPagination
        page={page}
        pageCount={pageCount}
        onPrev={() => setPage(p => Math.max(1, p - 1))}
        onNext={() => setPage(p => Math.min(pageCount, p + 1))}
      />

    </div>
  );
}

export default DashboardHolder;
