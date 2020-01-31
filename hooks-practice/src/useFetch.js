import { useEffect, useState } from "react";
export const useFetch = url => {
  const [data, setData] = useState({ data: null, loading: true });

  useEffect(() => {
    setData({ data: true, loading: null });
    fetch(url)
      .then(x => x.text())
      .then(y => {
        setData({ data: y, loading: false });
      });
  }, [url, setData]);

  return data;
};
