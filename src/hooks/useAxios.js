import axios from "axios";
import { useEffect, useState } from "react";

export const useAxios = (param) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  axios.defaults.baseURL = "https://api.coingecko.com/api/v3/";

  const fetchData = async (param) => {
    try {
      setLoading(true);
      const result = await axios(param);
      setData(result.data);
    } catch (err) {
      setError(err);
      setLoading(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(param);
  }, [param]);

  return {
    data,
    loading,
    error,
  };
};
