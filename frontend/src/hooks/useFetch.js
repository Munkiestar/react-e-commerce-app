import React, { useEffect, useState } from "react";
import { makeRequest } from "../makeRequest.js";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const resData = await makeRequest.get(url);

        setData(resData.data.data);
      } catch (err) {
        setError(true);
        console.log("ERR: ", err);
      }
      setLoading(false);
    };
    fetchProducts();
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
