// 1st problem

function seerToMon(seer){
    const Mon = seer / 40;
    return Mon;
}

const totalSeer = seerToMon(400);
// console.log(totalSeer);

// 2nd problem

    const shirtPrice = 100;
    const pantPrice = 400;
    const shoesPrice = 500;

function totalSales(shirt,pant,shoes){

    const totalShirtSales = shirtPrice * shirt;
    const totalPantSales = pantPrice * pant;
    const totalShoesSales = shoesPrice * shoes;
    
    const totalSale = totalShirtSales + totalPantSales + totalShoesSales;
    return totalSale;
}

const totalSaleAmount = totalSales(10,5,2);
// console.log(totalSaleAmount);


// 3rd problem


function deliveryCost(shirtAmount){
    let cost;
    
    if(shirtAmount <= 100){
        cost = shirtAmount * 100;
        
    }
    else if(shirtAmount <= 200){
        cost = ((shirtAmount-100) * 80) + (100 * 100);
        
    }

    else{
        cost = ((shirtAmount - 200) * 50) + (100 * 80) + (100 * 100);
    }
    return cost;

}

const totalDeliveryCost = deliveryCost(100);
console.log(totalDeliveryCost);