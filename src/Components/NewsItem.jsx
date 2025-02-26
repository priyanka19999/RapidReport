import React from 'react'
import { useState } from 'react';
import image from "../assets/news.jpg"

function NewsItem({title, description , src , url}) {
// For Hovering Effect
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    setIsClicked(false);
  };

  const handleMouseDown = () => setIsClicked(true);
  const handleMouseUp = () => setIsClicked(false);

  const handleClick = () => {
    window.open(url, "_blank"); // Open news article in new tab
  };

  return (
   
<div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2 " 
    style= {{
        maxWidth:"345px" , 
        height: "420px" ,
        display: "flex",
        flexDirection: "column",
        cursor: "pointer",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        transform: isClicked
          ? "scale(0.95)"
          : isHovered
          ? "translateY(-5px)"
          : "none",
        boxShadow: isHovered ? "0 8px 16px rgba(0, 0, 0, 0.2)" : "none",
   }}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
   >

  <img src= {src ? src:image} 
  className="card-img-top" alt="..."
  style={{
    height: "200px", 
    width: "100%",
    objectFit : "cover" 
    }} />

  <div className="card-body" style={{flex:"1", display: "flex", flexDirection: "column" , justifyContent: "space-between",}}>
    <h5 className="card-title"style={{ minHeight: "50px" }}>{title.slice(0,50)}</h5>
    <p className="card-text" style={{ flexGrow: "1", minHeight: "60px" }}>{description ? description.slice(0, 90): "No description available."}</p>
    <a href={url} className="btn btn-primary">Read More</a>
  </div>
</div>
  ) 
}

export default NewsItem

