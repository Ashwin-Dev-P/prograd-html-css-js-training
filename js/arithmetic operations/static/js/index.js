function add(a, b) {
	document.getElementById("addition").innerHTML = Number(a) + Number(b);
	return;
}

function subtract(a, b) {
	document.getElementById("subtraction").innerHTML = a - b;
	return;
}

function multiply(a, b) {
	document.getElementById("multiplication").innerHTML = a * b;
	return;
}

function divide(a, b) {
	document.getElementById("division").innerHTML = a / b;
	return;
}

function modulo(a, b) {
	document.getElementById("modulo").innerHTML = a % b;
	return;
}

function calculate(event) {
	event.preventDefault();

	const a = document.getElementById("a").value;
	const b = document.getElementById("b").value;

	add(a, b);
	subtract(a, b);
	multiply(a, b);
	divide(a, b);
	modulo(a, b);

	document.getElementById("output_table").style.visibility = "visible";
}
