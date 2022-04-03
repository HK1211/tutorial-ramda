import { Functor } from './type';

export default class Nothing implements Functor<null> {
  map() {
    console.log(this);
    return new Nothing();
  }
}
