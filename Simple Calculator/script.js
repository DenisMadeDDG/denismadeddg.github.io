let correct = null;

function calculate() {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  const operator = document.getElementById("operator").value;

  if (isNaN(num1) || isNaN(num2)) {
    alert("Please enter valid numbers.");
    return;
  }

  switch (operator) {
    case "+":
      correct = num1 + num2;
      break;
    case "-":
      correct = num1 - num2;
      break;
    case "*":
      correct = num1 * num2;
      break;
    case "/":
      if (num2 === 0) {
        alert("Cannot divide by zero!");
        return;
      }
      correct = num1 / num2;
      break;
  }

  document.getElementById("correctAnswer").innerText =
    `Correct answer: ${correct}`;
  document.getElementById("feedback").innerText = "";
}

function checkAnswer() {
  const user = parseFloat(document.getElementById("userAnswer").value);
  if (correct === null) {
    alert("Please calculate the correct answer first.");
    return;
  }

  const feedback = document.getElementById("feedback");
  if (Math.abs(user - correct) < 0.0001) {
    feedback.innerText = "✅ Correct!";
    feedback.style.color = "green";
  } else {
    feedback.innerText = `❌ Incorrect, the correct answer is ${correct}`;
    feedback.style.color = "red";
  }
}
