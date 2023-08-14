import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [request, setRequest] = useState([]);

  const requestApi = () => {
    axios.get('https://baconipsum.com/api/?type=meat-and-filter').then((response) => {
      setRequest([...request, ...response.data]);
      console.log(response.data);
    }).catch((error) => {
      console.log(error)
    })
  }

  useEffect(() => {
    requestApi();
  }, [])

  return (
    <>
      <div>
        {request.map((req, index) => {
          return(
            <p>{index}. {req}</p>
          )
        })}
      </div>
      <button onClick={requestApi}>Call New Api</button>
    </>
  );
}

export default App;
