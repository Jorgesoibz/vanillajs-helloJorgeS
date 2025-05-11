import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let who = ['Mi perro', 'Mi abuela', 'La dependienta', 'Mi perro'];
let action = ['se comio', 'rompio', 'robo', 'canjeo'];
let what = ['mis deberes', 'mi mobil', 'el articulo','el vaso'];
let when = ['mientras conducia', 'cuando dormia', 'mientras estaba haciendo ejercicio', 'cuando comia', 'mientras rezaba'];

function generateExcuses(){
  let randomWho= who[Math.floor(Math.random()*who.length)];
  let randomAction= action[Math.floor(Math.random()*action.length)];
  let randomwhat= what[Math.floor(Math.random()*what.length)];
  let randomwhen= when[Math.floor(Math.random()*when.length)];

  return `${randomWho} ${randomAction} ${randomwhat} ${randomwhen}`;
}
document.getElementById('excuse').innerHTML= generateExcuses();
};
