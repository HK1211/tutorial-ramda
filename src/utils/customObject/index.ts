import { CommentType } from './index.type';

export const comment: CommentType = {
  author: 'test',
  body: 'comment...',
  recommentId: 'uuid-1234',
  test: 'test',
};
export type TestOmitType = Omit<CommentType, 'author' | 'recommentId'>;
export type TestPickType = Pick<CommentType, 'author' | 'recommentId'>;

export default class CustomObject<T> extends Object {
  object: T & { [k: string]: any };

  constructor(object: T) {
    super();
    this.object = object;
  }

  omit<R>(...args: string[]) {
    const result = Object.keys(this.object)
      .map(key => {
        return [key, this.object[key]];
      })
      .filter(item => {
        const find = args.find((arg: any) => {
          return arg === item[0];
        });
        return !find;
      })
      .reduce((p, n) => {
        return { ...p, [n[0]]: n[1] };
      }, {}) as R;
    return new CustomObject(result);
  }

  pick<R>(...args: string[]) {
    const result = Object.keys(this.object)
      .map(key => {
        return [key, this.object[key]];
      })
      .filter(item => {
        const find = args.find((arg: any) => {
          return arg === item[0];
        });
        return find;
      })
      .reduce((p, n) => {
        return { ...p, [n[0]]: n[1] };
      }, {}) as R;
    return new CustomObject(result);
  }
}

export function customObjectSample() {
  const target = new CustomObject(comment);
  const resultOmit = target.omit<TestOmitType>('author', 'recommentId');
  const resultPick = target.pick<TestPickType>('author', 'recommentId');
  console.log({ ...resultOmit.object });
  console.log(resultPick);
}
