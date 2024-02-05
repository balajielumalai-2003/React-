import React, { useEffect, useState } from "react";

export default function Apicall() {
  const [abc, setabc] = useState([]);

  useEffect(() => {
    const data = fetch("https://jsonplaceholder.typicode.com/posts");
    const value = data.then((item) => item.json());
    value.then((apidata) => setabc(apidata));
  }, []);

  console.log(abc);
  return (
    <>
      {abc.map((item, i) => {
        return (
          <div className="box">
            <p>Title : {item.title}</p>
            <p>Body : {item.body}</p>
          </div>
        );
      })}
    </>
  );
}
