"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const AccountType = {
    Normal: "Brukskonto",
    Saving: "Sparekonto",
    Credit: "Kreditkonto",
    Pension: "Pensionskonto"
};

let accountTypes = AccountType.Normal + ", " + AccountType.Saving + ", " + AccountType.Credit + ", " + AccountType.Pension;

printOut(accountTypes);
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
class TAccount {

    constructor(type) {
        this.type = type;
    }

    toString() {
        return this.type;
    }

    setType(newType) {
        printOut("Account is changed from " + this.type + " to " + newType);
        this.type = newType;
    }
}

const myAccount = new TAccount("Brukskonto");

printOut("myAccount =" + myAccount.toString());

myAccount.setType("Sparekonto");

printOut("myAccount = " + myAccount.toString());
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
class TAccountNew {

    constructor(type, balance = 0) {
        this.type = type;     
        this.balance = balance;  
    }

    toString() {
        return this.type;
    }

    setType(newType) {
        printOut("Account is changed from " + this.type + " to " + newType);
        this.type = newType;
    }

    getBalance() {
        return this.balance;
    }

    deposit(amount) {
        this.balance += amount;
        printOut("Deposit of " + amount + ", new balance is " + this.balance);
    }

    withdraw(amount) {
        if (amount > this.balance) {
            printOut("Insufficient balance for withdrawal of " + amount);
        } else {
            this.balance -= amount;
            printOut("Withdrawal of " + amount + ", new balance is " + this.balance);
        }
    }
}

const myAccount3 = new TAccountNew("Normal", 0);

printOut("myAccount = " + myAccount3.toString());

myAccount3.deposit(100);

myAccount3.withdraw(25);

printOut("myAccount balance is " + myAccount3.getBalance());
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
class TAccount4 {
    constructor(type, balance = 0) {
        this.type = type;
        this.balance = balance;
        this.withdrawCount = 0; 
    }

  
    toString() {
        return this.type;
    }

    
    setType(newType) {
       printOut("Account is changed from " + this.type + " to " + newType);
        this.type = newType;
        this.withdrawCount = 0; 
    }


    getBalance() {
        return this.balance;
    }

   
    deposit(amount) {
        this.balance += amount;
        printOut("Deposit of " + amount + ", new balance is " + this.balance);
        this.withdrawCount = 0; 
    }

    
    withdraw(amount) {
        switch (this.type) {
            case "Saving":
                if (this.withdrawCount >= 3) {
                    printOut("You can't withdraw from a Saving account more than three times!");
                    return;
                }
                break;
            case "Pension":
                printOut("You can't withdraw from a Pension account!");
                return;
        }

        if (amount > this.balance) {
            printOut("Insufficient balance for withdrawal of " + amount);
        } else {
            this.balance -= amount;
            this.withdrawCount++; 
            printOut("Withdrawal of " + amount + ", new balance is " + this.balance);
        }
    }
}


const myAccount4 = new TAccount4("Saving", 0);

myAccount4.deposit(25);      
myAccount4.deposit(75);      
myAccount4.withdraw(30);    
myAccount4.withdraw(30);     
myAccount4.withdraw(30);      
myAccount4.withdraw(30);     

myAccount4.setType("Pension"); 
myAccount4.withdraw(10);       

myAccount4.setType("Saving");  
myAccount4.withdraw(10);      

printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
const CurrencyTypes = {
    NOK: { value: 1.0000, name: "Norske kroner", denomination: "kr" },
    EUR: { value: 0.0895, name: "Europeiske euro", denomination: "€" },
    USD: { value: 0.1091, name: "United States dollar", denomination: "$" },
    GBP: { value: 0.0847, name: "Pound sterling", denomination: "£" },
    INR: { value: 7.8309, name: "Indiske rupee", denomination: "₹" },
    AUD: { value: 0.1581, name: "Australske dollar", denomination: "A$" },
    PHP: { value: 6.5189, name: "Filippinske peso", denomination: "₱" },
    SEK: { value: 1.0580, name: "Svenske kroner", denomination: "kr" },
    CAD: { value: 0.1435, name: "Canadiske dollar", denomination: "C$" },
    THB: { value: 3.3289, name: "Thai baht", denomination: "฿" }
};

class TAccountNew5 {
    constructor(type, balance = 0) {
        this.type = type;
        this.balance = balance;
        this.withdrawCount = 0; 
        this.currencyType = "NOK"; 
    }

