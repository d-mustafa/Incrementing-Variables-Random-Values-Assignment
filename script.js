// INCREMENTING VARIABLES & RANDOM VALUES
let counter = 0;

// 1. Saving elements as variables cleans up your code.
// numbers
let displayE1 = document.getElementById("display");
let plus1Btn = document.getElementById("plus1");
let plus10Btn = document.getElementById("plus10");
let plus50Btn = document.getElementById("plus50");
let minus1Btn = document.getElementById("minus1");
let minus10Btn = document.getElementById("minus10");
let minus50Btn = document.getElementById("minus50");

// strings
var stringInEl = document.getElementById("strIn");
var stringOutEl = document.getElementById("strOut");

// 2. Incrementing. The ++, --, +=, and -= operators are used to update variables without losing what was there before
plus1Btn.addEventListener("click", add1);
plus10Btn.addEventListener("click", add10);
plus50Btn.addEventListener("click", add50);
minus1Btn.addEventListener("click", sub1);
minus10Btn.addEventListener("click", sub10);
minus50Btn.addEventListener("click", sub50);

function add1() {
  counter++;
  displayE1.innerHTML = counter;
}

function add10() {
  counter += 10;
  displayE1.innerHTML = counter;
}

function add50() {
  counter += 50;
  displayE1.innerHTML = counter;
}

function sub1() {
  counter--;
  displayE1.innerHTML = counter;
}

function sub10() {
  counter -= 10;
  displayE1.innerHTML = counter;
}

function sub50() {
  counter -= 50;
  displayE1.innerHTML = counter;
}

// 3. The += operator also works to update strings. Also, the "change" event can remove the need for buttons!
stringInEl.addEventListener("change", updateStory);
var story = "Once upon a time, ";

function updateStory() {
  var newWord = stringInEl.value;

  stringInEl.value = ""; // clears the input

  story += newWord + " ";

  stringOutEl.innerHTML = story;
}

// 4. Math.random() is used to bring RNG (random number generator) to your applications.
let rand1Btn = document.getElementById("rand1");
let rand2Btn = document.getElementById("rand2");
let rand3Btn = document.getElementById("rand3");
let rand1OutEl = document.getElementById("rand1-out");
let rand2OutEl = document.getElementById("rand2-out");
let rand3OutEl = document.getElementById("rand3-out");

rand1Btn.addEventListener("click", showRand1);
rand2Btn.addEventListener("click", showRand2);
rand3Btn.addEventListener("click", showRand3);

function showRand1() {
  let rand = Math.random();
  rand = rand.toFixed(3);

  rand1OutEl.innerHTML = rand;
}

function showRand2() {
  let rand = Math.random() * 101;
  rand = rand.toFixed(0);

  rand2OutEl.innerHTML = rand;
}

function showRand3() {
  let rand = Math.random() * 11;
  rand -= 5;
  rand = rand.toFixed(0);

  rand3OutEl.innerHTML = rand;
}

let rand4Btn = document.getElementById("rand4");
let rand4OutEl = document.getElementById("rand4-out");
rand4Btn.addEventListener("click", showRand4);

function showRand4() {
  // Input
  var rand4Input1 = +document.getElementById("rand-in1").value;
  var rand4Input2 = +document.getElementById("rand-in2").value;

  // Process
  let rand = Math.floor(Math.random() * rand4Input2 + rand4Input1);

  // Output
  rand4OutEl.innerHTML = rand;
}

// 5. Bottom Buttons (Text size, Background Color, Refresh Page)

randSize = document.getElementById("random-size");
randColor = document.getElementById("random-rgb");
resetSite = document.getElementById("reset");

randSize.addEventListener("click", randomFontSize);
randColor.addEventListener("click", randomColor);
resetSite.addEventListener("click", fullReset);

function randomFontSize() {
  // Process
  rand = Math.floor(Math.random() * 21 + 5);

  bodyEl = document.getElementById("the-body");
  // Output
  bodyEl.style.fontSize = `${rand}px`;
}

function randomColor() {
  // Process
  r = Math.floor(Math.random() * 256);
  g = Math.floor(Math.random() * 256);
  b = Math.floor(Math.random() * 256);

  htmlEl = document.getElementById("HTML");
  // Output
  htmlEl.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}

function fullReset() {
  // Process
  bodyEl = document.getElementById("the-body");
  htmlEl = document.getElementById("HTML");

  // Output
  counter = 0;
  displayE1.innerHTML = counter;
  bodyEl.style.fontSize = `initial`;
  htmlEl.style.backgroundColor = `#9ae4c8`;
  story = "Once upon a time, ";
  stringOutEl.innerHTML = story;
  rand1OutEl.innerHTML = `----------`;
  rand2OutEl.innerHTML = `----------`;
  rand3OutEl.innerHTML = `----------`;
  rand4OutEl.innerHTML = `----------`;
}
