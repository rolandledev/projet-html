console.log("from header");

const burger = document.querySelector('.hamburger-menu');

burger.addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('show');
});

const logo = document.querySelector('.logo');

logo.addEventListener('mouseover', () => {
    logo.style.transform = 'rotate(180deg)'; // Tourner de 5 degrés
});

logo.addEventListener('mouseleave', () => {
    logo.style.transform = 'rotate(0deg)'; // Retour à la position d'origine
});

const navLinks = document.querySelectorAll('.nav-links a');

// Parcourir tous les liens et leur ajouter des écouteurs d'événements
navLinks.forEach(link => {
    link.addEventListener('mouseover', () => {
        link.style.fontSize = '1.7rem'; // Grossir le texte
        link.style.color = '#e89510'; // Changer la couleur
    });

    link.addEventListener('mouseleave', () => {
        link.style.fontSize = '1.2rem'; // Retour à la taille de police d'origine
        link.style.color = '#fff'; // Retour à la couleur d'origine
    });
});