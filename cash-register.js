function checkCashRegister(price, cash, cid) { //cid -> cash in drawer
    let change = price - cash; //this is for change

    let totalCash = 0; //var to hold total cash in register

    let cidReverse = [...cid].reverse();

    let temporaryHold = []; //this will hold a temporary array of each change from the currency unit
    

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

    //function to check if some currency unit can offset some change in the cash register

    function cashUnit(unit,index){ //unit -> this reps the cashValue  obj & index -> reps the cid unit amount
        let unitTotal = cidReverse[index][1] //get currency unit total from cid
        let amount = Math.floor(change / cashValue[unit]) //check max possible amount that can be offset from change

        if(unitTotal > 0){ //check if some unit can be paid from this unit
            if(unitTotal >= amount){ //this indicates there is enough unit total to offset max possible amount
                change -= amount //subtract amount taken from change
                change = parseFloat(change.toFixed(2));
                return amount; //amount taken from this unit
            }else{ //not enough unitTotal, hence use all
                change -= unitTotal //subtract unitTotal from change since all unitTotal was used
                change = parseFloat(change.toFixed(2));
                return unitTotal; //amount taken from this unit which == full unitTotal
            }
        }
        else { //No change can be taken from this unit
            return 0;
        }
    }


    //Function to implement cashUnit for each unit
    function getChange(){
        let changeOwed = cash - price; //find full amount of change  due
        for(let [index, value] of cidReverse.entries()){
            let changeGotten = cashUnit(value[0], index);
            if (changeGotten > 0){
                temporaryHold.push([value[0], changeGotten]); //helps access both the key and value pairs
            }
            if(change === 0) {break}; //this terminates is change has been derived
        }
        if(totalCash < changeOwed || change !== 0){
            changeDue.status = "INSUFFICIENT_FUNDS"
        }
    }
}
console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));