//https://github.com/juanmaguitar/exercises-javascript/tree/master/01-first-steps

//Integer Numbers Range

//Write a function in Javascript that having two integers x1 and x2 returns all the integers between them. If x2 es lower than x1 it should return -1

function range(x1,x2) {	
	if (x1>x2) {
		return -1;
	} else {
		for (i=x1 + 1; i<x2; i++){
			return i;
			}
		}
	}

range (5,10);