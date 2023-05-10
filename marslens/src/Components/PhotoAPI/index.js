import React from "react";
import { useState, useEffect } from "react";

function Photo(props) {
  const [imageUrl, setImageUrl] = useState({});


  useEffect(() => {
     fetch(
      `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=nE1H9YXrR3lc9x3u1cZ2ogsN2uZRdviCdPtHw2s8`
    )
      .then((response) => response.json())
      .then((data) => setImageUrl(data));
  }, []);
    
  return (
    <div>
      {imageUrl.photos && imageUrl.photos.length > 0 && (
        <img
          src={imageUrl.photos[props.currentIndex].img_src}
          alt="mars"
          onClick={props.onClick}
        />
      )}
    </div>
  );
}

export default Photo;
