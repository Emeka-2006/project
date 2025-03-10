//1
function getStreamingAccess(plan) {
    if (plan === "Basic") {
        access = "SD content"
    } else if (plan === "Standard") {
        access = "HD content"
    } else if (plan === "Premium") {
        access = "4K content"
    } else {
        access = "Invalid plan"
    }
    console.log(access);
}
getStreamingAccess("Basic")

//2
function canWithdraw(balance, withdrawalAmount, dailyLimit, isAccountFrozen) {
    if (isAccountFrozen = "no" && withdrawalAmount <= balance && withdrawalAmount <= dailyLimit){
        result = "user can withdraw "
    }else{
        result = "user can't withdraw"
    }
    console.log(result);
}
canWithdraw(500, 300, 600, "no")


//3
/*function checkPasswordStrength(password) {
    if (password.length < 6) {
        strength = "Weak"
    } else if (password.length <= 10 && hasNumber) {
        strength = "Medium"
    } else if (password.length > 10 && hasNumber && hasSpecialChar) {
        strength = "Strong"
    } else {
        strength = "input password"
    }
    
    console.log(strength);
}

checkPasswordStrength("hehehee")
*

//4
function calculateParkingFee(hoursParked, isOvernight, isOvernightfee) {
    let fee = 0;
    if (hoursParked <= 2) {
        fee = "free"
    } else if (hoursParked >= 3 && hoursParked <= 5) {
        fee = 5
    }
    else if (hoursParked > 5) {
        fee = 10
    }
    else if (isOvernight = true) {
        isOvernightfee = fee + 15
    }else{
        fee = "invalid"
    }
    console.log(`total fee: ${fee, isOvernightfee}$`);
}
calculateParkingFee(6, true)

function isEligibleForBonus(yearsWorked, majorProjects, isEmployeeOfTheYear) {
    if (yearsWorked >= 2 && majorProjects >= 5) || (isEmployeeOfTheYear)
    console.log(eligible);
}
*/