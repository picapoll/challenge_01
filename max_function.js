/* https://github.com/juanmaguitar/exercises-javascript/tree/master/01-first-steps

max() function
Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript.*/

var text= prompt ("introdueix un text:");

function isVowel(){
	if (text.match("a"||"e"||"i"||"o"||"u")){
		return true;
	}else {
	  alert (" El text no conté vocals! ")
	}
}

isVowel();