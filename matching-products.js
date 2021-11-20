

const products = [
    {name:'hp laptop', price: 52000},
    {name:'apple smart watch', price: 28000},
    {name:'samsung s20 phone', price: 85000},
    {name:'nikon camera', price: 55000},
    {name:'dell laptop d90', price: 44500},
    {name:'samsung smart watch', price: 4500},
    {name:'apple iphone', price: 90000},
];



function searchProducts(products,searchText){

    const findItem = [];

    for(const product of products){
        const name = product.name;
        if(name.indexOf(searchText) != -1){
            findItem.push(product);
            // console.log(name);
        }
    }
    return findItem;

}


const matchedProducts = searchProducts(products,'phone');
console.log(matchedProducts);
