const button = document.getElementById("btn");
const form = document.getElementById("form");

let dayScore = document.getElementById("days");
let hourScore = document.getElementById("hours");

// console.log(inputForMonths, inputForYears);
button.addEventListener("click", (e) => {
  e.preventDefault();
  let inputForYears = document.getElementById("first-input").value;
  let inputForMonths = document.getElementById("second-input").value;
  if (inputForMonths < 13 && inputForYears !== "" && inputForYears < 90) {
    form.style.opacity = "0";
    form.style.display = "none";
    document.getElementById("score").style.display = "flex";
    document.getElementById("score").style.opacity = "100%";
    console.log(inputForMonths, inputForYears);

    dayScore.innerHTML = `عمرك بالأيام هو <span class="days">${
      inputForYears * 365 + inputForMonths * 30
    }</span> يوم`;
    hourScore.innerHTML = `عمرك بالساعات هو <span class= "hours">${
      (inputForYears * 365 + inputForMonths * 30) * 24
    } </span>ساعة`;
    setTimeout(() => {
      document.querySelector(".error").style.opacity = "0";
    }, 200);
  } else {
    document.querySelector(".error").style.display = "flex ";
    document.querySelector(
      ".error"
    ).innerHTML = `بذمتك ${inputForYears} ده سن واحد عاقل ؟`;
  }
});
