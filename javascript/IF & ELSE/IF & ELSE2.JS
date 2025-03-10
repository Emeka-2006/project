let in_stock = true;
let is_logged_in = true;
let user_balance = 30;
let has_coupon = true;
let product_price= 50

//Case scenerio: A product is available for purchase if
//it is in stock
//the user is logged in
//the user has either enough balance or a valid discount coupon

if((in_stock && is_logged_in) && (user_balance >= product_price || has_coupon)) {
    console.log("YOU CAN PURCHASE THIS PRODUCT");
} else{
    console.log("YOU CANNOT PURCHASE THIS PRODUCT");   
}


//Fraud detection system (&& and ||)
/*scenerio: if a customer meet teo oe mor2 of these suspicious activities, flag the translaton as a fraud
the billing address and shipping address dont match
the order is above #500.000 
The user is using a new device*/

let address_mismatch = true;
let order_value = 500.000;
let new_deviice = false;

if((address_mismatch && order_value > 500.000) || (address_mismatch && new_deviice) || (order_value > 500.000 && new_deviice)){
    console.log("Potential fraud detected! Please verify the transaction");   
}else{
    console.log("Transaction Approved");
    
}

let vip = true;
let purchase = 250;
if((vip && purchase > 200)){
    console.log("YOU GET 20% DISCOUNT");
}else{
    console.log("YOU DON'T GET THE DISCOUNT");
}