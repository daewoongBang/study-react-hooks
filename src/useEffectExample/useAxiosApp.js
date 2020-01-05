import React, { useEffect } from "react";
import useAxios from "./useAxios";

const App = () => {
  const { loading, data, error, refetch } = useAxios({
    url: "https://yts-proxy.now.sh/list_movies.json"
  });
  console.log(
    `loading: ${loading}\ndata: ${JSON.stringify(data)}\ndata: ${error}`
  );
  return (
    <div>
      <h1>{data && data.status}</h1>
      <h2>{loading ? "Loading..." : "Success!!"}</h2>
      <button onClick={refetch}>Refetch</button>
    </div>
  );
};

export default App;
