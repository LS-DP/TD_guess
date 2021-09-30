let nbr_coup = 3;
let compteur = 0;
let nbr_min = 0;
let nbr_max = 9;
let nbr_choix = 6;

//let nbr_mystere = 2;

let nbr_mystere = Math.floor(Math.random() * (nbr_max - nbr_min) + nbr_min);

while (compteur < nbr_coup){
  //let n = prompt('Entrez un chiffre entre ${nbr_min} et ${nbr_max}', 'Ici');
  
  //n = parseInt(n);
  
  compteur++;
  
  if (nbr_choix == nbr_mystere){
    console.log('Bravo !');
    break;
    
  } else {
    if (compteur < nbr_coup){
      console.log('Réessayez');
      nbr_choix++;
      
    } else {
      console.log('Echec');
    }
  }
}