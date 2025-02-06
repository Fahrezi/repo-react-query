export const getLocalStorage = <T>(key: string): T | null => {
  if (typeof window === 'undefined') return null;

  const item = localStorage.getItem(key);
  return item ? JSON.parse(item) : null;
}

export const setLocalStorage = <T>(key: string, value: T): void => {
  if (typeof window === 'undefined') return;

  localStorage.setItem(key, JSON.stringify(value));
};

export const removeLocalStorage = (key: string): void => {
  if (typeof window === 'undefined') return;
  
  localStorage.removeItem(key);
}