/*
neobxadimo sozdat object bankAccount (debet), predstavlyalushiy soboy bankovskiy shyot so
sleduyushimi svoystvami:

1. accountNumber: 123456789;
2. accountHolderName: 'Alice';
3. balance: 1000;
4. deposit() dlya opisanya deystva po dobavlenyu denejnix sredstv na schyot;
5.withdraw() dlya opisanya deystvia po snyati denejnix sredstv s schyoti;
6.checkBalance() dlya proverki balanca;

*/

const bankAccount = {
    accountNumber: 123456789,
    accountHolderName: 'Alice',
    balance: 1000,



    deposit: function  (money) {
    this.balance += money;
    console.log(this.balance);
},


    withdraw: function(money) {
    if (money > this.balance) {
        console.log('Sorry you have not so much money');
        
    }else {
        this.balance -= money;
        console.log(this.balance);
    }
},

   
    checkBalance: function () {
    console.log(this.balance);
    
}

}


 bankAccount.deposit(800);
 bankAccount.withdraw(300);
 bankAccount.checkBalance();