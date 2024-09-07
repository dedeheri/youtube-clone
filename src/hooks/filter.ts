import axios from "axios";
import { useEffect, useState } from "react";

export const getFilter = (refresh: number) => {
  const [data, setData] = useState<any>();
  const [loading, setLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string>();
  const [success, setSuccess] = useState<boolean>(false);

  const fetch = async () => {
    try {
      setLoading(true);
      const response = await axios.get("/api/v1/filter");

      setData(response?.data?.data);
      setMessage(response?.data?.message);
      setSuccess(response?.data?.success);
    } catch (error) {
      setLoading(false);
      console.log("error", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetch();
  }, [refresh]);

  return { data, loading, message, success };
};
