'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = ''; //wyczyszcza z htmla srodek klasy movements
  // Albo .textContent = 0

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;
  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `<div class="movements__row">
    <div class="movements__type movements__type--${type} ">${
      i + 1
    } ${type}</div>
    <div class="movements__date">3 days ago</div>
    <div class="movements__value">${mov}</div>
  </div>`;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDiplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes} $`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)} $`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumInterest.textContent = `${Math.abs(interest)} $`;
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, curr) => acc + curr, 0);
  labelBalance.textContent = `${acc.balance} EUR`;
};

const createUserName = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLocaleLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  }); //dodaje do obiektu(konto) username
};
createUserName(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc.movements);
  // Display balance
  calcDisplayBalance(acc);
  // Display summary
  calcDiplaySummary(acc);
};

// Event hanlder
let currentAccount;

btnLogin.addEventListener('click', function (e) {
  // Prevent from form submiting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    //znak zapytania chodzi o to ze jak konto czy currectaccount jest undefined no to ten if dalej nie przechodzi
    // Dipslay UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;
    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputClosePin.blur();

    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';
  if (
    amount > 0 &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // console.log(amount);
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    updateUI(currentAccount);
  }
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  // jezeli dane sie zgadzaja usun
  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username == currentAccount.username
    );
    console.log(index);

    // delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }
  inputCloseUsername.value = inputClosePin = '';
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
  }
  {
    //  add movement
    currentAccount.movements.push(amount);

    // Upadte UI
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
});
let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

// Coding Challange #1

const checkDogs = function (dogs1, dogs2) {
  const copyDogs = dogs1.slice(1, dogs1.length - 2);
  console.log(copyDogs);
  const allDogs = copyDogs.concat(dogs2);
  allDogs.forEach(function (age, index) {
    const type = age > 3 ? 'an adult' : 'still a puppy';
    console.log(`Dog number ${index + 1} is ${type}`);
  });
};
const dogsJulia = [3, 5, 2, 12, 7];
const dogsKate = [4, 1, 15, 8, 3];

checkDogs(dogsKate, dogsJulia);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

let arr = ['a', 'b', 'c', 'd', 'e'];

console.log(arr.slice(2));

// 144. Looping arrays: foreach

// for (const movement of movements) {
//   if (movement > 0) {
//     console.log(`You deposited ${movement}`);
//   } else {
//     console.log(`Youh withdrew ${Math.abs(movement)}`);
//   }
// };
for (const [i, movement] of movements.entries()) {
  // i =index; movement = value
  if (movement > 0) {
    console.log(`You deposited ${movement}`);
  } else {
    console.log(`Youh withdrew ${Math.abs(movement)}`);
  }
}

console.log('----forEach----');
movements.forEach(function (movement, index, array) {
  //value jest pakowany do movement albo index, value, array
  if (movement > 0) {
    console.log(`Movement ${index + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${index + 1}: You withdrew ${Math.abs(movement)}`);
  }
});

// map
currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

// Set
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique);
currenciesUnique.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

// Lecjka 146. PROJECT: "Bankist" APP

// Lekcja 150.The mnap method
const eurToUsd = 1.1;

// const movementsUSD = movements.map(function (mov) { //wypluwa nowy aRRAY TO MUSI BYC NOWY
//   return mov * eurToUsd;
// });

const movementsUSD = movements.map(movement => movement * eurToUsd);

console.log(movements);
console.log(movementsUSD);

const movementUSfor = [];
for (const mov of movements) movementUSfor.push(mov * eurToUsd);
console.log(movementUSfor);

movements.map((mov, i, arr) => {
  console.log(
    `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(
      mov
    )}`
  );
});

// Leckaj 152. fitler method
const deposits = movements.filter(function (mov) {
  return mov > 0;
});
console.log(movements);
console.log(deposits);

const depositsFor = [];
for (const mov of movements) if (mov > 0) depositsFor.push(mov);
console.log(depositsFor);

const withdrwalas = movements.filter(mov => mov < 0);
console.log(withdrwalas);

const balance = movements.reduce((acc, cur) => acc + cur);
console.log(balance);

let balance2 = 0;
for (const mov of movements) balance2 += mov;
console.log(balance2);

// maximum value

const max = movements.reduce((acc, mov) => {
  if (acc > mov) return acc;
  else return mov;
}, movements[0]);
console.log(max);

// Coding challange #2

const dogsAge1 = [5, 2, 4, 1, 15, 8, 3];
const dogsAge2 = [16, 6, 10, 5, 6, 1, 4];
const calcAge = function (dogsAge) {
  const humanAge = dogsAge.map(age => (age <= 2 ? age * 2 : 16 + age * 4));
  const filterAge = humanAge.filter(mov => mov > 18);
  return filterAge.reduce((acc, mov) => acc + mov, 0) / filterAge.length;
};
console.log(calcAge(dogsAge2));

// Lekcja 155.The magice of Chaining Methods

const totalDepositUSD = movements
  .filter(mov => mov > 0)
  .map(mov => mov * eurToUsd)
  .reduce((acc, cur) => acc + cur, 0);

console.log(totalDepositUSD);

// Coding challange #3

const chainingCalcAge = function (dogsAge) {
  return dogsAge
    .map(age => (age <= 2 ? age * 2 : 16 + age * 4))
    .filter(mov => mov > 18)
    .reduce((acc, mov, i, arr) => acc + mov / arr.length, 0);
};
console.log(chainingCalcAge(dogsAge2));

// Lekcja 157. The find method

movements.find(mov => mov < 0); //Pokazuje pierwszy element tablicy który spełnia warunek

const account = accounts.find(acc => acc.owner === 'Jessica Davis');
console.log(account);

// Lekcja 161. Some

// euqality = rowna sie
console.log(movements.includes(-130));

