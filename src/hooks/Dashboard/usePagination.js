import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { string } from "yup";
export function usePagination(data, pageSize) {
  const [page, setPage] = useState(1);
  const navigate = useNavigate();


  function onViewDetails(id){
    console.log(id)
    const id_str  = String(id);
    navigate(`/User/${id_str}`);
  }


  const pageCount = Math.max(
    1,
    Math.ceil(data.length / pageSize)
  );

  const pagedRows = useMemo(() => {
    const start = (page - 1) * pageSize;
    return data.slice(start, start + pageSize);
  }, [data, page]);

  return {
    onViewDetails,
    page,
    setPage,
    pageCount,
    pagedRows,
  };
}
