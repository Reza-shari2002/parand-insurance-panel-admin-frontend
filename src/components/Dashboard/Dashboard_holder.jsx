import { useEffect, useMemo, useState } from "react";

import DashboardSearch from "./DashboardSearch/DashboardSearch";
import DashboardTable from "./DashboardTable/DashboardTable";
import DashboardPagination from "./DashboardPagination/DashboardPagination";

import formservice from "../../services/formservice";

function Dashboard_holder() {
  const [loading, set_loading] = useState(true);
  const [data, set_data] = useState([]);

  // fetch data
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    async function get_data() {
      try {
        const response = await formservice();

        set_data(response);
      } catch (err) {
        alert(
          `error : ${err.response?.data?.message || "خطا"}`
        );
      } finally {
        set_loading(false);
      }
    }

    get_data();
  }, []);

  // filters
  const [filters, setFilters] = useState({
    phone: "",
    fullName: "",
  });

  // pagination
  const [page, setPage] = useState(1);

  const pageSize = 7;

  const filteredRows = useMemo(() => {
    const phone = filters.phone.trim();
    const fullName = filters.fullName.trim();

    return data.filter((r) => {
      const matchPhone = phone
        ? r.phone_number?.includes(phone)
        : true;

      const matchName = fullName
        ? r.full_name?.includes(fullName)
        : true;

      return matchPhone && matchName;
    });
  }, [data, filters]);

  const pageCount = Math.max(
    1,
    Math.ceil(filteredRows.length / pageSize)
  );

  const pagedRows = useMemo(() => {
    const start = (page - 1) * pageSize;

    return filteredRows.slice(start, start + pageSize);
  }, [filteredRows, page]);

  useEffect(() => {
    setPage(1);
  }, [filters]);

  const handleSearch = (nextFilters) =>
    setFilters(nextFilters);

  const handleClear = () =>
    setFilters({
      phone: "",
      fullName: "",
    });

  const handleViewDetails = (row) => {
    alert(`جزئیات درخواست شماره ${row.id}`);
  };

  if (loading) {
    return <div>loading...</div>;
  }

  return (
    <div className="w-full max-w-7xl mx-auto py-6 px-4">
      <div className="mb-6">
        <h1 className="text-lg font-bold text-gray-900">
          داشبورد پرند بیمه
        </h1>

        <p className="text-sm text-gray-500 mt-1">
          مدارک اپلود شده توسط کاربران
        </p>
      </div>

      <DashboardSearch
        value={filters}
        onSearch={handleSearch}
        onClear={handleClear}
      />

      <div className="mt-4">
        <DashboardTable
          rows={pagedRows}
          onViewDetails={handleViewDetails}
        />
      </div>

      <div className="mt-4">
        <DashboardPagination
          page={page}
          pageCount={pageCount}
          onPrev={() =>
            setPage((p) => Math.max(1, p - 1))
          }
          onNext={() =>
            setPage((p) => Math.min(pageCount, p + 1))
          }
        />
      </div>
    </div>
  );
}

export default Dashboard_holder;
