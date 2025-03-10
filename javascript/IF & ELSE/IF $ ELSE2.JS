//Bulk0 Order Discount
let orderedItems = 25;
let discount = getBulkDiscount(orderedItems);

function getBulkDiscount(quantity) {
    if (quantity >= 50) {
        return 20;
    } else if (quantity >= 20) {
        return 10;
    } else if (quantity >= 10) {
        return 5;
    } else {
        return 0;
    }
}


console.log(`For ${orderedItems} items, you get a ${discount}% discount.`);


// 1. Delivery Time Estimator
let shippingMethod = "Express";
let orderTime = 10;

function getDeliveryTime(shippingMethod, orderTime) {
    if (shippingMethod === "Standard") {
        return "5-7 days";
    } else if (shippingMethod === "Express") {
        return "2-3 days";
    } else if (shippingMethod === "Same-Day" && orderTime < 12) {
        return "Same day delivery";
    } else {
        return "Not available";
    }
}

console.log(`Delivery time: ${getDeliveryTime(shippingMethod, orderTime)}`);

// 2. Dynamic Price Surge
let currentHour = 19;
let isHighDemand = true;
let price = 100;

function applyPriceSurge(currentHour, isHighDemand, price) {
    return (currentHour >= 18 && currentHour <= 23 && isHighDemand) ? price * 1.1 : price;
}

console.log(`Updated price: ${applyPriceSurge(currentHour, isHighDemand, price)}`);

// 3. Buy-One-Get-One (BOGO) Offer Validation
let quantityPurchased = 3;
let isBOGOEligible = true;

function checkBOGOEligibility(quantityPurchased, isBOGOEligible) {
    return quantityPurchased >= 2 && isBOGOEligible;
}

console.log(`BOGO Eligibility: ${checkBOGOEligibility(quantityPurchased, isBOGOEligible)}`);

// 4. Cart Expiry System
let lastActivityHours = 50;
let isProductInStock = false;

function isCartExpired(lastActivityHours, isProductInStock) {
    return lastActivityHours > 48 || !isProductInStock;
}

console.log(`Cart expired: ${isCartExpired(lastActivityHours, isProductInStock)}`);

// 5. E-Wallet Auto-Top-Up
let walletBalance = 3;
let isAutoTopUpEnabled = true;

function autoTopUp(walletBalance, isAutoTopUpEnabled) {
    return (walletBalance < 5 && isAutoTopUpEnabled) ? walletBalance + 50 : walletBalance;
}

console.log(`New wallet balance: ${autoTopUp(walletBalance, isAutoTopUpEnabled)}`);

// 6. Product Review Approval System
let reviewText = "This is a great product! Highly recommended for everyone.";
let pastPurchases = 4;

function isReviewAutoApproved(reviewText, pastPurchases) {
    return reviewText.length >= 50 && pastPurchases >= 3;
}

console.log(`Review auto-approved: ${isReviewAutoApproved(reviewText, pastPurchases)}`);

// 7. Marketplace Buyer Protection Eligibility
let isDefective = false;
let isDelivered = false;
let daysSincePurchase = 25;

function isEligibleForRefund(isDefective, isDelivered, daysSincePurchase) {
    return isDefective || (!isDelivered && daysSincePurchase <= 30);
}

console.log(`Eligible for refund: ${isEligibleForRefund(isDefective, isDelivered, daysSincePurchase)}`);

// 8. Age Restriction for Alcoholic Products
let customerAge = 20;

function canBuyAlcohol(customerAge) {
    return customerAge >= 18;
}

console.log(`Can buy alcohol: ${canBuyAlcohol(customerAge)}`);

// 9. Multi-Factor Authentication (MFA) Check
let isNewDevice = true;
let daysSinceLastLogin = 10;

function needsMFA(isNewDevice, daysSinceLastLogin) {
    return isNewDevice || daysSinceLastLogin > 30;
}

console.log(`MFA required: ${needsMFA(isNewDevice, daysSinceLastLogin)}`);

// 10. Loan Eligibility Check for Online Credit
let creditScore = 720;
let monthlyIncome = 3500;
let coSignerCreditScore = 0;

function isEligibleForLoan(creditScore, monthlyIncome, coSignerCreditScore) {
    return (creditScore >= 700 && monthlyIncome > 3000) || coSignerCreditScore >= 750;
}

console.log(`Eligible for loan: ${isEligibleForLoan(creditScore, monthlyIncome, coSignerCreditScore)}`);
