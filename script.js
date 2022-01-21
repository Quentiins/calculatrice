// Variable display qui correspond à l'endroit où sera affiché les calculs et le résultat.
let display = document.getElementById('display');
// Variable buttons , qui correspond à tous les chiffres et les operators sous forme de tableau.
let buttons = Array.from(document.getElementsByClassName('button'));

// Applique le click sur tous les boutons de notre tableau , donc les chiffres et les operators.
// Le e sert de callback pour continuer l'exécution du code après l'achèvement d'une opération.
buttons.map( button => {
  button.addEventListener('click', (e) => {
    // L'instruction switch évalue une expression et selon le résultat obtenu et le cas associé, exécute les instructions correspondantes.
      switch(e.target.innerText){
        case 'AC':
          display.innerText = ''; // Efface la chaine de caractère
          // Le break pour mettre fin et éviter que le AC reste dans le display 
          break;
        // Affiche le résultat dans le display
        case '=':
          try{
            display.innerText = eval(display.innerText);
          // Si on tape n'importe quoi , le message " Erreur !" s'affichera dans le display. ( exemple : si vous faites -+/ et ensuite égal)
          } catch {
            display.innerText = 'Erreur !';
          }
          break;
          // Par défaut , le texte des boutons (chiffres et operators) sera affiché dans le display.
          default:
              display.innerText += e.target.innerText;
      }
  });
});