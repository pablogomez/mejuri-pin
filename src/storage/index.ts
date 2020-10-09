import { concat, remove, size, some } from "lodash";
import { ProductType } from "../types";

const ACTIONS = {
  UPDATE_TOTAL: "UPDATE_TOTAL",
};

let _fakeStorage: Array<ProductType> = [];

const togglePin = (product: ProductType) => {
  if (existInList(product)) {
    remove(_fakeStorage, product);
  } else {
    _fakeStorage = concat(_fakeStorage, product);
  }
  event.emit(ACTIONS.UPDATE_TOTAL);
};

const existInList = (product: ProductType) =>
  some(_fakeStorage, (p: ProductType) => p.id === product.id);

const getTotal = () => size(_fakeStorage);

const clearList = () => {
  _fakeStorage = [];
  event.emit(ACTIONS.UPDATE_TOTAL);
};
const event = {
  list: new Map(),
  on(eventType: string, eventAction: any) {
    this.list.has(eventType) || this.list.set(eventType, []);
    if (this.list.get(eventType)) this.list.get(eventType).push(eventAction);
    return this;
  },

  emit(eventType: string, ...args: any[]) {
    this.list.get(eventType) &&
      this.list.get(eventType).forEach((cb: any) => {
        cb(...args);
      });
  },
};

const getList = () => _fakeStorage;

export { togglePin, existInList, getList, clearList, getTotal, event, ACTIONS };
