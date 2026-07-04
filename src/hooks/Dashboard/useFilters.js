import { useState } from "react";

export function useFilters() {
  const [filters, setFilters] = useState({
    phone: "",
    fullName: "",
  });

  const applyFilters = (next) => setFilters(next);

  const clearFilters = () =>
    setFilters({ phone: "", fullName: "" });

  return { filters, applyFilters, clearFilters };
}
