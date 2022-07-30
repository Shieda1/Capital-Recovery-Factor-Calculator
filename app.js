// https://calculator.swiftutors.com/capital-recovery-factor-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const capitalRecoveryFactorRadio = document.getElementById('capitalRecoveryFactorRadio');
const InterestRateRadio = document.getElementById('InterestRateRadio');
const numberofAnnuitiesReceivedRadio = document.getElementById('numberofAnnuitiesReceivedRadio');

let capitalRecoveryFactor;
let InterestRate = v1;
let numberofAnnuitiesReceived = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

capitalRecoveryFactorRadio.addEventListener('click', function() {
  variable1.textContent = 'Interest Rate';
  variable2.textContent = 'Number of Annuities Received (n)';
  InterestRate = v1;
  numberofAnnuitiesReceived = v2;
  result.textContent = '';
});

InterestRateRadio.addEventListener('click', function() {
  variable1.textContent = 'Capital Recovery Factor';
  variable2.textContent = 'Number of Annuities Received (n)';
  capitalRecoveryFactor = v1;
  numberofAnnuitiesReceived = v2;
  result.textContent = '';
});

numberofAnnuitiesReceivedRadio.addEventListener('click', function() {
  variable1.textContent = 'Capital Recovery Factor';
  variable2.textContent = 'Interest Rate';
  capitalRecoveryFactor = v1;
  InterestRate = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(capitalRecoveryFactorRadio.checked)
    result.textContent = `Capital Recovery Factor = ${computeCapitalRecoveryFactor().toFixed(2)}`;

  else if(InterestRateRadio.checked)
    result.textContent = `Interest Rate = ${computeInterestRate().toFixed(2)}`;

  else if(numberofAnnuitiesReceivedRadio.checked)
    result.textContent = `Number of Annuities Received = ${computeNumberofAnnuitiesReceived().toFixed(2)}`;
})

// calculation

function computeCapitalRecoveryFactor() {
  return (Number(InterestRate.value) * Math.pow(1 + Number(InterestRate.value), Number(numberofAnnuitiesReceived.value))) / (Math.pow(1 + Number(InterestRate.value), Number(numberofAnnuitiesReceived.value)) - 1);
}

function computeInterestRate() {
  return Number(decliningBalanceDepreciation.value) / Number(bookValueofAsset.value);
}

function computeNumberofAnnuitiesReceived() {
  return Number(decliningBalanceDepreciation.value) / Number(depreciationRate.value);
}