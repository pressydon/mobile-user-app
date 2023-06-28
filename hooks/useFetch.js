import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { selectUserInfo } from "../slices/authSlice";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const userInfo = useSelector(selectUserInfo)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await axios.get(url, { headers: { 'Authorization':  `Bearer ${userInfo.token}` }});
        setData(res.data);
      } catch (err) {
        setError(err);
      }
      setLoading(false);
    };
    fetchData();
  }, [url]);

  const reFetch = async () => {
    setLoading(true);
    try {
      const res = await axios.get(url,  { headers: { 'Authorization':  `Bearer ${userInfo.token}` }});
      setData(res.data);
    } catch (err) {
      setError(err);
    }
    setLoading(false);
  };

  return { data, loading, error, reFetch };
};

export default useFetch;