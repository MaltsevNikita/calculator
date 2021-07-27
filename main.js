// income inputs========
const incomeSalary = document.querySelector('#income-salary'),
      incomefreelance = document.querySelector('#income-freelance'),
      incomeExtra1 = document.querySelector('#income-extra-1'),
      incomeExtra2 = document.querySelector('#income-extra-2');

// cost inputs========
const costsFlat = document.querySelector('#costs-flat'),
      costsHouseServices = document.querySelector('#costs-house-services'),
      costsTransport = document.querySelector('#costs-transport'),
      costsCredit = document.querySelector('#costs-credit');

//total inputs========
const totalMonthInput = document.querySelector('#total-month'),
      totalDayInput = document.querySelector('#total-day'),
      totalYearInput = document.querySelector('#total-year');

let totalMonth,totalDay, totalYear;

//money box==============================
const moneyBoxRange = document.querySelector('#money-box-range'),
      accumulationInput = document.querySelector('#accumulation'),
      spend = document.querySelector('#spend');

let accumulation = 0;
    totalPrecents = 0;

const inputs = document.querySelectorAll('.input');
for(input of inputs){
  input.addEventListener('input',() => {
      countingAvaliableMoney();
      calculationPrecents();
  })
}

const strToNum = str => str.value ? parseInt(str.value) : 0

const countingAvaliableMoney = ()=>{
  let totalPerMonth = strToNum(incomeSalary) + strToNum(incomefreelance) + strToNum(incomeExtra1) + strToNum(incomeExtra2);
  let totalCosts = strToNum(costsFlat) + strToNum(costsHouseServices) + strToNum(costsTransport) + strToNum(costsCredit);
  totalMonth = totalPerMonth - totalCosts;
  totalMonthInput.value = totalMonth;
}

moneyBoxRange.addEventListener('input', e => {
  const totalPrecentEl = document.querySelector('#total-precents')
  totalPrecents = e.target.value;
  totalPrecentEl.innerHTML = totalPrecents;
  calculationPrecents();
})

const calculationPrecents = () => {
  accumulation = ((totalMonth * totalPrecents) / 100).toFixed();
  accumulationInput.value = accumulation;

  spend.value = totalMonth - accumulation;

  totalDay = (spend.value / 30).toFixed();
  totalDayInput.value = totalDay;

  totalYear = accumulation * 12;
  totalYearInput.value = totalYear;
}
