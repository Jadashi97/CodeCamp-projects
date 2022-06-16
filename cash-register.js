function checkCashRegister(price, cash, cid) {
    let change = price - cash; //this is for change

    let totalCash = 0; //var to hold total cash in register

    let cidReverse = [...cid].reverse();
    

    let cashValue = { //object to show base currency unit
        "PENNY": 0.01,
        "NICKEL": 0.05,
        "DIME": 0.1,
        "QUARTER": 0.25,
        "ONE": 1,
        "FIVE": 5,
        "TEN": 10,
        "TWENTY": 20,
        "ONE HUNDRED": 100
    };

    //object with status and change to be returned
    let changeDue = {
        status : ' ',
        change: [ ]
    };

    //get total cash in register
    cid.forEach(element => {
        totalCash += element[1];
    });
    totalCash = parseFloat(totalCash.toFixed(2)) //2 decimal places
    console.log(totalCash);

    //function to check if some currency unit can offset some change in the cash register
    return change;

}
  
console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));