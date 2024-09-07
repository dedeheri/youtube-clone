import axios from "axios";
import { useEffect, useState } from "react";

export const getVideos = (selected?: string) => {
  const [data, setData] = useState<any>();
  const [loading, setLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string>();
  const [success, setSuccess] = useState<boolean>(false);

  const fetch = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`/api/v1/video?filter=${selected}`);

      setData(response?.data?.data);
      setMessage(response?.data?.message);
      setSuccess(response?.data?.success);
    } catch (error) {
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetch();
  }, [selected]);

  return { data, loading, message, success };
};

export const getVideosDetails = (v?: string) => {
  const [data, setData] = useState<any>();
  const [loading, setLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string>();
  const [success, setSuccess] = useState<boolean>(false);

  const fetch = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`/api/v1/video/watch?v=${v}`);

      setData(response?.data?.data);
      setMessage(response?.data?.message);
      setSuccess(response?.data?.success);
    } catch (error) {
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetch();
  }, []);

  return { data, loading, message, success };
};
