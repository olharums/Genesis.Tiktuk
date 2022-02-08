const shortenNumber = (number: number | undefined): string | number => {
  if (typeof number === "undefined") {
    return 0;
  }

  if (number / 10000 < 1) {
    return number;
  }

  const value = Math.round(number / 100) / 10;

  return `${value}K`;
};

export default shortenNumber;
