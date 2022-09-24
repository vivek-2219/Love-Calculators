// Program variables to target elements from the HTML file.
let person1 = document.querySelector('.person1');
let person2 = document.querySelector('.person2');
let button = document.querySelector('.button');
let output = document.querySelector('.output');
let image = document.querySelector('.image');
let loading = document.querySelector('.loading');
let loadingGif = document.querySelector('.loadingGif');
let reset = document.querySelector('.reset');
let backgroundImage = document.querySelector('.backgroundImage');

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

  // Calculating the love percentage.
  calculatingFunction(loveNumber, 1);
};

// Logic to display the percentage calculated by the Love Calculator.
button.addEventListener('click', () => {
  // image.style.opacity = 0.7;
  loadingGif.style.display = 'block';
  loading.style.display = 'flex';
  output.style.display = 'none';

  // Delaying for the calculation of love.
  setTimeout(() => {
    loadingGif.style.display = 'none';
    loading.style.display = 'none';
    output.style.display = 'flex';
    loveCalculator();
  }, 2000);
});

// Function to reduce the loveNumber to a 2-digit number.
function calculatingFunction(loveNum, multiplyer) {
  // Performing the calculaiton till a valid result comes out.
  for (let i = 0; i < multiplyer; i++) {
    let firstNum = '';
    let loveArray = [];
    for (let i = 0; i < loveNum.length / 2; i++) {
      loveArray.push(Number(loveNum[i]) + Number(loveNum[String(loveNum).length - i - 1]));
    };

    for (let i = 0; i < loveArray.length; i++) {
      firstNum += String(loveArray[i]);
    };

    // Increasing the value of multiplyer if result is not valid.
    if (String(firstNum).length !== 2) {
      multiplyer = multiplyer + 1;
    };

    // Increasing the value of love percentage when it is less than 50%.
    if (firstNum < 50) {
      firstNum = firstNum + 45;
    };

    loveNum = firstNum;
  };

  // Showing the output
  output.innerHTML = `Love for ${person2.value} is ${loveNum}%`;
};

// Logic for Reset button.
reset.addEventListener('click', () => {
  output.innerHTML = '';
  // image.style.opacity = 2;
  loadingGif.style.display = 'none';
  loading.style.display = 'none';
  output.style.display = 'none';
});



