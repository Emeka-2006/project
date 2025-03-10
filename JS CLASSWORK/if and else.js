function loan(credit, income, cosigner) {
    if(credit >= 700000 && income > 3000){
        eligible = "you are elegible(credit & income)"
    }else if(cosigner >= 750){
        eligible = "you are elegible(cosigner)"
    }else{
        eligible = " You are not eligible for loan"
    }
    console.log(eligible);
    
}
loan(70, 600, 600 )