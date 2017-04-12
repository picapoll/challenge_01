/* https://github.com/juanmaguitar/exercises-javascript/tree/master/01-first-steps

Multiplications table
Write a function that writes in the console the multiplication table (from 1 to 10)

Hint: https://msdn.microsoft.com/en-us/library/2yfce773(v=vs.94).aspx */
var multiplications = "";
for (i = 0; i<=10; i++){
	for (j=1; j<=10; j++){ 
		//return i*j;
		multiplications+= i*j + " ";
	}
}
console.log(multiplications)