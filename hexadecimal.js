/* https://github.com/juanmaguitar/exercises-javascript/tree/master/01-first-steps

Hexadecimal
Writes a function that convert a hexadecimal color, "blue" for example "#0000FF" in its RGB representation rgb(0,0,255)". Give the function the name getRGB() and test it with this code

Hint: https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String/split */

function getRGB() {
	var color = prompt("introdueix un color en Hexadecimal")
	var a = parseInt(color.slice(1,3),16);
	var b = parseInt(color.slice(3,5),16);
	var c = parseInt(color.slice(5,7),16);
	alert ("Hexacimal Color: " +" R: "+ a +" G: " +b + " B: "+ c);
}

getRGB();
