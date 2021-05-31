// Fonctionnalité 1 + Fonctionnalité 1-bis :
let compteur = 0
let eFooter = document.querySelector("footer");
eFooter.addEventListener('click', function(){
    compteur++
    console.log('clic numero' + compteur)
})

// Fonctionnalité 2 :
let HamburgerMenu = document.getElementsByClassName("navbar-toggler")[0];
let navbarHeader = document.getElementById("navbarHeader");

HamburgerMenu.addEventListener('click', function(){
    navbarHeader.classList.toggle("collapse")
})

// Fonctionnalité 3 :
let firstCard = document.getElementsByClassName("card")[0]
let editFirstCard = firstCard.getElementsByTagName("button")[1]

editFirstCard.addEventListener('click', function(){
    firstCard.getElementsByClassName("card-text")[0].style.color = 'red';
})

// Fonctionnalité 4 :
let secondCard = document.getElementsByClassName("card")[1]
let editSecondCard = secondCard.getElementsByTagName("button")[1]

editSecondCard.addEventListener('click', function(){
    if (secondCard.getElementsByClassName("card-text")[0].style.color === 'green'){
        secondCard.getElementsByClassName("card-text")[0].style.color = 'black' ;
        }
    else  {secondCard.getElementsByClassName("card-text")[0].style.color = 'green'}
})

// Fonctionnalité 5 :
let navBar = document.getElementsByTagName("header")[0]
let bootstrap = document.getElementsByTagName("link")[0]

navBar.addEventListener('dblclick', function(){
    if (bootstrap.href === "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css") {
        bootstrap.href = '';
    }
    else {
        bootstrap.href = "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
    }
});

// Fonctionnalité 6 :
let cards = document.getElementsByClassName("card")
for (let i = 0; i < cards.length; i++){
    let cardN = cards[i];
    let viewCardN = cardN.getElementsByTagName("button")[0];
    
    viewCardN.addEventListener('mouseover', function(){
        cardN.getElementsByClassName("card-text")[0].classList.toggle("d-none");
        cardN.getElementsByClassName("card-img-top")[0].classList.toggle("w-25");
    });
}

// Fonctionnalité 7 :
let cardsTab = document.getElementsByClassName("row")[1];
let butonnFlecheD = document.getElementsByClassName("jumbotron")[0].getElementsByTagName("a")[1];

butonnFlecheD.addEventListener('click', function(){
    cardsTab.insertBefore(cardsTab.lastElementChild, cardsTab.firstElementChild);
})   

// Fonctionnalité 8 :
let butonnFlecheG = document.getElementsByClassName("jumbotron")[0].getElementsByTagName("a")[0];

butonnFlecheG.addEventListener('click', function(event){
    event.preventDefault()
    cardsTab.insertBefore(cardsTab.firstElementChild, cardsTab.lastElementChild.nextSibling);
})

// Fonctionnalité 9 :
let logo = document.getElementsByClassName('navbar-brand')[0];

logo.addEventListener('click', function() {
  document.addEventListener('click', function (e){
    if(e.key === 'a') {
      document.body.className = '';
      document.body.classList.add('col-4');
    } else if (e.key ==='y') {
      document.body.className = '';
      document.body.classList.add('offset-4', 'col-4');
    } else if (e.key ==='p') {
      document.body.className = '';
      document.body.classList.add('offset-8', 'col-4');
    } else if (e.key ==='b') {
      document.body.className = '';
    }
  });
})

/*
Fonctionnalité 9 :

La fonctionnalité se déclenchera si le logo de la page (JS & Events) est sélectionné et qu'on appuie sur une touche spécifique du clavier.
Si l'utilisateur presse la touche "a", l'ensemble de la page va être condensé sur 4 colonnes Bootstrap à gauche de l'écran.
Si l'utilisateur presse la touche "y", l'ensemble de la page va être condensé sur 4 colonnes Bootstrap au milieu de l'écran.
Si l'utilisateur presse la touche "p", l'ensemble de la page va être condensé sur 4 colonnes Bootstrap à droite de l'écran.
Si l'utilisateur presse la touche "b", tout redevient normal.
Indice 1 : L'event à utiliser est "keypress", appliqué au texte "JS & Events" (ou, mieux, à une div le contenant).

Indice 2 : Pour modifier le rendu visuel de toute la page, il faut que tu joues avec les classes de <body>.

Indice 3 : Pour mettre tout sur 4 colonnes, rajoute la classe col-4. Pour les placer au milieu ou à droite, rajoute la classe offset-md-4 ou offset-md-8.

Indice 4 : Pour éviter que les classes s'accumulent, et pour que chaque touche ait un comportement propre, retire toutes les classes du <body> à chaque fois qu'un "keypress" est détecté. Ensuite seulement tu rajoutes les classes nécessaires.
*/