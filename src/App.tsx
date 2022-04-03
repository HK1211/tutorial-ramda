import React from 'react';
import map, { hash, target, testList, testComponent2 } from './playground/ramda/map';

function App() {
  map();
  hash();
  return (
    <>
      {testList(target)}
      {testComponent2({ list: target })}
    </>
  );
}

export default App;
