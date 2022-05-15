import CreatTest from './sdk/CreatTest';

declare global {
  interface Window {
    CreatTest: CreatTest;
  }
}
