import * as R from 'ramda';
import CustomObject, { comment, TestPickType } from '../../utils/customObject';

function pick() {
  const objectIntence = new CustomObject(comment);
  const customPick = objectIntence.pick<TestPickType>('author', 'recommentId').object;
  const pickWithRamda: TestPickType = R.pick(['author', 'recommentId'], comment);

  console.log(customPick);
  console.log(pickWithRamda);
}

export default pick;
