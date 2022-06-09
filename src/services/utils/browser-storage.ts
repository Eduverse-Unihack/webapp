export const getLocalStorage = (item: string) => {
  try {
    return JSON.parse(localStorage.getItem(item));
  } catch (err) {
    throw new Error('Something went wrong');
  }
};

export const setLocalStorage = (item: string, data: any) => {
  try {
    localStorage.setItem(item, JSON.stringify(data));
  } catch (err) {
    throw new Error('Something went wrong');
  }
};
