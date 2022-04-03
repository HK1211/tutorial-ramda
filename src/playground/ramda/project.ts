import * as R from 'ramda';

type TestProps = {
  date: string;
  A12435322: number;
  B49334893: number;
  C34294929: number;
};
function project() {
  const companyFinancialData: TestProps[] = [
    {
      date: '2018',
      A12435322: 2400000,
      B49334893: 13440000,
      C34294929: 5500000,
      // ...
      // 이런 식의 코드화된 데이터가 한 객체에 300개 이상 달려 있다고 가정하자
    },
    {
      date: '2017',
      A12435322: 1200000,
      B49334893: 10040000,
      C34294929: 3300000,
      // ...
    },
    {
      date: '2016',
      A12435322: 900000,
      B49334893: 9040000,
      C34294929: 1300000,
      // ...
    },
  ];

  const getData = R.project<TestProps, Pick<TestProps, 'date' | 'B49334893'>>(['date', 'B49334893'], companyFinancialData);
  const result = R.sort((a, b) => Number(a.date) - Number(b.date), getData);
  console.log(result);

  const getProfitData = R.project<TestProps, TestProps>(['date', 'B49334893']);
  const sortByYear = R.sort<TestProps>((a, b) => Number(a.date) - Number(b.date));
  const result2 = R.pipe(getProfitData, sortByYear)(companyFinancialData);
  console.log(result2);
}

export default project;