    toString() {
        return this.type;
    }

    setType(newType) {
        printOut("Account is changed from " + this.type + " to " + newType);
        this.type = newType;
        this.withdrawCount = 0; 
    }

    getBalance() {
        return this.balance;
    }

    deposit(amount) {
        this.balance += amount;
        printOut(`Deposit of ${amount}${CurrencyTypes[this.currencyType].denomination}, new balance is ${this.balance}${CurrencyTypes[this.currencyType].denomination}`);
        this.withdrawCount = 0; 
    }

    withdraw(amount) {
        switch (this.type) {
            case "Saving":
                if (this.withdrawCount >= 3) {
                    printOut("You can't withdraw from a Saving account more than three times!");
                    return;
                }
                break;
            case "Pension":
                printOut("You can't withdraw from a Pension account!");
                return;
        }

        if (amount > this.balance) {
            printOut("Insufficient balance for withdrawal of " + amount);
        } else {
            this.balance -= amount;
            this.withdrawCount++; 
            printOut("Withdrawal of " + amount + ", new balance is " + this.balance);
        }
    }

    setCurrencyType(newCurrency) {
        if (this.currencyType === newCurrency) {
            return; 
        }
        if (CurrencyTypes[newCurrency]) {
            this.currencyType = newCurrency;
            printOut("Currency changed to " + newCurrency);
        } else {
            printOut("Invalid currency type!");
        }
    }
}

const myAccount5 = new TAccountNew5("Normal", 0);

myAccount5.setCurrencyType("NOK");
myAccount5.deposit(150); 

printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
const CurrencyTypes6 = {
    NOK: { value: 1.0000, name: "Norske kroner", denomination: "kr" },
    EUR: { value: 0.0895, name: "Europeiske euro", denomination: "€" },
    USD: { value: 0.1091, name: "United States dollar", denomination: "$" },
    GBP: { value: 0.0847, name: "Pound sterling", denomination: "£" },
    INR: { value: 7.8309, name: "Indiske rupee", denomination: "₹" },
    AUD: { value: 0.1581, name: "Australske dollar", denomination: "A$" },
    PHP: { value: 6.5189, name: "Filippinske peso", denomination: "₱" },
    SEK: { value: 1.0580, name: "Svenske kroner", denomination: "kr" },
    CAD: { value: 0.1435, name: "Canadiske dollar", denomination: "C$" },
    THB: { value: 3.3289, name: "Thai baht", denomination: "฿" }
};

class TAccountNew6 {
    constructor(type, balance = 0) {
        this.type = type;
        this.balance = balance;
        this.withdrawCount = 0;
        this.currencyType = "NOK";
    }

    setType(newType) {
        printOut("Account is changed from " + this.type + " to " + newType);
        this.type = newType;
        this.withdrawCount = 0;
    }

    deposit(amount) {
        this.balance += amount;
        printOut(`Deposit of ${amount}${CurrencyTypes6[this.currencyType].denomination}, new balance is ${this.balance.toFixed(2)}${CurrencyTypes6[this.currencyType].denomination}`);
        this.withdrawCount = 0;
    }

    withdraw(amount) {
        if (this.type === "Saving" && this.withdrawCount >= 3) {
            printOut("You can't withdraw from a Saving account more than three times!");
            return;
        }
        if (this.type === "Pension") {
            printOut("You can't withdraw from a Pension account!");
            return;
        }
        if (amount > this.balance) {
            printOut("Insufficient balance for withdrawal of " + amount);
            return;
        }

        this.balance -= amount;
        this.withdrawCount++;
        printOut("Withdrawal of " + amount + ", new balance is " + this.balance.toFixed(2));
    }

    setCurrencyType(newCurrency) {
        if (this.currencyType === newCurrency) {
            return; 
        }
        if (CurrencyTypes6[newCurrency]) {
            const oldCurrencyValue = CurrencyTypes6[this.currencyType].value;
            const newCurrencyValue = CurrencyTypes6[newCurrency].value;
            this.balance = (this.balance / oldCurrencyValue) * newCurrencyValue;

            printOut(`The account currency has changed from ${CurrencyTypes6[this.currencyType].name} to ${CurrencyTypes6[newCurrency].name}`);
            this.currencyType = newCurrency; 
            printOut(`New balance is ${this.balance.toFixed(2)}${CurrencyTypes6[this.currencyType].denomination}`);
        } else {
            printOut("Invalid currency type!");
        }
    }
}

