

// Why use parseFloat? 
// I think it's because a prompt returns a string but we want it to return a number to be able 
// to calculate the balance, and parseFloat is used to accept a string and convert it to a 
// floating point number (number that can store a decimal point). 


// I chose to use if/else in favor of switch because I feel more comfortable using it. 
// I thinks it's easy to use and to me it is clear and easy to read


const account = {
  accountName: "Sara Svensson",
  balance: 100,
  getBalance() {
    alert(`Your current balance is: ${this.balance}`);
    atm()
  },
  deposit(){
    let depositInput = parseFloat(prompt("How much would you like to deposit?"));
    if (isNaN(depositInput) || 0 >= depositInput) {
      alert(`Sorry, invalid input. Please try again`)
      this.deposit()
    }
    else {
    alert(`Deposit was successful`)
    this.balance += depositInput;
    atm()
    }
  },
  withdraw(){
    let withdrawInput = parseFloat(prompt("How much would you like to withdraw?"));
    if (isNaN(withdrawInput) || 0 >= withdrawInput) {
      alert(`Sorry, invalid input. Please try again`)
      this.withdraw()
    }
    else if (withdrawInput > this.balance) {
      alert(`Sorry, insufficient funds. Please try a smaller amount`)
      this.withdraw()
    }
    else {
      alert(`Withdrawal was successful`)
      this.balance -= withdrawInput;
      atm()
    }
  },
  getAccountName(){
    alert(`Account name: ${account.accountName}`);
    atm()
  },
  accountError(){
    alert("Sorry, invalid input. Accepted numbers are 1 - 5. Please try again.");
    atm()
  },
  exitAccount(){
    alert("You are now exiting the account");
    window.close();
  }
};

function atm() {
  let choice = parseInt(prompt("Select a choice 1)See balance 2)Make a deposit 3)Make a withdrawal 4)Get account name 5)Exit"));

  if (choice === 1) {
    account.getBalance();
  }
  else if (choice === 2) {
    account.deposit();
  }
  else if (choice === 3) {
    account.withdraw();
  }
  else if (choice === 4) {
    account.getAccountName();
  }
  else if (choice === 5) {
    account.exitAccount();
  }
  else {
    account.accountError();
  }
}

atm()