// Valeurs initiales
var computer = "";
var player = "";
var showResult = document.querySelector("#showResult p");

// Choix de l'ordinateur
function computerChoice() {
	var randomNumber = Math.floor(Math.random()*3 +1);
		if (randomNumber == 1) { 
			computer = "Pierre"; 
		}
		else if (randomNumber == 2) { 
			computer = "Feuille"; 
		}
		else { 
			computer = "Ciseaux"; 
		}
}

// Choix du joueur
function playerChoice() {
	player = document.querySelector("#player").value;
}

// Comparaison des valeurs
function compareValues(computer, player) {
	if ((computer == "Pierre" && player == "Ciseaux") || (computer == "Feuille" && player == "Pierre") || (computer == "Ciseaux" && player == "Feuille")) {
			result = "Tu perds !";
		}
		else if (computer == player) {
			result = "C'est un match nul !";
		}
		else {
			result = "Tu gagnes !";
		}
		showResult.innerHTML = "Le jeu de l'ordinateur est : <b>" + computer + "</b><br>" + "Ton jeu est : <b>" + player + "</b><br><br>" + result;
}

// Lancement des fonctions grace au bouton
function buttonAction() {
	computerChoice();
	playerChoice();
	compareValues(computer, player)
}

button.onclick = buttonAction;