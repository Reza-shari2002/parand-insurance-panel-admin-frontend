import { useEffect, useMemo, useState } from "react";
import DashboardSearch from "./DashboardSearch/DashboardSearch";
import DashboardTable from "./DashboardTable/DashboardTable";
import DashboardPagination from "./DashboardPagination/DashboardPagination";

function Dashboard_holder() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  // Mock Data (بعداً از API میاد)
  const [rows] = useState([
    {
      id: 101,
      firstName: "علی",
      lastName: "رضایی",
      phone: "09121234567",
      carCardType: "کارت سبز",
      transferDiscountPlateChange: true,
      addendumPrevPolicy: false,
      transferToRelatives: true,
      createdAt: "1405/04/10 - 12:25",
    },
    {
      id: 102,
      firstName: "مریم",
      lastName: "محمدی",
      phone: "09351234567",
      carCardType: "کارت زرد",
      transferDiscountPlateChange: false,
      addendumPrevPolicy: true,
      transferToRelatives: false,
      createdAt: "1405/04/10 - 09:18",
    },
       {
      id: 101,
      firstName: "علی",
      lastName: "رضایی",
      phone: "09121234567",
      carCardType: "کارت سبز",
      transferDiscountPlateChange: true,
      addendumPrevPolicy: false,
      transferToRelatives: true,
      createdAt: "1405/04/10 - 12:25",
    },

  ]);

  // فیلترهای سرچ
  const [filters, setFilters] = useState({
    phone: "",
    fullName: "",
  });

  // Pagination
  const [page, setPage] = useState(1);
  const pageSize = 7;

  const filteredRows = useMemo(() => {
    const phone = filters.phone.trim();
    const fullName = filters.fullName.trim();

    return rows.filter((r) => {
      const matchPhone = phone ? r.phone.includes(phone) : true;

      const full = `${r.firstName} ${r.lastName}`.replace(/\s+/g, " ").trim();
      const matchName = fullName ? full.includes(fullName) : true;

      return matchPhone && matchName;
    });
  }, [rows, filters]);

  const pageCount = Math.max(1, Math.ceil(filteredRows.length / pageSize));

  const pagedRows = useMemo(() => {
    const start = (page - 1) * pageSize;
    return filteredRows.slice(start, start + pageSize);
  }, [filteredRows, page, pageSize]);

  // وقتی فیلتر عوض شد، برگرد صفحه 1
  useEffect(() => {
    setPage(1);
  }, [filters.phone, filters.fullName]);

  const handleSearch = (nextFilters) => setFilters(nextFilters);

  const handleClear = () => setFilters({ phone: "", fullName: "" });

  const handleViewDetails = (row) => {
    // فعلاً نمونه: بعداً می‌تونی navigate کنی به /requests/:id
    alert(`جزئیات درخواست شماره ${row.id}`);
  };

  return (
    <div className="w-full max-w-7xl mx-auto py-6 px-4">
      <div className="mb-6">
        <h1 className="text-lg font-bold text-gray-900">داشبورد</h1>
        <p className="text-sm text-gray-500 mt-1">
          مدیریت درخواست‌ها و مشاهده وضعیت‌ها
        </p>
      </div>

      <DashboardSearch
        value={filters}
        onSearch={handleSearch}
        onClear={handleClear}
      />

      <div className="mt-4">
        <DashboardTable rows={pagedRows} onViewDetails={handleViewDetails} />
      </div>

      <div className="mt-4">
        <DashboardPagination
          page={page}
          pageCount={pageCount}
          onPrev={() => setPage((p) => Math.max(1, p - 1))}
          onNext={() => setPage((p) => Math.min(pageCount, p + 1))}
        />
      </div>
    </div>
  );
}

export default Dashboard_holder;
