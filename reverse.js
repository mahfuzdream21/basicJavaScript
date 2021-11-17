const grettings = 'Hello, How Are You?';


function reverseString(text){
    let reverse = '';
    for(const letter of text){
        reverse  = letter + reverse;
        console.log(reverse);
    }
    // return reverse;
}

const afterReverse = reverseString(grettings);
console.log(afterReverse);