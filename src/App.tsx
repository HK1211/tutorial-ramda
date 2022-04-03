import React from 'react';
import Just from './playground/Functor/just';
import Maybe from './playground/Functor/maybe';
import cond from './playground/ramda/cond';

import identical from './playground/ramda/identical';
import { target, testComponent, testComponent2 } from './playground/ramda/map';
import project from './playground/ramda/project';
import sample2 from './playground/함수합성/sample2';

function App() {
  const getFirstLetter = (s: any) => s[0];
  const getStringLength = (s: any) => s.length;

  const foo: any = new Maybe('hi').map<string>(getFirstLetter).map(getStringLength);

  const bar: any = new Maybe('').map(getFirstLetter).map(getStringLength);

  console.log(foo.value); // Just { value: 1 }
  console.log(bar.value); // Nothing {}

  return (
    <>
      {testComponent(target)}
      {testComponent2({ list: target })}
    </>
  );
}

export default App;
