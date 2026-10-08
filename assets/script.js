var namen = ["Hans", "Bert", "Pieter", "Ad", "Marjolein", "Gerrit", "Lisanne", "Olivia"];

const ul = document.getElementById('namenLijst');

namen.forEach(function vulLijst(naam) {
    const li = document.createElement('li');
    li.textContent = naam;
    if (naam.length >= 6) {
        li.classList.add('gemarkeerd');
    };
    ul.appendChild(li);
});

function berekenGemiddeldeLengte() {
    let score = 0;
    for (let i = 0; i < namen.length; i++){
        score += namen[i].length;
    }
    console.log(score);
    return score / namen.length;
}
console.log(berekenGemiddeldeLengte());
function vindLangsteNamen(namen) {
    let langsteNaam = "";
    
    for (let i = 0; i < namen.length; i++) {
        if (namen[i].length > langsteNaam.length) {
            langsteNaam = namen[i];
        }
    }
    return langsteNaam;
}

console.log(vindLangsteNamen(namen));

const titel = document.getElementById('paginaTitel');
titel.style.color = 'green';
titel.style.fontSize = '36px';

const gemiddelde = document.getElementById('gemiddelde');
const langsteNaamText = document.getElementById('langsteNaam');
gemiddelde.textContent = berekenGemiddeldeLengte();
langsteNaamText.textContent = vindLangsteNamen(namen);