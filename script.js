function operate(operator, nums) {
  nums.forEach((num, index) => {
    nums[index] = parseFloat(num);
  });

  console.log(operator, nums);

  switch (operator) {
    case "+":
      return nums[0] + nums[1];
    case "-":
      return nums[0] - nums[1];
    case "*":
      return nums[0] * nums[1];
    case "/":
      return (nums[0] / nums[1]).toFixed(2);
    default:
      return "Invalid operator";
  }
}

const nums = [];

const display = document.querySelector(".display");

const buttons = document.querySelectorAll("button");
let operator = "";

for (let button of buttons) {
  button.addEventListener("click", () => {
    display.textContent = "";
    if (button.classList.contains("operator")) {
      operator = button.textContent;
      display.textContent = operator;
    } else if (button.textContent === "=") {
      display.textContent = operate(operator, nums);
    } else if (button.textContent === ".") {
      display.textContent += button.textContent;
    } else {
      display.textContent += button.textContent;
      nums.push(button.textContent);
    }
  });
}
