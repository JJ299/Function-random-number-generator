const one = prompt("Please enter the first number.");
const two = prompt("Please enter the second number.");
const ones = +one;
const twos =+two;
let randomizer;

const random = (numberone, numbertwo) => {
	if (numberone>numbertwo){
		randomizer = Math.floor(Math.random()*(numbertwo-numberone+1)) + numberone;
		return randomizer;
	} else {
		randomizer = Math.floor(Math.random()*(numberone-numbertwo+1)) + numbertwo;
		return randomizer;
	}
	
}

random(ones,twos);

const final = `<p>Your random number is: ${randomizer} </p>`;

document.querySelector(`main`).innerHTML = final;