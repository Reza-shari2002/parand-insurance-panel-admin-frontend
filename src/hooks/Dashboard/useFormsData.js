import { useEffect, useState } from "react";
import formservice from "../../services/formservice";

export function useFormsData() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    async function load() {
      try {
        const res = await formservice();
        setData(res);
      } catch (err) {
        setError(err.response?.data?.message || "خطا");
      } finally {
        setLoading(false);
      }
    }

    load();
  }, []);

  return { loading, data, error };
}
