//Utilisation de Math.random() pour obtenir un nombre décimal entre 0 et 1.
//Multiplié par 101 et utilisé Math.floor() pour arrondir vers le bas et obtenir un nombre entier entre 0 et 100.

//Récupération de l'élément de formulaire par son ID (numberForm).
//Ajout d'un écouteur d'événements pour l'événement de soumission (submit).

//Récupération de la valeur de l'input utilisateur par son ID (userInput).
//Utilisation de parseInt() pour convertir la valeur en un nombre entier.

const randomNumber = Math.floor(Math.random() * 101); 
const form = document.getElementById('numberForm');

form.addEventListener('submit', function (event) {
    event.preventDefault(); // Empêche la soumission par défaut du formulaire

    const userInput = parseInt(document.getElementById('userInput').value);

    // Vérifications et affichage d'indices
    if (userInput === randomNumber) {
        alert('Congratulations! You guessed the correct number.');
    } else {
        alert('Sorry, try again! Here is a hint: ' + (userInput < randomNumber ? 'Too low' : 'Too high'));
    }
});
