import * as R from 'ramda';

function propOr() {
  const profile = {
    name: '홍길동',
    amount: 100000,
  };

  const profileName = R.propOr('이름 없음', 'name');
  const profileBank = R.propOr('은행 없음', 'bank');

  const t1 = profileName(profile); // '홍길동'
  const t2 = profileBank(profile); // '은행 없음'

  console.log(t1);
  console.log(t2);
}

export default propOr;
