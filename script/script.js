document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("akan-form");
  const resultDiv = document.getElementById("result");

  if (!form || !resultDiv) {
    console.error("Form or result element not found in the DOM.");
    return;
  }

  const femaleNames = [
    "Adwoa",
    "Abena",
    "Akua",
    "Yaa",
    "Afua",
    "Ama",
    "Akosua",
  ];
  const maleNames = [
    "Kwasi",
    "Kwadwo",
    "Kwabena",
    "Kwaku",
    "Yaw",
    "Kofi",
    "Kwame",
  ];

  function calculateDayOfWeek(date) {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const century = Math.floor(year / 100);
    const yearInCentury = year % 100;

    const dayOfWeek = Math.floor(
      (century / 4 -
        2 * century -
        1 +
        (5 * yearInCentury) / 4 +
        (26 * (month + 1)) / 10 +
        day) %
        7
    );

    return (dayOfWeek + 7) % 7; // Normalize to 0-6
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const dayInput = document.getElementById("day").value;
    const monthInput = document.getElementById("month").value;
    const yearInput = document.getElementById("year").value;
    const genderInput = document.getElementById("gender").value;

    if (!dayInput || !monthInput || !yearInput || !genderInput) {
      resultDiv.textContent =
        "Please enter a valid date of birth and select your gender.";
      resultDiv.style.color = "red";
      return;
    }

    const dateOfBirth = new Date(`${yearInput}-${monthInput}-${dayInput}`);

    if (isNaN(dateOfBirth.getTime())) {
      resultDiv.textContent = "Invalid date. Please try again.";
      resultDiv.style.color = "red";
      return;
    }

    const dayOfWeek = calculateDayOfWeek(dateOfBirth);

    let akanName;
    if (genderInput === "male") {
      akanName = maleNames[dayOfWeek];
    } else if (genderInput === "female") {
      akanName = femaleNames[dayOfWeek];
    }

    resultDiv.textContent = `Your Akan name is ${akanName}!`;
    resultDiv.style.color = "blue";
  });
});
