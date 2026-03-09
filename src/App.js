import React, { useEffect } from "react";
import TopMenu from "./components/TopMenu";
import useFetch from "./hooks/useFetch";
import { urlApiProducts } from "./utils/constants";

function App() {
  const result = useFetch(urlApiProducts);
  console.log(result);

  return (
    <div>
      <TopMenu />
      <p>...</p>
    </div>
  );
}

export default App;
