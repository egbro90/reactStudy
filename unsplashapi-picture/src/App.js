import React, { useEffect, useState } from "react";
import axios from "axios";


export default function App() {
  const [ state, setState ] = useState([]);

  const goApi = () => {
    axios
    .get('https://api.unsplash.com/photos/random', {
      params: {
        client_id: '14CIDnGmiurFbz2j41GTKNbO-R7dOfn6909YyXasEuw',
        count: 30,
      }
    })
    .then((res) => {
      console.log(res.data);
      setState(res.data);
    })
  }

  useEffect(() => {
    goApi();
  }, []);


  return (
    <>
      <div>
        api 서버가 에러 남.. 다른 api 찾아서 해야될듯
        {state.map((img) => (
          <img src={img.url} alt={img.author} />
        ))}
        
      </div>
    </>
  );
}

