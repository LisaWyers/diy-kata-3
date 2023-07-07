const humanCatDogYears = (number) => {
  let catYears, dogYears;

  if (number === 0) {
    catYears = 0;
    dogYears = 0;
  } else if (humanYears === 1) {
    catYears = 15;
    dogYears = 15;
  } else {
    catYears = 24 + (humanYears + 4);
    dogYears += 5 + (humanYears + 4);
  }

  return [humanYears, catYears, dogYears];
};

module.exports = humanCatDogYears;
