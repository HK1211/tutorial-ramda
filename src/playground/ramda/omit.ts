import * as R from 'ramda';
import CustomObject, { comment, TestOmitType } from '../../utils/customObject';

function omit() {
  const objectIntence = new CustomObject(comment);
  const customOmit = objectIntence.omit<TestOmitType>('author', 'recommentId').object;
  const omitWithRamda: TestOmitType = R.omit(['author', 'recommentId'], comment);

  console.log(customOmit);
  console.log(omitWithRamda);
}

export default omit;
