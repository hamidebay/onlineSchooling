/*
1. Her cocuk programi acinca isim listesi ve toplam basari puani ile karsilasacak.
2. Ismi yoksa kendi ismini kaydedebilecek.
3. Carpim tablosu alani olusturulacak.
3.1. 10 tane islem ve yaninda cevap kutusu olacak.
4. Isim girildikten sonra otomatik olarak 10 soruluk bölüm acilacak.
5. Her oturum icin 10 saniye süresi vardir.
6. Süre bittiginde ya da bütün sorular cevaplandiginda program bitecek.
7. Bittikten sonra isim listesine geri dönecek.
8. Cocugun puani listede güncellenecek.
9. Isim ve puan listesi program kapandiktan sonrada muhafaza edilecek.
10. Program fullscreen olacak (optional)
11. Arka planda müzik calacak (opsional).
12. Baska bir program acildiginda süre durdurulacak. Tekrar oyuna dönüldügünde kaldigi yerden devam edecek.

*/
let number1;
let number2;
let timer = getInterval();
let students = [];
let registration = document.getElementById("registry");
getName();
registration.addEventListener("click", () => {
  setLocaleStorage();
  getName();
});

let play = document.getElementById("play");
play.addEventListener("click", () => {
  getPlayArea();
  getInterval();
});

let check = document.getElementById("check");
check.addEventListener("click", () => {
  let resultPoint = checkResult();
  updateStudentPoints(resultPoint);
  getName();
});

function clearPlayingArea() {
  document.getElementById("number-area").innerHTML = "";
}

function getInterval() {
  setTimeout(() => {
    checkResult();
    let resultPoint = checkResult();
    updateStudentPoints(resultPoint);
    getName();
    alert("Time out");
  }, 10000);
}
