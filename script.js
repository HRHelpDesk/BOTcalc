
   
 function add(a, b)
{
    return a + b;
}

function divide(a,b)
{
    return a / b;
}

function multiply(a,b)
{
    return a * b;
}

function totalStraightCalc(a,b,c,d)
{
    var one = a * b;
    var two = c * d;
    return one + two;
    
}  

function calculateFinalPay(a,b,c)
{
    return a + b + c;
}



function calcSum() {
    let jobonehrs = document.getElementsByName("jobOne")[0].value;
    let payrate1 = document.getElementsByName("payRateone")[0].value;
    let jobtwohrs = document.getElementsByName("jobTwo")[0].value;
    let payrate2 = document.getElementsByName("payRatetwo")[0].value;
    let nondisbon = document.getElementsByName("nonDisBon")[0].value;
    
    
    
    
    
    let unroundedTotalStraghtTime = totalStraightCalc(jobonehrs,payrate1,jobtwohrs,payrate2);
    
    let totalStraightTime = parseFloat(unroundedTotalStraghtTime.toFixed(2));
    
    let totalHours = add(Number(jobonehrs), Number(jobtwohrs));
    
    
    
    let unroundedweightedAverageReularRateOfPay = divide(totalStraightTime,totalHours);
    
    let weightedAverageReularRateOfPay = parseFloat(unroundedweightedAverageReularRateOfPay.toFixed(2));
    
    let halfofRegrate = divide(weightedAverageReularRateOfPay,2);
    
    let totalOvertimeHours = totalHours - 40;
    
    let unroundedtotalOvertimePay = multiply(halfofRegrate,totalOvertimeHours);
    
    let totalOvertimePay = parseFloat(unroundedtotalOvertimePay.toFixed(2));
    
    let grossPay = add(totalStraightTime,totalOvertimePay);
    let result = parseFloat(grossPay.toFixed(2));
    let newhourly = divide(Number(nondisbon), Number(40));
    
    let nondisbonhourly = multiply(newhourly, 1.5);
    
    let bonusOt = multiply(nondisbonhourly,totalOvertimeHours);
    
    let finalPay = calculateFinalPay(result,Number(nondisbon),bonusOt);
    
    console.log(totalStraightTime);
    console.log(totalHours);
    console.log(weightedAverageReularRateOfPay);
    console.log(halfofRegrate);
    console.log(totalOvertimePay);
    console.log(totalOvertimeHours);
    console.log(totalStraightTime);
    console.log(nondisbon);
    console.log(totalOvertimeHours);
    console.log(newhourly);
    console.log(bonusOt);
    console.log(result);
    console.log(nondisbon);
    console.log(finalPay);
    
    
    
    
    
    document.getElementsByName("end")[0].innerHTML = "$" + finalPay ;
    
    document.getElementsByName("tsp")[0].innerHTML = "$" + totalStraightTime;
    document.getElementsByName("th")[0].innerHTML = totalHours;
    document.getElementsByName("warop")[0].innerHTML = "$" + weightedAverageReularRateOfPay;
    document.getElementsByName("hrr")[0].innerHTML = "$" + halfofRegrate;
    document.getElementsByName("OTH")[0].innerHTML = totalOvertimeHours;
    document.getElementsByName("TOTP")[0].innerHTML = "$" + totalOvertimePay;
    document.getElementsByName("GP")[0].innerHTML = "$" + grossPay;
    document.getElementsByName("NB")[0].innerHTML = "$" + nondisbon;
    document.getElementsByName("NH")[0].innerHTML = "$" + nondisbonhourly;
    document.getElementsByName("OTH2")[0].innerHTML = totalOvertimeHours;
    document.getElementsByName("BOT")[0].innerHTML = "$" + bonusOt;
    document.getElementsByName("end2")[0].innerHTML = "$" + finalPay;
    document.getElementsByName("GP2")[0].innerHTML = "$" + grossPay;
    document.getElementsByName("BOT2")[0].innerHTML = "$" + bonusOt;
    document.getElementsByName("NB2")[0].innerHTML = "$" + nondisbon;
    
    };





