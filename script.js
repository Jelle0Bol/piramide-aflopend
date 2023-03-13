// Vraag de gebruiker om een getal
const getal = prompt("Voer een getal in:");
// Maak een array met getallen 1 t/m het ingevoerde getal
const getallen = Array.from({ length: getal }, (_, i) => i + 1);
// Sorteer de getallen in omgekeerde volgorde
const omgekeerdeGetallen = getallen.slice().reverse();
// Selecteer het DOM-element voor de pyramide
const pyramide = document.getElementById("pyramide");
// Maak een tabel aan om de pyramide in te tekenen
const tabel = document.createElement("table");
// Loop over de omgekeerde getallen om de rijen van de pyramide te maken
omgekeerdeGetallen.forEach((getal, index) => {
  // Maak een rij aan voor de huidige laag van de pyramide
  const rij = document.createElement("tr");
  // Voeg lege cellen toe aan het begin van de rij om de juiste inspringing te maken
  for (let i = 0; i < index; i++) {
    const cel = document.createElement("td");
    rij.appendChild(cel);
  }
  // Loop over de getallen in de huidige laag om de cellen van de rij te maken
  for (let i = getal; i > 0; i--) {
    const cel = document.createElement("td");
    cel.textContent = i;
    rij.appendChild(cel);
  }
  // Voeg de rij toe aan de tabel
  tabel.appendChild(rij);
});
// Voeg de tabel toe aan de pyramide op de pagina
pyramide.appendChild(tabel);