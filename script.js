const container = document.querySelector(".container");
const parent = document.querySelector(".parent");
const cells = document.querySelectorAll(".cell");
const lines = document.querySelectorAll(".line");
const imgs = document.querySelectorAll(".img");
const animals = Array.from(document.querySelectorAll(".cell.animal"));
const imgsAnimals = animals.map((el) => el.firstElementChild);
const names = document.querySelectorAll(".name");
const namesAnimals = animals.map(
  (animal) => animal.getElementsByTagName("span")[0]
);
const sanskritNAmes = document.querySelectorAll(".sanskrit");
const btnBack = document.querySelector(".btn-back-home");
const btnCredit = document.querySelector(".btn-cre");
const footer = document.querySelector("footer");
const credits = document.querySelector(".credits");
const moon = document.querySelector(".moon");
let active;
///

///
cells.forEach((cell, i, arr) => {
  cell.addEventListener("click", () => {
    //remove lines
    lines.forEach((line) => line.classList.add("inactive"));
    //remove other cells
    arr.forEach((cell) => cell.classList.add("inactive"));
    //remove grid
    parent.classList.remove("grid");
    parent.classList.add("no-grid");
    //enlarge animals name
    namesAnimals.forEach((n) => {
      n.classList.remove("animal");
    });
    //enlarge img
    imgsAnimals.forEach((img) => {
      img.classList.remove("small");
    });
    //add sanskrit names
    sanskritNAmes.forEach((n) => n.classList.remove("inactive"));

    //show cell
    cell.classList.remove("inactive");
    cell.classList.add("active");
    //no margin
    cell.style.margin = 0;
    cell.style.marginTop = "50px";
    //text
    const text = cell.querySelector(".text");
    text.classList.remove("inactive");
    //btnBack
    btnBack.classList.add("display");
    //active
    active = document.querySelector(".active");
    console.log(active);
    //moon
    moon.classList.add("reversed");
  });
});

//return to the homepage
//ESC
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    if (parent.classList.contains("no-grid")) backHome();
  }
});

//BUTTON(
btnBack.addEventListener("click", () => backHome());

function backHome() {
  if (parent.classList.contains("inactive")) {
    //parent inactive
    parent.classList.add("grid");
    parent.classList.remove("inactive");
    //creditsv
    credits.classList.add("hidden");
    //togliere footer
    footer.classList.remove("inactive");
    //btn
    btnBack.classList.remove("display");
  } else {
    //margin
    active.style.removeProperty("margin");
    const text = active.querySelector(".text");
    active.classList.remove("active");
    //reset animals name
    namesAnimals.forEach((n) => {
      n.classList.add("animal");
    });
    //reset animals img
    imgsAnimals.forEach((img) => {
      img.classList.add("small");
    });
    //remove sanskrit names
    sanskritNAmes.forEach((n) => n.classList.add("inactive"));
    //no text
    text.classList.add("inactive");
    //reset lines
    lines.forEach((line) => line.classList.remove("inactive"));
    //remove other cells
    cells.forEach((cell) => cell.classList.remove("inactive"));
    //remove grid
    parent.classList.remove("no-grid");
    parent.classList.add("grid");
    //remove btnBack
    btnBack.classList.remove("display");
    //moon
    moon.classList.remove("reversed");
  }
}

//CREDIT
btnCredit.addEventListener("click", () => {
  //parent inactive
  parent.classList.remove("grid");
  parent.classList.add("inactive");
  //creditsv
  credits.classList.remove("hidden");

  //togliere footer
  footer.classList.add("inactive");
  //btn
  btnBack.classList.add("display");
});
