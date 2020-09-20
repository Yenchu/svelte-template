import { writable } from 'svelte/store';

const toStr = value => JSON.stringify(value);
const toObj = JSON.parse;

const localStore = (key, initVal) => {
  let savedVal;
  if (process.browser) { // to avoid ReferenceError: localStorage is not defined
    const valStr = localStorage.getItem(key);
    if (valStr === null) {
      localStorage.setItem(key, toStr(initVal));
      savedVal = initVal;
    } else {
      savedVal = toObj(valStr);
    }
  } else {
    savedVal = initVal;
  }

  const { subscribe, set, update } = writable(savedVal);

  return {
    subscribe: subscribe,
    set: value => {
      localStorage.setItem(key, toStr(value));
      return set(value);
    },
    update
  };
};

export const authToken = localStore('auth-token', null);

export const localAuthToken = () => {
  const valStr = localStorage.getItem('auth-token');
  if (valStr !== null) {
    return toObj(valStr);
  }
  return null;
};
