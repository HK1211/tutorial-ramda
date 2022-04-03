import React, { ReactNode } from 'react';
import * as R from 'ramda';

function map() {
  // # t1 == t2
  const target = [1, 2, 3];
  const t1 = R.map<number, string>(x => x.toString());
  console.log(t1(target));
  const t2 = (array: number[]): string[] => {
    return array.map(item => {
      return item.toString();
    });
  };
  console.log(t2(target));
}

export default map;

function Text({ ...props }: TestProps) {
  return <div>{props.name}</div>;
}
type TestProps = {
  id: number;
  name: string;
};
export const target: TestProps[] = [
  { id: 1, name: `test11` },
  { id: 2, name: 'test22' },
];

export const testItem = (x: TestProps) => <Text key={x.id} {...x} />;
export const testList = R.map<TestProps, JSX.Element>(testItem);

export const testComponent2 = ({ list }: { list: TestProps[] }): JSX.Element => {
  return (
    <>
      {list.map(x => (
        <Text key={x.id} {...x} />
      ))}
    </>
  );
};

export const hash = () => {
  const response1: string[] = ['ramda', 'lodash'];
  const response2: string[] = ['functional', 'programming'];
  const withHashStr = (str: string) => `#${str}`;
  const hashStr = R.map(withHashStr);
  const ramdaLodash = hashStr(response1);
  const functionalProgramming = hashStr(response2);

  console.log(ramdaLodash);
  console.log(functionalProgramming);
};
