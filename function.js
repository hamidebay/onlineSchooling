let id = 1;
let studentName = "";

function getExercices() {
  return `
    <section><span class="numbers" id="${id}">${number1}</span>x<span class="numbers" id="${
    id + 1
  }">${number2}</span>=<input class="result" id="${
    id + 2
  }"></input></section> </div>`;
}

function getExerciseArea() {
  let excerciseList = "";
  for (let index = 0; index < 10; index++) {
    getRandomNumber();
    excerciseList += getExercices();
    id = id + 3;
  }
  return excerciseList;
}

function getPlayArea() {
  document.getElementById("number-area").innerHTML = getExerciseArea();
}

function setLocaleStorage() {
  let storageList = [];
  let sName = document.getElementById("students-name").value;
  storageList.push({ name: sName, point: 0 });
  let key = storageList[0].name;
  localStorage.setItem(key, JSON.stringify(storageList));
}
function getName() {
  let getStorageList = [];

  for (let index = 0; index < localStorage.length; index++) {
    let player = JSON.parse(localStorage.getItem(localStorage.key(index)));
    getStorageList.push(player);
  }
  console.log(getStorageList);
  let table = "";
  getStorageList
    .map((players) =>
      players.map(
        (player, index) =>
          (table += `<table><div id="${player.name}" class = "stud">${player.name}      ${player.point}  </div>`)
      )
    )
    .join("");
  document.getElementById("user-list").innerHTML = table;
}

function getRandomNumber() {
  number1 = Math.floor(Math.random() * 10) + 1;
  number2 = Math.floor(Math.random() * 10) + 1;
}

let index = 1;
function checkResult() {
  let correctAnswers = 0;
  let wrongAnswers = 0;
  for (index = 1; index < 31; index += 3) {
    let firstNumber = document.getElementById(index).innerHTML;
    let secondNumber = document.getElementById(index + 1).innerHTML;
    let resultNumber = document.getElementById(index + 2).value;
    let correctNumber = firstNumber * secondNumber;
    if (correctNumber == resultNumber) {
      correctAnswers++;
      document.getElementById(index + 2).style.backgroundColor = "green";
    } else {
      wrongAnswers++;
      document.getElementById(index + 2).style.backgroundColor = "red";
    }
  }
  let total = correctAnswers - wrongAnswers;
  return total;
}

function updateStudentPoints(pStudentsPoint) {
  let activePerson = []
    activePerson = JSON.parse(localStorage.getItem(studentName));
    console.log(activePerson)
    activePerson[0].point += pStudentsPoint;
    localStorage.setItem(studentName, JSON.stringify(activePerson));
}

let user = document.getElementsByClassName("stud");
document.addEventListener("click", (event) => {
  if (event.target.className == "stud") {
    document.getElementById("user").innerHTML = event.target.id;
    studentName = event.target.id;
  }
});
