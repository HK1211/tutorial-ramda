import React from 'react';
import map, { hash, target, testList, testComponent2 } from './playground/ramda/map';
import CustomObject, { customObjectSample } from './utils/customObject';

function App() {
  customObjectSample();
  return (
    <>
      {testList(target)}
      {testComponent2({ list: target })}
    </>
  );
}

export default App;
