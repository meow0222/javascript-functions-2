// pop up
const clickBtn = document.getElementById('pin');
const popupWrapper = document.getElementById('popup-wrapper');
const close = document.getElementById('close');

clickBtn.addEventListener('click', () => {
  popupWrapper.style.display = "block";
});

popupWrapper.addEventListener('click', e => {
  if (e.target.id === popupWrapper.id || e.target.id === close.id) {
    popupWrapper.style.display = 'none';
  }
});
  

// user input&output
function cafe() {
  let greeting = "Hello!";
  console.log(typeof(greeting)); 

  const now = new Date();
  console.log(typeof(now)); 

  const hour = now.getHours();

  if (hour >= 5 && hour < 12) {
      greeting = "Good Morning!";
  } else if (hour >= 12 && hour < 18) {
      greeting = "Good Afternoon!";
  } else {
      greeting = "Good Evening!";
  }

  while (true) { //Return Statement, While Loop, Input-Output
      let answer = window.prompt(`${greeting} Which do you like?\n\nCoffee\nBread\nEclair`);
  
      if (answer === "Coffee") {
          window.alert("You should take a look Coffee Cafe");
          return; 
      } else if (answer === "Bread") {
          window.alert("We recommend Bread Cafe");
          return; 
      } else if (answer === "Eclair") {
          window.alert("We recommend Eclair Cafe");
          return; 
      } else { 
          window.alert("Please type some dessert name");
      }
  }
};

cafe();

// visitor
function showVisitCount() {
  let visitCount = 0;

  const storedVisitCount = localStorage.getItem('visitCount');

  if (storedVisitCount) {
      visitCount = parseInt(storedVisitCount);
  }

  for (let i = 0; i < 1; i++) { //For Loop:
      visitCount++;
  }

  localStorage.setItem('visitCount', visitCount);

  const counterElement = document.getElementById('counter');
  counterElement.textContent = `You are the\n${visitCount} visitor.。`;
}

window.onload = showVisitCount;