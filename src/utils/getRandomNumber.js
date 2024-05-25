export const getRandomNumber = (min, max) => {
  const minimum = Math.ceil(min);
  const maximum = Math.floor(max);
  const randomNumber = Math.floor(
    Math.random() * (maximum - minimum + 1) + minimum
  );
  return randomNumber;
};
