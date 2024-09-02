function calculate() {
  let height, weight;

  /* Prompt until valid height is entered */
  do {
    height = parseFloat(prompt("Enter your height in cm:"));
    if (isNaN(height) || height <= 0) {
      alert("Please enter a valid positive number for height.");
    }
  } while (isNaN(height) || height <= 0);

  /* Prompt until valid weight is entered */
  do {
    weight = parseFloat(prompt("Enter your weight in kg:"));
    if (isNaN(weight) || weight <= 0) {
      alert("Please enter a valid positive number for weight.");
    }
  } while (isNaN(weight) || weight <= 0);

  /* Calculate BMI */
  let bmi = calculateBmi(weight, height);

  /* Determine BMI Category */
  let category = determineBmiCategory(bmi);

  /* Display the result */
  alert(`Your BMI is: ${bmi.toFixed(2)}\nCategory: ${category}`);
}

function calculateBmi(weight, height) {
  return weight / Math.pow(height / 100, 2);
}

function determineBmiCategory(bmi) {
  if (bmi < 16) {
    return "Severely Underweight";
  } else if (bmi >= 16 && bmi <= 18.4) {
    return "Underweight";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    return "Normal Weight";
  } else if (bmi >= 25 && bmi <= 29.9) {
    return "Overweight";
  } else if (bmi >= 30 && bmi <= 34.9) {
    return "Moderately Obese";
  } else if (bmi >= 35 && bmi <= 39.9) {
    return "Severely Obese";
  } else {
    return "Morbidly Obese";
  }
}

/* Call the calculate function */
calculate();
