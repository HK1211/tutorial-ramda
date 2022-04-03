function sample1() {
  // 명령형 프로그래밍
  const foo = 1;
  console.log(foo + 2);

  // 함수형 프로그래밍
  const foo2 = (() => {
    return 1;
  })();
  const add2 = (x: number): number => x + 2;

  add2(foo2);
}

export default sample1;
