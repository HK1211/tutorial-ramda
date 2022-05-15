import * as R from 'ramda';

export function trace(tag: string) {
  return (x: any) => {
    console.log(tag, x);
    return x;
  };
}

export default trace;
