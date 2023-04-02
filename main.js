const p = console.log;

let mySkillsNumber = 3;
let color;
let myFButton = document.getElementsByTagName('button');
let myMainDiv = document.getElementById('main-div');
let myP = document.getElementById('button-content');

Window.onload = function () {
  myFButton[0].focus();
}

myFButton[0].addEventListener('click',function () {
  parseInt(randomNumber(5)) === 1 ? this.style.cssText = 'font-weight: bold; color: #ff9067; border: #ff9067 solid 2px' : parseInt(randomNumber(5)) === 2 ? this.style.cssText = 'font-weight: bold; color: #24d05a; border: #24d05a solid 2px' : parseInt(randomNumber(5)) === 3 ? this.style.cssText = 'font-weight: bold; color: #ff5e9e; border: #ff5e9e solid 2px' : parseInt(randomNumber(5)) === 4 ? this.style.cssText = 'font-weight: bold; color: #2bb1ff; border: #2bb1ff solid 2px' : this.style.cssText = 'font-weight: bold; color: #e9c257; border: #e9c257 solid 2px';
  myP.innerHTML = ``;
  myP.innerHTML = `Have a Great Day 👋 ~~ !`;
  myP.style.cssText = `text-align: center; font-size: 40px`;
});
myFButton[1].addEventListener('click',function () {
  parseInt(randomNumber(5)) === 1 ? this.style.cssText = 'font-weight: bold; color: #ff9067; border: #ff9067 solid 2px' : parseInt(randomNumber(5)) === 2 ? this.style.cssText = 'font-weight: bold; color: #24d05a; border: #24d05a solid 2px' : parseInt(randomNumber(5)) === 3 ? this.style.cssText = 'font-weight: bold; color: #ff5e9e; border: #ff5e9e solid 2px' : parseInt(randomNumber(5)) === 4 ? this.style.cssText = 'font-weight: bold; color: #2bb1ff; border: #2bb1ff solid 2px' : this.style.cssText = 'font-weight: bold; color: #e9c257; border: #e9c257 solid 2px';
  myP.innerHTML = ``;
  myP.innerHTML = `For Present. HTML, CSS, JS & C lang.`;
  myP.style.cssText = `text-align: left; font-size: 1rem;`;
});
myFButton[2].addEventListener('click',function () {
  parseInt(randomNumber(5)) === 1 ? this.style.cssText = 'font-weight: bold; color: #ff9067; border: #ff9067 solid 2px' : parseInt(randomNumber(5)) === 2 ? this.style.cssText = 'font-weight: bold; color: #24d05a; border: #24d05a solid 2px' : parseInt(randomNumber(5)) === 3 ? this.style.cssText = 'font-weight: bold; color: #ff5e9e; border: #ff5e9e solid 2px' : parseInt(randomNumber(5)) === 4 ? this.style.cssText = 'font-weight: bold; color: #2bb1ff; border: #2bb1ff solid 2px' : this.style.cssText = 'font-weight: bold; color: #e9c257; border: #e9c257 solid 2px';
  myP.innerHTML = ``;
  myP.innerHTML = `Coming Soon...`;
});

for(let i = 0; i < myFButton.length; i++) {
  myFButton[i].addEventListener('blur', function () {
    this.style.cssText = 'font-weight: bold; color: #8b8b8b; border: #8b8b8b solid 2px';
  })
}


function randomNumber(num) {
  return Math.random() * num;
}

const numStars = 100; // Adjust the number of stars displayed
const starContainer = document.querySelector('.background');

// a function generates a random position for the stars
function getRandomPosition() {
  const x = (window.innerWidth - 20) * Math.random();
  const y = (window.innerHeight - 20) * Math.random();
  return [y, x];
}

// Create and position the stars
for ( let i = 0; i < numStars; i++) {
  let star = document.createElement('div');
  star.classList.add('star');
  starContainer.appendChild(star);

  const xy = getRandomPosition();
  star.style.cssText = `animation-name: twinkle; position: absolute; top: ${xy[0]}px; left: ${xy[1]}px; background-color: white; width: 2px; height: 2px; border-raduis: 50%; box-shadow: -4px 2px 147px 110px rgba(0,0,0,0.47); -webkit-box-shadow: -4px 2px 147px 110px rgba(0,0,0,0.47); -moz-box-shadow: -4px 2px 147px 110px rgba(0,0,0,0.47);`;
}
