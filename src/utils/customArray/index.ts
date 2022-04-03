export type TestArrayItemType = {
  id: number;
  name: string;
};
export default class CustomArray<T> extends Array {
  array: T[];

  constructor(array: T[]) {
    super();
    this.array = array;
  }
}
