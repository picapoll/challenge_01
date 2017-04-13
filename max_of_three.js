/* https://github.com/juanmaguitar/exercises-javascript/tree/master/01-first-steps

maxOfThree() function
Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them. */

var numbers = "";

function max(a,b,c){
	return Math.max(a,b,c);
}
max(2,3,5);

 function f1(){ var a = 1; return f2(); }
 function f2(){ return a; }
 f1();