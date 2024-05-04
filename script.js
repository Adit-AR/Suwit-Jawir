let a = [];
let hasil = "";
let info = document.querySelector(".info");
let imgComputer = document.querySelector(".img-computer");
let skorT = document.querySelector(".area-komputer h2");

// value
let getHasil = function (computer, player) {
  if (player == computer) {
    hasil = "SERI!";
  } else if (player == "gajah") {
    hasil = computer == "orang" ? "MENANG!" : "KALAH!";
  } else if (player == "orang") {
    hasil = computer == "gajah" ? "KALAH!" : "MENANG!";
  } else if (player == "semut") {
    hasil = computer == "orang" ? "KALAH" : "MENANG!";
  }

  let skor = function () {
    if (hasil == "MENANG!") {
      a.push(1);
    } else {
      return;
    }
    skorT.innerHTML = "skor kamu : " + a.length;
    return;
  };
  skor();
};

// spin
let img = ["gajah", "orang", "semut"];
let i = 0;
let spin = function () {
  let putar = setInterval(function () {
    imgComputer.setAttribute("src", "img/" + img[i++] + ".png");
    if (i == img.length) {
      i = 0;
    }
  }, 100);
  setTimeout(function () {
    clearInterval(putar);
  }, 1000);
  return;
};

// computer choise
let comp = "";
let compChoise = function () {
  let an = Math.random();
  if (an < 0.34) {
    comp = "gajah";
  } else if (an >= 0.34 && an < 0.67) {
    comp = "orang";
  } else {
    comp = "semut";
  }
  return;
};

//make event click

const getClick = function () {
  // computer choise
  compChoise();
  spin();
};

let getFinalHasil = function (p) {
  setTimeout(function () {
    imgComputer.setAttribute("src", "img/" + comp + ".png");
    getHasil(comp, p);
    info.innerHTML = "<h3>" + hasil + "</h3>";
  }, 1001);
};

// event click
let imgGajah = document.querySelector(".gajah");
imgGajah.addEventListener("click", function () {
  getClick();
  getFinalHasil("gajah");
});

let imgOrang = document.querySelector(".orang");
imgOrang.addEventListener("click", function () {
  getClick();
  getFinalHasil("orang");
});

let imgSemut = document.querySelector(".semut");
imgSemut.addEventListener("click", function () {
  getClick();
  getFinalHasil("semut");
});
