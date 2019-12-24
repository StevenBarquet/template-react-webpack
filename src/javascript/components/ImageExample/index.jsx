import React, { useState } from 'react';
import frame from 'Images/frame.png';
import { Link } from 'react-router-dom';

const ImageExample = () => {
  const [showImg, setShowImg] = useState(false);
  const handleclick = () => {
    setShowImg(!showImg);
    console.log('cambio showImg', showImg);
  };

  return (
    <React.Fragment>
      <Link to="/">
        <h3>To home --- "react-router"</h3>
      </Link>
      <a href="/">
        <h3>To home --- "href"</h3>
      </a>
      <button type="button" onClick={handleclick}>
        Mostrar imagen
      </button>
      {showImg && <img src={frame} alt="frameo" />}
    </React.Fragment>
  );
};

export default ImageExample;
