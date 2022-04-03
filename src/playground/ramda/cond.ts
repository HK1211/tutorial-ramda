import * as R from 'ramda';

function cond() {
  const getCreditMessage = R.cond([
    [R.equals('A'), R.always('상환 능력이 매우 우수함')],
    [R.equals('B'), R.always('상환 능력이 보통임')],
    [R.equals('C'), R.always('상환 능력이 떨어짐')],
    [R.T, R.always('신용 등급 산출되지 않음')],
  ]);

  const companyA = {
    grade: 'A',
  };

  const companyB = {
    grade: 'B',
  };

  const companyC = {
    grade: '',
  };

  console.log(getCreditMessage(companyA.grade)); // input 값이 A와 일치하면 조건문 배열 두 번째로 넣은 함수의 리턴 값을 반환한다: '상환 능력이 매우 우수함'
  console.log(getCreditMessage(companyB.grade)); // 상환 능력이 보통임
  console.log(getCreditMessage(companyC.grade));
  // 상위 조건문 배열에서 일치하는 값을 찾지 못하면
  // default 성격으로 마지막에 배치해 둔 값을 반환한다: '신용 등급 산출되지 않음'
}

export default cond;