const myAccount6 = new TAccountNew6("Normal", 150);

myAccount6.setCurrencyType("SEK");  
myAccount6.setCurrencyType("USD");  
myAccount6.setCurrencyType("NOK"); 


printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
const CurrencyTypes7 = {
    NOK: { value: 1.0000, name: "Norske kroner", denomination: "kr" },
    EUR: { value: 0.0895, name: "Europeiske euro", denomination: "€" },
    USD: { value: 0.1091, name: "United States dollar", denomination: "$" },
    GBP: { value: 0.0847, name: "Pound sterling", denomination: "£" },
    INR: { value: 7.8309, name: "Indiske rupee", denomination: "₹" },
    AUD: { value: 0.1581, name: "Australske dollar", denomination: "A$" },
    PHP: { value: 6.5189, name: "Filippinske peso", denomination: "₱" },
    SEK: { value: 1.0580, name: "Svenske kroner", denomination: "kr" },
    CAD: { value: 0.1435, name: "Canadiske dollar", denomination: "C$" },
    THB: { value: 3.3289, name: "Thai baht", denomination: "฿" }
};

class TAccountNew7 {
    constructor(type, balance = 0) {
        this.type = type;
        this.balance = balance;
        this.withdrawCount = 0;
        this.currencyType = "NOK"; 
    }


    setType(newType) {
        printOut("Account is changed from " + this.type + " to " + newType);
        this.type = newType;
        this.withdrawCount = 0;
    }

  
    deposit(amount, aType = "NOK") {
        const depositCurrencyValue = CurrencyTypes7[aType].value;
        const currentCurrencyValue = CurrencyTypes7[this.currencyType].value;
        
        const convertedAmount = (amount * depositCurrencyValue) / currentCurrencyValue;
        this.balance += convertedAmount;
        
        printOut(`Deposit of ${amount.toFixed(2)} ${CurrencyTypes7[aType].name}, new balance is ${this.balance.toFixed(2)}${CurrencyTypes7[this.currencyType].denomination}`);
        this.withdrawCount = 0;
    }

    withdraw(amount, aType = "NOK") {
        const withdrawCurrencyValue = CurrencyTypes7[aType].value;
        const currentCurrencyValue = CurrencyTypes7[this.currencyType].value;
        
        const convertedAmount = (amount * withdrawCurrencyValue) / currentCurrencyValue;

        if (convertedAmount > this.balance) {
            printOut("Insufficient balance for withdrawal of " + amount);
            return;
        }

        this.balance -= convertedAmount;
        printOut(`Withdrawal of ${amount.toFixed(2)} ${CurrencyTypes7[aType].name}, new balance is ${this.balance.toFixed(2)}${CurrencyTypes7[this.currencyType].denomination}`);
    }

    setCurrencyType(newCurrency) {
        if (this.currencyType === newCurrency) {
            return; 
        }
        if (CurrencyTypes7[newCurrency]) {
            const oldCurrencyValue = CurrencyTypes7[this.currencyType].value;
            const newCurrencyValue = CurrencyTypes7[newCurrency].value;
            this.balance = (this.balance / oldCurrencyValue) * newCurrencyValue;

            printOut(`The account currency has changed from ${CurrencyTypes7[this.currencyType].name} to ${CurrencyTypes7[newCurrency].name}`);
            this.currencyType = newCurrency; 
            printOut(`New balance is ${this.balance.toFixed(2)}${CurrencyTypes7[this.currencyType].denomination}`);
        } else {
            printOut("Invalid currency type!");
        }
    }
}

const myAccount7 = new TAccountNew7("Normal", 0);

myAccount7.deposit(12, "USD");  
myAccount7.withdraw(10, "GBP");  
myAccount7.setCurrencyType("CAD"); 
myAccount7.setCurrencyType("INR");  
myAccount7.setCurrencyType("SEK");  
myAccount7.withdraw(150.11, "SEK"); 

printOut(newLine);

printOut("Part 8");
function expandText(text, maxSize, char, insertBefore) {

    while (text.length < maxSize) {
        if (insertBefore) {
            text = char + text; 
        } else {
            text = text + char; 
        }
    }
    return text;
}

const result = expandText("hello", 10, "*", true); 
printOut(result); 
