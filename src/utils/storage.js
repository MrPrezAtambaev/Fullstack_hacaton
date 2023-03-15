export const storageGetItem = (key) => {
  if (typeof window === "undefined") return null;
  return localStorage.getItem(key);
};

export const storageSetItem = (key, value) => {
  if (typeof window === "undefined") return null;
  return localStorage.setItem(key, value);
};

export const storageDeleteItem = (key) => {
  if (typeof window === "undefined") return null;
  return localStorage.removeItem(key);
};
