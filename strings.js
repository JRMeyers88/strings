
var string = document.getElementById("input").addEventListener('keyup' function(event){
	if (event.which === 13) {
		doTheThing()
	}
});
var button = document.getElementById("button").addEventListener("click", doTheThing);
var gimmeIt = document.getElementById("box");


function doTheThing(){
	var newString = string.value.split("");
	var revString = reversal(newString);
	gimmeIt.innerHTML += alphabits(newString);
	gimmeIt.innerHTML += palindrome(newString, revString);
}

function reversal(str) {
	var rev = str.reverse().join("");
	gimmeIt.innerHTML += `<p>${rev}</p>`;
	return rev
}

function alphabits(str) {
	return `<p>${str.sort().join("")}</p>`;
}

function palindrome(str, revstr) {
	if (revstr === string.value) {
		return `<p>This is a palindrome</p>`
	} else {
		return `<p>This is not a palindrome</p>`
	}
}



// var testString = "";
// reversal(testString);
// alphabits(testString);
// palindrome(testString);

//limit to text only
// function alphaOnly(event) {
//   var key = event.keyCode;
//   return ((key >= 65 && key <= 90) || key == 8 || key == 32);
// };