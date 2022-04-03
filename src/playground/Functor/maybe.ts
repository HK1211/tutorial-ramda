import Just from './just';
import Nothing from './nothing';

export default class Maybe<T> {
  value: Just<T> | Nothing;

  constructor(value?: T) {
    if (value) {
      this.value = new Just<T>(value);
    } else {
      this.value = new Nothing();
    }
  }

  map<U>(f: (x: T | null) => U) {
    if (this.value instanceof Just) {
      return this.value.map<U>(f);
    }
    return new Nothing();
  }
}
