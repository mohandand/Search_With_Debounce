import React, { useState } from 'react';
import './style.css';

export default function Search() {
  const [result, setResult] = useState([]);
  function doSearch(event) {
    let { value } = event.target;
    fetch(`https://demo.dataverse.org/api/search?q=${value}`)
      .then((res) => res.json())
      .then((json) => {
        set(json);
      });
  }

  function set(json) {
    let arry = [];
    arry.push(json.data.items);
    setResult([...result, arry]);
    console.log(result);
  }

  return (
    <div className="containerBox">
      <div className="container">
        <input type="input" placeholder="Enter Something" onChange={doSearch} />
        <button>Search</button>
        <div className="result">
          {result}
          {result.map((item, i) => {
            <div key={i}>{item.name}</div>;
          })}
        </div>
      </div>
    </div>
  );
}
