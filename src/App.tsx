import React from 'react';
import { target, testList, testComponent2 } from './playground/ramda/map';

function App() {
  return (
    <>
      {testList(target)}
      {testComponent2({ list: target })}
    </>
  );
}

export default App;
