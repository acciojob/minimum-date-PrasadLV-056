
function minDate(dates) {
  return dates.reduce((min, curr) => curr < min ? curr : min);
}

function showMinDate() {
  const input = document.getElementById('datesInput').value;

  // Split input by new lines and clean whitespace
  const datesArray = input
    .split('\n')
    .map(date => date.trim())
    .filter(date => /^\d{4}\/\d{2}\/\d{2}$/.test(date)); // only valid YYYY/MM/DD

  const resultElement = document.getElementById('result');

  if (datesArray.length === 0) {
    resultElement.innerText = "❌ Please enter valid dates in YYYY/MM/DD format.";
    return;
  }

  const result = minDate(datesArray);
  resultElement.innerText = `✅ Earliest Date: ${result}`;
}
