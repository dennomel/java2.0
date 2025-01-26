document.addEventListener,
  () => {
    const form = document.getElementById("akan-form");
    const resultDiv = document.getElementById("result");

    const femaleNames = [
      "Akosua",
      "Adwoa",
      "Abenna",
      "Akua",
      "Yaa",
      "Afua",
      "Ama",
    ];
    const maleNames = [
      "Kwasi",
      "Kwadwo",
      "Kwabena",
      "kwaku",
      "Yaw",
      "Kofi",
      "Kwames",
    ];

    const dayOfWeek = Math.floor(
      century / 4 -
        2 * century -
        1 +
        (5 * year) / 4 +
        (26 * (month + 1)) / 10 +
        day
    );

    return (dayOfWeek + 7) % 7;
  };

  form.addEventListener("submit",(event)=>
    {
    event.preventDefault();

    const dateOfBirthInput= document.getElementById("birthday").value;
    const genderInput=document.getElementById("gender").value;
  

if (!dateOfBirth || !genderInput){
    resultDiv.textContent="Pleae key in a valid birthday and select your gender";
    resultDiv.style.color= "red";
    return;
}

const dateOfBirth; new dateOfBirth(dateOfBirthInput);

if (isNaN(dateOfBirth.getTime())) {
    resultDiv.textContent= "Invalid date. Try again";
    resultDiv.style,color="red";
    return;
}
