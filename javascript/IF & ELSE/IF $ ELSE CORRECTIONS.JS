//0
let item = 60

if (item >= 50){                               
    console.log("20%")
} else if(item >= 20){
    console.log("10%")
}else if(item >= 10){
    console.log("5%");
}else{
    console.log("0%");
}

//1
function getBulkDiscount(orderedItems) {
    let discount = 0
    if ( orderedItems >= 50){                               
        discount = 20;
    } else if(orderedItems >= 20){
        discount = 10;
    }else if(orderedItems >= 10){
        discount = 5;
    }else{
        discount = 0;
    }
    console.log(`Discount Percentage: ${discount}%`);
}
getBulkDiscount(50)

//2
function DELIVERY(shipping_method, orderTime){
    if ( shipping_method === "standard"){                               
        deliverytime = "5-7days";
    } else if(shipping_method === "Express"){
        deliverytime = "2-3days";
    }else if(shipping_method === "same day" && orderTime < 12){
        deliverytime = "same day delivery";
    }else{
        deliverytime = "unavailable";
    }
    console.log(deliverytime);
}

DELIVERY("standard", 9)

                 //OR
/*function DELIVERY(shipping_method, orderTime){
    if ( shipping_method === "standard"){                               
         console.log("deliverytime: 5 - 7 days");
    } else if(shipping_method === "Express"){
        console.log("deliverytime: 2 - 3 days")
    }else if(shipping_method === "same day" && orderTime < 12){
        console.log("deliverytime: Today")
    }else{
        console.log("invalid shipping method")
    }
    console.log(deliverytime);
}

DELIVERY("standard", 9)*/

