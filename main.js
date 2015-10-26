document.addEventListener("DOMContentLoaded", function(event) {
   console.log("DOM fully loaded and parsed");


// Vars //

var numbers = document.querySelectorAll('.numbers');
for(i=0; i < numbers.length; ++i){
  numbers[i].addEventListener('click', clickThing);
}
var ops = document.querySelectorAll('.ops');
for(i=0; i < ops.length; ++i){
  ops[i].addEventListener('click', clickThing);
}
var equal = document.getElementById('equals').addEventListener('click', eq, clickThing)
var clear = document.getElementById('clear').addEventListener('click', clear, clickThing)
//FUNCTIONS//

function clickThing(event) {
  // console.log(event.target.value)
  value = event.target.value;
  document.getElementById('numInput').innerHTML += value;
}

function eq(){
event.target.value === document.getElementById('equals')
x = eval(document.getElementById('numInput').innerHTML)
console.log (x)
document.getElementById('numInput').innerHTML = x

}

function clear(){
  event.target.value === document.getElementById('clear')
  document.getElementById('numInput').innerHTML = document.getElementById('clear').value
}


});
