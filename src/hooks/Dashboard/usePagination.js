import { useMemo, useState } from "react";

export function usePagination(data, pageSize) {
  const [page, setPage] = useState(1);

  const pageCount = Math.max(
    1,
    Math.ceil(data.length / pageSize)
  );

  const pagedRows = useMemo(() => {
    const start = (page - 1) * pageSize;
    return data.slice(start, start + pageSize);
  }, [data, page]);

  return {
    page,
    setPage,
    pageCount,
    pagedRows,
  };
}
