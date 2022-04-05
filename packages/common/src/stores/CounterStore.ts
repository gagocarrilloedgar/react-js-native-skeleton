import { makeObservable, observable } from "mobx";
import { createContext } from "react";

class CounterStore {
  @observable count = 0;
  constructor() {
    makeObservable(this);
  }
}

export const CounterStoreContext = createContext(new CounterStore());
