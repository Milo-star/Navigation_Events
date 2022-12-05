// Changer l'ordre
const liste = document.querySelector('ol');
const a = liste.children[0];
const b = liste.children[4];
liste.insertBefore(b, a);

//moving H2
const main = document.querySelector('main')
const section_2 = main.children[1];
const section_3 = main.children[2];
const titre_1 = section_2.children[0];
const titre_2 = section_3.children[0];
section_3.appendChild(titre_1);
section_2.appendChild(titre_2);

// Supprimer 3 eme section
const suppresion = document.querySelector('footer') 
document.body.removeChild(suppresion)