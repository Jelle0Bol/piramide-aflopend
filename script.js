const input = prompt("Voer een getal in:");
const n = parseInt(input);

if (isNaN(n) || n < 1 || n > 20) {
  console.log("Ongeldige invoer.");
} else {
  const numbers = Array.from({length: n}, (_, i) => i + 1);
  const pyramid = [];

  for (let i = n; i >= 1; i--) {
    const row = Array.from({length: i}, (_, j) => numbers[j]);
    pyramid.push(row);
  }

  for (let row of pyramid) {
    console.log(row.join(" "));
  }
}
