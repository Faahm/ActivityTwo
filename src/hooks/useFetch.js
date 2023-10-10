import { useEffect, useState } from "react";

const useFetch = (url, id) => {
  const [data, setData] = useState(null);

  const fetchData = async (id) => {
    try {
      const response = await fetch(url + id);
      const content = await response.json();
      setData(content);
    } catch (error) {
      console.log(error);
    } finally {
      console.log("Done");
    }
  };

  useEffect(() => {
    fetchData(id);
  }, [id]);

  return { data };
};

export default useFetch;
