const asyncLocalStorage = {
  setItem: async (key: string, value: any) => {
    Promise.resolve(localStorage.setItem(key, value)).catch((err) => {
      console.error(
        "Error caught in @paanSinghCoder/async-localstorage with setItem"
      );
    });
  },

  getItem: async (key: string) => {
    return Promise.resolve(localStorage.getItem(key)).catch((err) => {
      console.error(
        "Error caught in @paanSinghCoder/async-localstorage with getItem"
      );
    });
  },
};

export { asyncLocalStorage };
