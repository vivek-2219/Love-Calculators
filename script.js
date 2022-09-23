// Program variables to target elements from the HTML file.
let person1 = document.querySelector('.person1');
let person2 = document.querySelector('.person2');
let button = document.querySelector('.button');

// Love calculating function.
function loveCalculator() {
  // Program varibales to manipulate calculations.
  let loveString = person1.value + person2.value;
  let loveNumber = '';
  let charCount = 0;

  // Loops for getting the no. of times a particular character is coming in the loveString.
  for (let i = 0; i < loveString.length; i++) {
    for (let j = 0; j < loveString.length; j++) {
      if (loveString[i] === loveString[j]) {
        charCount = charCount + 1;
      };
    };

    // Reseting the program variables to their initial values for further analysis.
    loveNumber = loveNumber + charCount;
    charCount = 0;
  };
  console.log(loveNumber);

  // Calculating the love percentage.
  calculatingFunction(loveNumber, loveNumber);
};

// Logic to display the percentage calculated by the Love Calculator.
button.addEventListener('click', () => {
  loveCalculator();
});

// Function to reduce the loveNumber to a 2-digit number.
function calculatingFunction(loveNum, multiplyer) {
  for (let i = 0; i < multiplyer; i++) {
    let firstNum = '';
    let loveArray = [];
    for (let i = 0; i < loveNum.length / 2; i++) {
      loveArray.push(Number(loveNum[i]) + Number(loveNum[String(loveNum).length - i - 1]));
    };

    for (let i = 0; i < loveArray.length; i++) {
      firstNum += String(loveArray[i]);
    };
    loveNum = firstNum;
  };
  console.log(loveNum);
  return loveNum;
};


