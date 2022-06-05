import { useState, useEffect } from "react";
const useGetPokemons = (url) => {
      const [data, setData] = useState(null);
      useEffect(() => {
          fetch(url)
          .then((res) => res.json())
          .then((data) => setData(data.results))
          .catch((err) => console.log(err));
      }, [url]);
      return data;
};
export default useGetPokemons;