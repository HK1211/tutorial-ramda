import { Functor } from './type';

export default class Just<T> implements Functor<T> {
  value: T;

  constructor(value: T) {
    this.value = value;
  }

  map<U>(f: (x: T) => U) {
    return new Just<U>(f(this.value));
  }
}
