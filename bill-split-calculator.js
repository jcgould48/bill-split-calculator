//Bill Spit Calculator



const bill = process.argv[2];
const tipPercentage = process.argv[3];
const numberOfSplits = process.argv[4];
console.log(bill, tipPercentage, numberOfSplits)

function tipConverter(tipPercentage){
    if (tipPercentage>1){
    return tipPercentage/100;
}else {
    return tipPercentage;
}
}

function splitConverter(numberOfSplits){
    if (numberOfSplits === undefined || numberOfSplits===0){
    return 1;
}else {
    return numberOfSplits;
}
}

function billSplitter(bill, tipPercentage, numberOfSplits){
const billTotal = bill * (1 + tipConverter(tipPercentage));
const perPersonTotal =  billTotal / splitConverter(numberOfSplits);
return (perPersonTotal);
}   

const personalBill = billSplitter(bill, tipPercentage, numberOfSplits);

if (personalBill >200){
    console.log('$' + personalBill + " Daaaamn, you have expensive friends!")
}else if (personalBill<5){
    console.log('$' + personalBill + " Be the hero and just cover the whole thing.")
} else
{
    console.log('$' + personalBill);
}


//console.log(billSplitter(bill, tipPercentage, numberOfSplits))



/* if(nextThing=== 'isJD'){
    const nameToCheckAgainst ='JD'
    const result = checkIfSameName(nameToCheckAgainst, name);
   console.log(result);
} else if (nextThing=== 'isColin'){
    const nameToCheckAgainst ='Colin'
    const result = checkIfSameName(nameToCheckAgainst, name);
    console.log(result);
} */