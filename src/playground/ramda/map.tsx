import React, { ReactNode } from 'react';
import * as R from 'ramda';

function map() {
  const target = [1, 2, 3];
  const t = R.map<number, string>(x => x.toString());
  console.log(t(target));

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
  { id: 1, name: `test1` },
  { id: 2, name: 'test2' },
];
export const testComponent = R.map<TestProps, ReactNode>(x => <Text key={x.id} {...x} />);

export const testComponent2 = ({ list }: { list: TestProps[] }) => {
  return (
    <>
      {list.map(x => (
        <Text key={x.id} {...x} />
      ))}
    </>
  );
};
