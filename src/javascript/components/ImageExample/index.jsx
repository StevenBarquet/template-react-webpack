import React, { useState } from 'react';
import frame from 'Images/frame.png';

const ImageExample = () => {
  const [showImg, setShowImg] = useState(false);
  const handleclick = () => {
    setShowImg(!showImg);
    console.log('cambio showImg', showImg);
  };

  return (
    <React.Fragment>
      <button type="button" onClick={handleclick}>
        Mostrar imagen
      </button>
      {showImg && <img src={frame} alt="frameo" />}
    </React.Fragment>
  );
};

export default ImageExample;
