function feetToInch(feet){
	const inch = feet * 12;
	return inch
}

const totalInch = feetToInch(50);
// console.log(totalInch);



function centimeterToMeter(centimeter){
	const meter = centimeter * 0.01;
	return meter
}

const totalMeter = centimeterToMeter(500);
// console.log(totalMeter);



// function pageRequirments(book1, book2, book3){
// 	const firstBook = 100;
// 	const secondBook = 200;
// 	const thirdBook = 300;

// 	const firstPera = firstPera * book1;
// 	const secondPera = secondPera * book2;
// 	const thirdPera = thirdPera * book3;

// 	const totalBook = firstBook + secondBook + thirdBook;
// 	const totalPage = totalBook * (book1 + book2 + book3);
// 	return totalPage;

// }

// const totalPageRequird = pageRequirments(1,2,1);
// console.log(totalPageRequird);

function pageRequirments(book1,book2,book3){
	const pageNeed1 = 100 * book1;
	const pageNeed2 = 200 * book2;
	const pageNeed3 = 300 * book3;

	const totalPage = pageNeed1 + pageNeed2 + pageNeed3;

	return totalPage;

}

const totalPageRequird = pageRequirments(0,0,50);
console.log(totalPageRequird);