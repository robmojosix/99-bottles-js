export const verse = n => {
  return `verse ${n}`;
};

export const verses = (start = 99, end = 0) => {
  return Array.from(Array(start + 1).keys())
    .slice(end)
    .reverse()
    .map(verse);
};

export const song = () => verses();
