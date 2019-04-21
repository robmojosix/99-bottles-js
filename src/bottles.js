const container = number => (number === 1 ? "bottle" : "bottles");

const quantity = number => (number === 0 ? "no more" : number.toString());

const pronoun = number => (number === 1 ? "it" : "one");

const action = number =>
  number === 0
    ? "Go to the store and buy some more"
    : `Take ${pronoun(number)} down and pass it around`;

const successor = number => (number === 0 ? 99 : number - 1);

const capitalise = string => string.charAt(0).toUpperCase() + string.slice(1);

export const verse = number => {
  return (
    `${capitalise(quantity(number))} ${container(
      number
    )} of beer on the wall, ` +
    `${quantity(number)} ${container(number)} of beer.\n` +
    `${action(number)}, ` +
    `${quantity(successor(number))} ${container(
      successor(number)
    )} of beer on the wall.\n`
  );
};

export const verses = (start = 99, end = 0) => {
  return Array.from(Array(start + 1).keys())
    .slice(end)
    .reverse()
    .map(verse)
    .join("\n");
};

export const song = () => verses();
