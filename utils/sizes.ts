export const getEmPx = () => {
  if (typeof window !== 'undefined') {
    const body = <HTMLBodyElement>document.querySelector('body');
    return parseFloat(getComputedStyle(body).fontSize);
  } else {
    return 16;
  }
};
