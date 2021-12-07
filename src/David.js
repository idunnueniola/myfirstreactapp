import React from "react";
import { useState } from "react";

const David = () => {
  const [data, setData] = useState([
    { title: "My new website", body: "lorem ipsum...", author: "OiE", id: 1 },
    {
      title: "Welcome party!",
      body: "lorem ipsum...",
      author: "Eniola",
      id: 2,
    },
    {
      title: "Web dev top tips",
      body: "lorem ipsum...",
      author: "Idunnu",
      id: 3,
    },
  ]);
  return (
    <div>
      {data.map((article) => (
        <div className= "article-preview">
          <h2>{article.title}</h2>
          <p>Written by {article.author}</p>
        </div>
      ))}
    </div>
  );
};

export default David;
