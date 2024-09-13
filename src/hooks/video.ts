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
    } catch (error: any) {
      setMessage(error.response?.data?.error);
      setSuccess(error.response?.data?.success);

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

export const getVideosLike = (sucessLiked: boolean, videoId?: string) => {
  const [data, setData] = useState<any>();
  const [loading, setLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string>();
  const [success, setSuccess] = useState<boolean>(false);

  const fetch = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`/api/v1/video/like?videoId=${videoId}`);

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
  }, [sucessLiked]);

  return { data, loading, message, success };
};

export const getVideosHistory = () => {
  const [data, setData] = useState<any>();
  const [loading, setLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string>();
  const [success, setSuccess] = useState<boolean>(false);

  const fetch = async () => {
    try {
      setLoading(true);
      const response = await axios.get("/api/v1/video/history");

      setData(response?.data?.data);
      setMessage(response?.data?.message);
      setSuccess(response?.data?.success);
    } catch (error: any) {
      setLoading(false);
      setMessage(error.response?.data?.error);
      setSuccess(error.response?.data?.success);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetch();
  }, []);

  return { data, loading, message, success };
};

export const getVideosSearch = (search_query: string) => {
  const [data, setData] = useState<any>();
  const [loading, setLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string>();
  const [success, setSuccess] = useState<boolean>(false);

  const fetch = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `/api/v1/video/search?search_query=${search_query}`
      );

      setData(response?.data?.data);
      setMessage(response?.data?.message);
      setSuccess(response?.data?.success);
    } catch (error) {
      setSuccess((error as any)?.response?.data?.success);
      setMessage(
        (error as any)?.response?.data?.error ||
          (error as any)?.response?.data?.message
      );

      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetch();
  }, [search_query]);

  return { data, loading, message, success };
};
