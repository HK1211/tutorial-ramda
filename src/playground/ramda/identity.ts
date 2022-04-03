import * as R from 'ramda';

function identity() {
  const 대상x = R.identity(1);
  const 대상y = R.identity(2);
  const 사상f = R.identity((x: number) => x + 1);

  console.log(사상f(대상x) === 대상y); // true
}

export default identity;
