// Oefening 02

const titel = document.getElementById('paginaTitel');
titel.textContent = 'Nieuwe Titel via js';
const intro = document.querySelector('#intro');
const items = document.querySelectorAll('li');
console.log(items.length);

// Oefening 03

titel.textContent = 'Mitch van den Reijen';
intro.innerHTML = 'Dit is hoe je letters <em>cursief</em> maakt.';

console.log(intro.textContent);

titel.style.color = 'green';
titel.style.fontSize = '36px';

const extra = document.getElementById('extra');
extra.classList.add('gemarkeerd');
extra.classList.add('verborgen');
extra.classList.remove('verborgen');

const dieren = ["Hond", "Kat", "Konijn", "Papegaai", "Vis"];
const ul = document.getElementById('dierenlijst');

dieren.forEach(function(dier) {
    const li = document.createElement('li');
    li.textContent = dier;
    ul.appendChild(li);
});
const marked = ul.children[0];
marked.classList.add('gemarkeerd');

// Oefening 06

function voegItemToe(lijstId, tekst) {
    const lijst = document.getElementById(lijstId);
    const li = document.createElement('li');
    li.textContent = tekst;
    lijst.appendChild(li);
} 

voegItemToe('lijst', 'Vierde item');
voegItemToe('lijst', 'Vijfde item');