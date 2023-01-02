'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jason Smith',
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
const labelLoginScreen = document.querySelector('.login') 
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

// Date Functionality
const getDate = () => {
  const full_date = new Date();
  const show_month = `${full_date.getMonth()+1}`.length === 1 ? `0${full_date.getMonth()+1}` : full_date.getMonth()+1;
  const show_day = `${full_date.getDate()+1}`.length === 1 ? `0${full_date.getDate()}` : full_date.getDate();
  const show_year = full_date.getFullYear()
  const show_minutes = `${full_date.getMinutes()}`.length === 1 ? `0${full_date.getMinutes()}`: full_date.getMinutes()
  const show_hour = `${full_date.getHours()}`.length === 1 ? `0${full_date.getHours()}`: full_date.getHours()
  const show_dayNight = full_date.getHours() < 12 ? 'AM' : 'PM'
  labelDate.textContent = `${show_month}/${show_day}/${show_year}, ${show_hour}:${show_minutes} ${show_dayNight}`
}

getDate()

/////////////////////////////////////////////////

//Sorting Functionality
let sortArrow = '&downarrow;'
const sortingFunc = (account) => {
  btnSort.innerHTML = `${sortArrow} SORT`;
  btnSort.addEventListener('click',() => {
    sortArrow = sortArrow === '&downarrow;' ? '&uparrow;' : '&downarrow;'
    btnSort.innerHTML = `${sortArrow} SORT`
    console.log(sortArrow)
    containerMovements.innerHTML = '';
    showTranscations(account)
  })
}

/////////////////////////////////////////////////

//Show Deposit/Withdrawl  + Total Balance Functionality
const showTranscations = (account) => {

  account.movements.forEach((acc,idx) => {
    let trans = `
      <div class="movements__row">
        <div class="movements__type movements__type--${acc < 0 ? 'withdrawal' : 'deposit'}">
          ${idx+1} ${acc < 0 ? 'withdrawal' : 'deposit'}
        </div>
        <div class="movements__date">${labelDate.textContent.split(',')[0]}</div>
        <div class="movements__value">$${acc}</div>
      </div>
     `
    if(sortArrow === '&downarrow;'){
      containerMovements.insertAdjacentHTML("afterbegin",trans)
    }else{
      containerMovements.innerHTML += trans
    }
  })  

  labelBalance.innerHTML = `$${account.movements.reduce((a,c)=>a+c,0)}`
  labelSumIn.innerHTML = `$${account.movements.filter(v=> v > 0).reduce((a,c)=>a+c,0)}`;
  labelSumOut.innerHTML = `$${Math.abs(account.movements.filter(v=> v < 0).reduce((a,c)=>a+c,0))}`
  labelSumInterest.innerHTML = `$${(account.movements.reduce((a,c)=>a+c,0)*account.interestRate).toFixed(2)}`
}

/////////////////////////////////////////////////

//Loan Functionality
const requestLoan = (account) => {
  const amount = account.movements.reduce((a,c)=>a+c,0);
  btnLoan.addEventListener('click', (e) => {
    e.preventDefault()
    const savedAmount = +inputLoanAmount.value;
    if(savedAmount > 0 && savedAmount < amount){
      account.movements.push(savedAmount)
      containerMovements.innerHTML = '';
      showTranscations(account)
      inputLoanAmount.value = ''
    }
  })
} 

/////////////////////////////////////////////////

//Login + Transfer Functionality
let currentUser;
let userBalance;

const loginUser = () => {

    const username = inputLoginUsername;
    const user_pin = inputLoginPin;

    const split_user = accounts.map(acc=>acc.owner.split(' '))

    const split_names = split_user.map(user => {
      return ((user.map(use=>use[0].toLowerCase())).join(''))
    })

    for(let i = 0; i < accounts.length;i++){
      accounts[i].user = split_names[i]
    }

    let currentUser;
    let userBalance;
    let currentUserPin;
    //Login Btn
    btnLogin.addEventListener('click', (e)=>{
      e.preventDefault()
      const find = accounts.find(v => v.user === username.value);
      if(username.value === find?.user && +user_pin.value === find?.pin){
        containerMovements.innerHTML = '';
        sortArrow = '&downarrow;'
        btnSort.innerHTML = `${sortArrow} SORT`;
        currentUser = username.value;
        currentUserPin = user_pin.value;
        userBalance = find.movements.reduce((a,c)=>a+c,0);
        clearInterval(time)
        logoutTimer()
        updateUI(find)
        sortingFunc(find)
        labelWelcome.innerHTML = `Good Day, ${find.owner.split(' ')[0]}`
        containerApp.style.opacity = 1;
        username.value = '';
        user_pin.value = '';
      }
    })

    //Transfer Btn
    btnTransfer.addEventListener('click',(e) => {
      e.preventDefault()
      const target = accounts.find(v => v.user === inputTransferTo.value);
      const current = accounts.find(v => v.user === currentUser);
      
      if(inputTransferTo.value === target?.user && 
        inputTransferTo.value !== currentUser &&
        inputTransferAmount.value <= userBalance &&
        inputTransferAmount.value > 0){
             current.movements.push(-inputTransferAmount.value)
             target.movements.push(+inputTransferAmount.value)
             inputTransferAmount.value = ''
             inputTransferTo.value = ''
             updateUI(current)
        }
    })

    //inputCloseUsername inputClosePin btnClose
    btnClose.addEventListener('click', (e) => {
      e.preventDefault()
      const closeAccUser = accounts.find(v => v.user === currentUser);
      if(inputCloseUsername.value === closeAccUser.user &&
        +inputClosePin.value === closeAccUser.pin){
          accounts.splice(accounts.indexOf(closeAccUser),1)
          inputClosePin.value = ''
          inputCloseUsername.value = ''
          containerApp.style.opacity = 0;

        }
    })
}

loginUser()

function updateUI(user){
  showTranscations(user)
  requestLoan(user)
}

let time;

function logoutTimer(){
  let hour = 4;
  let seconds = 60;

  let secondsText = ''
  time = setInterval(() => {
    seconds--;

    seconds < 10 ? secondsText = `0${seconds}` : secondsText = `${seconds}`

    if(seconds <= 0) {
      seconds = 59;
      hour--
    }

    labelTimer.textContent = `0${hour}: ${secondsText}`

    if(hour < 0 ){
      clearInterval(time)
      labelTimer.textContent = `00: 00`
      containerApp.style.opacity = 0;
    }
  }, 1000);
}
