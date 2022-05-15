import React from 'react';
import * as ReactDOMClient from 'react-dom/client';

export default class CreatTest {
  static createTest(testArg: string) {
    const testTarget = document.getElementById('test');
    // Create a root.
    const resultTarget = ReactDOMClient.createRoot(testTarget as Element);
    resultTarget.render(
      <React.StrictMode>
        <div>테스트성공_{testArg}</div>
      </React.StrictMode>,
    );
  }
}
