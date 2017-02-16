/* Randomizer + counter */
var poging = 1;
var word = words[Math.floor(Math.random()*words.length)];
var correctAnswer = word;
var right = document.getElementsByClassName('main');
for (var i = 0, len = right.length; i < len; i++) {
	right[i].value = word[0];
}
console.log(correctAnswer)


/* De losse letters */
var eersteletter = word.substring(0,1);
var tweedeletter = word.substring(1,2);
var derdeletter = word.substring(2,3);
var vierdeletter = word.substring(3,4);
var vijfdeletter = word.substring(4,5);

/* Correcte Letters */
var tweedelettercorrect = document.getElementById("1_2");
var derdelettercorrect = document.getElementById("1_3");
var vierdelettercorrect = document.getElementById("1_4");
var vijfdelettercorrect = document.getElementById("1_5");
var counter = 0;


window.onload = function(){
}

function check(){
	console.log(eersteletter);
		eerstelettergroen = document.getElementById(poging + '_1');
		tweedelettergroen = document.getElementById(poging + '_2');
		derdelettergroen = document.getElementById(poging + '_3');
		vierdelettergroen = document.getElementById(poging + '_4');
		vijfdelettergroen = document.getElementById(poging + '_5');

		tweedeletters = document.getElementById(poging + '_2').value;
		derdeletters = document.getElementById(poging + '_3').value;
		vierdeletters = document.getElementById(poging + '_4').value;
		vijfdeletters = document.getElementById(poging + '_5').value;
		console.log(tweedeletters);
		checkLetterById(tweedeletter, poging + '_2');
		checkLetterById(derdeletter, poging + '_3');
		checkLetterById(vierdeletter, poging + '_4');
		checkLetterById(vijfdeletter, poging + '_5');
		checkCorrectAnswer();
		poging ++;
		console.log(poging)
		
}

function checkLetterById(letterToCheck, LetterId) {

		var letterElement = document.getElementById(LetterId);
		if (letterElement.value == letterToCheck){
				letterElement.style.backgroundColor = "green";
		}
		else if (letterElement.value != letterToCheck){
				letterElement.style.backgroundColor = "red";
			}
		else{
				letterElement.style.backgroundColor = "white";
		}
}

function checkCorrectAnswer(){
	if (eerstelettergroen.style.backgroundColor == "green" && tweedelettergroen.style.backgroundColor == "green" && derdelettergroen.style.backgroundColor == "green" && vierdelettergroen.style.backgroundColor == "green" && vijfdelettergroen.style.backgroundColor == "green"){
		var audiogoed = new Audio('sounds/lingo_correct.mp3');
		audiogoed.play();
	}
	else{
		var audio = new Audio('sounds/lingo_correct_letter.mp3');
		audio.play();
	}
}