const cards2 = Array.from(document.querySelectorAll(".card2"));
const cards2Container = document.querySelector("#cards2");

cards2Container.addEventListener("mousemove", (e) => {
  for (const card2 of cards2) {
    const rect = card2.getBoundingClientRect();
    x = e.clientX - rect.left;
    y = e.clientY - rect.top;

    card2.style.setProperty("--mouse-x", `${x}px`);
    card2.style.setProperty("--mouse-y", `${y}px`);
  }
});

/* Typed js */

var typed = new Typed('#element', {
  strings: ['Web Devloper', 'Programmer', 'Web Designer'],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true
});


VanillaTilt.init(document.querySelectorAll(".card,.card2"), {
  max: 25,
  speed: 400,
});

let snowflakesCount = 200; // Snowflake count, can be overwritten by attrs
let baseCss = ``;


// set global attributes
if (typeof SNOWFLAKES_COUNT !== 'undefined') {
  snowflakesCount = SNOWFLAKES_COUNT;
}
if (typeof BASE_CSS !== 'undefined') {
  baseCss = BASE_CSS;
}

let bodyHeightPx = null;
let pageHeightVh = null;

function setHeightVariables() {
  bodyHeightPx = document.body.offsetHeight;
  pageHeightVh = (100 * bodyHeightPx / window.innerHeight);
}

// Math
function randomInt(value = 100) {
  return Math.floor(Math.random() * value) + 1;
}

function randomIntRange(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}


// Load the rules and execute after the DOM loads
createSnow = function () {
  setHeightVariables();
  getSnowAttributes();
  spawnSnowCSS(snowflakesCount);
  spawnSnow(snowflakesCount);
};


// export createSnow function if using node or CommonJS environment
if (typeof module !== 'undefined') {
  module.exports = {
    createSnow,
    showSnow,
  };
}
else {
  window.onload = createSnow;
}

// Initialize ScrollReveal
ScrollReveal().reveal('.container', {
  delay: 500
});
// Initialize ScrollReveal for left element
ScrollReveal().reveal('.left', {
  distance: '250px',
  origin: 'left',
  delay: 500
});

// Initialize ScrollReveal for right element
ScrollReveal().reveal('.right', {
  distance: '250px',
  origin: 'right',
  delay: 500
});


// Animation Cards 
let animation = document.querySelectorAll(".animation");

function showScroll() {
  let scrollTop = document.documentElement.scrollTop;
  for (let i = 0; i < animation.length; i++) {
    let heightAnimation = animation[i].offsetHeight;
    if (heightAnimation - -450 < scrollTop) {
      animation[i].style.opacity = 1;
      animation[i].classList.add("showUp");
    }
  }
}

window.addEventListener("scroll", showScroll);

// hey popup
document.querySelector('.hey').classList.add('popup');

// ===== Back To Top ====  
let mybutton = document.getElementById("backtotopbutton");
window.onscroll = function(){
  scrollFunction()
};

function scrollFunction(){
  if(document.body.scrollTop > 400 || document.documentElement.scrollTop > 400)
  {
    mybutton.style.display = "block";
  }
   else{
      mybutton.style.display = "none";
     
      }
}

function scrolltoTopfunction(){
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