// Condition = warunek
console.log(movements.some(mov => mov > 1500));

const anyDeposits = movements.some(mov => mov > 1500);
console.log(anyDeposits);

// every - sprawdza wszystkie wartości i zwraca true albo false
console.log(movements.every(mov => mov > 0));
console.log(account4.movements.every(mov => mov > 0));

const deposit2 = mov => mov >= 0;
console.log(movements.some(deposit2));
console.log(movements.every(deposit2));
console.log(movements.filter(deposit2));

// lekcja 162.

// arr.flat [[1,2]],[3]

const overalBalance = accounts
  .map(acc => acc.movements)
  .flat()
  .reduce((acc, mov) => acc + mov, 0);
console.log(overalBalance);

const overalBalance2 = accounts
  .flatMap(acc => acc.movements)
  .reduce((acc, mov) => acc + mov, 0);
console.log(overalBalance2);

// Lekcja 163.Sortting arrays
const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];
console.log(owners.sort());
console.log(owners);

// Numbers
console.log(movements);
console.log(movements.sort()); //sortuje tyko pierwsze liczby

console.log(movements.sort((a, b) => a - b)); //rosnąco
console.log(movements.sort((a, b) => b - a)); //malejąco

console.log([1, 2, 3, 4, 5, 6, 7, 8, 9]);
console.log(new Array(1, 2, 3, 4, 5, 6, 7));
const x = new Array(7);
console.log(x);

console.log(x.map(() => 5));
// x.fill(1)
console.log(x);
const arra = [1, 2, 3, 4, 5, 6, 7];
arra.fill(23, 2, 6);
console.log(arra);

const y = Array.from({ length: 7 }, () => 1); //array z 1,1,1,1,1,1,1,1
console.log(y);

const z = Array.from({ length: 7 }, (_, i) => i + 1); //array z 1,2,3,4,5,6,7
console.log(z);

labelBalance.addEventListener('click', function () {
  const movementsUI = Array.from(
    document.querySelectorAll('.movements__value'),
    el => Number(el.textContent.replace('💲', ''))
  );
  console.log(movementsUI);

  const movementsUI2 = [...document.querySelectorAll('.movements__value')];
});
// Lekcja 166
// Zad1.
const bankDepositSum = accounts
  .flatMap(acc => acc.movements)
  .filter(acc => acc > 0)
  .reduce((sum, cur) => sum + cur, 0);

console.log(bankDepositSum);

// Zad2.
// const numDeposits1000 = accounts.flatMap(acc => acc.movements).filter(mov => mov>1000)
const numDeposits1000 = accounts
  .flatMap(acc => acc.movements)
  .reduce((count, cur) => (cur >= 1000 ? ++count : count), 0);

console.log(numDeposits1000);

// Zad3.
const sums = accounts
  .flatMap(acc => acc.movements)
  .reduce(
    (sums, cur) => {
      // cur > 0 ? sums.deposits += cur : sums.withdrawals += cur;
      sums[cur > 0 ? 'deposits' : 'withdrwalas'] += cur;
      return sums;
    },
    { deposits: 0, withdrawals: 0 }
  );

console.log(deposits, withdrwalas);

// Zad4.
const converTitleCase = function (title) {
  const capitalize = str => str[0].toUpperCase() + str.slice(1);
  const expections = ['a', 'an', 'and', 'the', 'but', 'or', 'on', 'in', 'with'];
  const titleCase = title
    .toLocaleLowerCase()
    .split(' ')
    .map(word => (expections.includes(word) ? word : capitalize(word)))
    .join(' ');
  return capitalize(titleCase);
};

console.log(converTitleCase('this is a nice title'));

// Code challange #4n
const dogs = [
  { weight: 8, curFood: 222, owners: ['Matilda'] },
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 13, curFood: 201, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

// Zad 1.
dogs.forEach(dog => (dog.calcFood = Math.trunc(dog.weight ** 0.75 * 28)));
console.log(dogs);

// Zad 2. forEach dogs (find owners)
// const isSarahDog = dogs =>
//   dogs.findIndex(function (dog, index) {
//     return dog.owners.find(name => name === 'Sarah') != undefined
//       ? true
//       : false;
//   });

const dogSarah = dogs.find(dog => dog.owners.includes('Sarah'));

console.log(
  `Sarah dog is eating too ${
    dogSarah.curFood > dogSarah.calcFood ? 'much' : 'little'
  }`
);

// zad3.
const ownersEatTooMuch = dogs
  .filter(dogs => dogs.curFood > dogs.calcFood)
  .map(dog => dog.owners)
  .flat();
console.log(ownersEatTooMuch);

const ownersEatTooLittle = dogs
.filter(dogs => dogs.curFood < dogs.calcFood)
.map(dog => dog.owners)
.flat();
console.log(ownersEatTooLittle);

// zad4.

console.log(`${ownersEatTooMuch.join(' and ')} dogs eat too much!`);
console.log(`${ownersEatTooLittle.join(' and ')} dogs eat too little!`);

// Zad5.
const eatEx = dogs.some(dogs =>
  (dogs.curFood === dogs.calcFood)
)
console.log(eatEx);

// zad6.
const eatOk = dogs.some((dogs,index,array) =>
  ((dogs.calcFood * 0.1) >= Math.abs(dogs.curFood - dogs.calcFood))
)
console.log(`There is any dog thats eat ok?: ${eatOk}`);

// zad7.
const eatOkDogs = dogs.filter(dogs => (dogs.calcFood * 0.1) >= Math.abs(dogs.curFood - dogs.calcFood));
console.log(eatOkDogs);

// zad8.
const eatOkDogsSort = eatOkDogs.map(portion=> portion.calcFood).sort((a,b)  => a - b)
console.log(eatOkDogsSort);