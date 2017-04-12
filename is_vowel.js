/* https://github.com/juanmaguitar/exercises-javascript/tree/master/01-first-steps
 
isVowel() function
Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise. */

var text= prompt ("introdueix un text:");

function isVowel(){
	if (text.match("a"||"e"||"i"||"o"||"u")){
		return true;
	}else {
	  alert (" El text no conté vocals! ")
	}
 
}

isVowel();