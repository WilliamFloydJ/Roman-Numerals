const romanNumeralGen = (num) => {
  let romanNum = "";
  if (num - 1000 >= 0) {
    romanNum = romanNum + "M";
  } else {
    while (num > 0) {
      if (num >= 500) {
        romanNum = romanNum + "D";
        num = num - 500;
      } else if (num >= 100) {
        romanNum = romanNum + "C";
        num = num - 100;
      } else if (num >= 50) {
        romanNum = romanNum + "L";
        num = num - 50;
      } else if (num >= 10) {
        romanNum = romanNum + "X";
        num = num - 10;
      } else if (num >= 5) {
        romanNum = romanNum + "V";
        num = num - 5;
      } else if (num >= 1) {
        romanNum = romanNum + "I";
        num = num - 1;
      }
    }
  }
  return romanNum;
};

console.log(romanNumeralGen(5));
