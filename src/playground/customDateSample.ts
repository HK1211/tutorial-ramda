import React from 'react';
import CustomDate from '../utils/customDate';

function customDateSample() {
  const s_dt = CustomDate.createDate('202008101030');
  const e_dt = CustomDate.createDate('202008101130');
  const min = CustomDate.calcPeriod(e_dt, s_dt, 'min');
  console.log(s_dt);
  console.log(e_dt);

  console.log(min);
}

export default customDateSample;
