/**
 * helper function to print to the console (kinda pointless)
 */
function printToConsole(value) {
    console.log(value)
}

var input = document.getElementById("input");
// Listen for key up event on the enter key when focused on the form
input.addEventListener("keyup", function(event) {
	if (event.keyCode === 13) {
		event.preventDefault();
		// call the buttons onclick function - randomize()
		document.getElementById("button").click();
	}
});


