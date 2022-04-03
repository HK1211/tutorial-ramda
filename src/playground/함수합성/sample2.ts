type SampleList = '자전거' | '자동차' | '비행기';
function sample2() {
  const 카테고리: SampleList[] = ['자전거', '자동차', '비행기'];

  function 빠름(catetory: string[], target: SampleList): SampleList {
    const index = catetory.findIndex(v => v === target);
    return 카테고리[index + 1];
  }

  console.log(빠름(카테고리, '자전거'));
  console.log(빠름(카테고리, '자동차'));
}

export default sample2;
