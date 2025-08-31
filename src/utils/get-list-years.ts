export const getListYears = (start: number, end: number) => {
  return Array.from(
    { length: end - start + 1 },
    (_item, index) => start + index
  );
};
