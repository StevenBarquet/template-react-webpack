import React, { useState } from 'react';
import data from 'Others/data.json';

const App = () => {
  const [showList, setShowList] = useState(false);
  const handleclick = () => {
    setShowList(!showList);
    console.log('cambio showList', showList);
  };

  return (
    <React.Fragment>
      <button type="button" onClick={handleclick}>
        Mapear Loaders
      </button>
      {showList && data.loaders.map(elemento => <div>{elemento.name}</div>)}
    </React.Fragment>
  );
};

export default App;
