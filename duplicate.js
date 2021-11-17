

const names = ['abul','dabul','gabul','kabul','dabul','abul','habul','ebul','abul'];


function duplicateNames(names){
    const uniquNames = [];
    for(let element of names){
        console.log(element);
        if(uniquNames.indexOf(element) == -1){
            uniquNames.push(element)
        }
    }
    return(uniquNames);
    }
    

const run = duplicateNames(names);
console.log(run);