import * as R from 'ramda';

function identical() {
  //   const t1 = R.identical(1, 1);
  //   console.log(t1);
  //   const t2 = R.identical(1, 2);
  //   console.log(t2);
  //   const t3 = R.identical('1', '1');
  //   console.log(t3);
  //   const t4 = R.identical('1', '2');
  //   console.log(t4);

  const t5 = R.identical(1);
  console.log(t5(1));
  console.log(t5(2));
}
export default identical;
