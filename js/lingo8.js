/* Randomizer + counter */
var poging = 1;
var word = words[Math.floor(Math.random()*words.length)];
var correctAnswer = word;
var goedebeginletter = document.getElementsByClassName('main');
for (var i = 0, len = goedebeginletter.length; i < len; i++) {
	goedebeginletter[i].value = word[0];
}
console.log(correctAnswer)


/* De losse letters */
var eersteletter = word.substring(0,1);
var tweedeletter = word.substring(1,2);
var derdeletter = word.substring(2,3);
var vierdeletter = word.substring(3,4);
var vijfdeletter = word.substring(4,5);
var zesdeletter = word.substring(5,6);
var zevendeletter = word.substring(6,7);
var achtsteletter = word.substring(6,7);

/* Correcte Letters */
var tweedelettercorrect = document.getElementById("1_2");
var derdelettercorrect = document.getElementById("1_3");
var vierdelettercorrect = document.getElementById("1_4");
var vijfdelettercorrect = document.getElementById("1_5");
var zesdelettercorrect = document.getElementById("1_6");
var zevendelettercorrect = document.getElementById("1_7");
var achtstelettercorrect = document.getElementById("1_8");
var counter = 0;

/* Check Button */
function check(){
		eerstelettergroen = document.getElementById(poging + '_1');
		tweedelettergroen = document.getElementById(poging + '_2');
		derdelettergroen = document.getElementById(poging + '_3');
		vierdelettergroen = document.getElementById(poging + '_4');
		vijfdelettergroen = document.getElementById(poging + '_5');
		zesdelettergroen = document.getElementById(poging + '_6');
		zevendelettergroen = document.getElementById(poging + '_7');
		achtstelettergroen = document.getElementById(poging + '_8');

		tweedeletters = document.getElementById(poging + '_2').value;
		derdeletters = document.getElementById(poging + '_3').value;
		vierdeletters = document.getElementById(poging + '_4').value;
		vijfdeletters = document.getElementById(poging + '_5').value;
		zesdeletters = document.getElementById(poging + '_6').value;
		zevendeletters = document.getElementById(poging + '_7').value;
		achtsteletters = document.getElementById(poging + '_8').value;
		checkLetterById(tweedeletter, poging + '_2');
		checkLetterById(derdeletter, poging + '_3');
		checkLetterById(vierdeletter, poging + '_4');
		checkLetterById(vijfdeletter, poging + '_5');
		checkLetterById(zesdeletter, poging + '_6');
		checkLetterById(zevendeletter, poging + '_7');
		checkLetterById(achtsteletter, poging + '_8');
		checkCorrectAnswer();
		poging ++;
		console.log(poging)
		
}

/* Reset Button */
function refresh(){
	location.reload();
}

/* Check letter */
function checkLetterById(letterToCheck, LetterId) {

		var letterElement = document.getElementById(LetterId);
		if (letterElement.value === letterToCheck){
				letterElement.style.backgroundColor = "green";
		}
		else if (letterElement.value != letterToCheck){
				letterElement.style.backgroundColor = "red";
			}
		else{
				letterElement.style.backgroundColor = "yellow";

		}
}

/* Good/Bad Sound */
function checkCorrectAnswer(){

	if (tweedelettergroen.style.backgroundColor === "green" 
		&& derdelettergroen.style.backgroundColor === "green"
		&& vierdelettergroen.style.backgroundColor === "green"
		&& vijfdelettergroen.style.backgroundColor === "green"
		&& zesdelettergroen.style.backgroundColor === "green"
		&& zevendelettergroen.style.backgroundColor === "green"
		&& achtstelettergroen.style.backgroundColor === "green"
		){
		document.getElementById("1_2").setAttribute("readonly", true);
		var audiogoed = new Audio('sounds/lingo_correct.mp3');
		audiogoed.play();
	}
	else{
		var audio = new Audio('sounds/lingo_correct_letter.mp3');
		audio.play();
	}
}