export const storageGetItem = (key) => {
  if (typeof window === "undefined") return null;
  const strVal = localStorage.getItem(key);
  if (strVal === null) return null;
  const parsedVal = JSON.parse(strVal);
  return parsedVal;
};

export const storageSetItem = (key, value) => {
  if (typeof window === "undefined") return null;
  const strVal = JSON.stringify(value);
  localStorage.setItem(key, strVal);
};

export const storageDeleteItem = (key) => {
  if (typeof window === "undefined") return null;
  return localStorage.removeItem(key);
};
