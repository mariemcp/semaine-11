$proposition = document.getElementById("proposition");
$bouton = document.getElementById("bouton");
$resultat = document.getElementById("resultat");
reponse = Math.ceil(Math.random() * 100)

function verifier() {
    if ($proposition.value < reponse) {
        $resultat.innerHTML = "Votre nombre est trop petit! Essayez encore !";
    }
    if ($proposition.value == reponse) {
        $resultat.innerHTML = "C'est le nombre exact !";
		
    }
    if ($proposition.value > reponse) {
        $resultat.innerHTML = " Votre nombre est trop grand ! Essayez encore !";
    }
}

$bouton.onclick = verifier;









