export default {
  setStore (name, value) {
    if (!name) return;
    if (typeof value !== 'string') {
      value = JSON.stringify(value);
    }
    window.localStorage.setItem(name, value);
  },

  getStore(name) {
    if (!name) return;
    return window.localStorage.getItem(name);
  },

  removeStore(name) {
    if(!name) return
    return window.localStorage.removeItem(name);
  }


}