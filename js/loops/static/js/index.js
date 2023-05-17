// Bakery discount
// For loop
const discount = [15, 10, 12, 11, 13, 14, 15];

function getDiscountForbakery(event) {
	event.preventDefault();

	const billAmount = document.getElementById("bill_amount").value;

	const day = new Date().getDay();
	var discount_for_bill = billAmount * discount[day] * 0.01;

	discount_for_bill = Math.round(discount_for_bill * 100) / 100;

	var output = "";
	for (let i = 0; i < 7; i++) {
		const current_day_discount = discount[i] * 0.01 * billAmount;
		output +=
			"<tr><th>Day" +
			(Number(i) + 1) +
			"</th><td>" +
			Math.round(current_day_discount * 100) / 100 +
			"</td></tr>";
	}

	document.getElementById("discount_display_div").innerHTML =
		"Total discount for the bill today is " + discount_for_bill;

	document.getElementById("bakery_discount_table").innerHTML = output;

	document.getElementById("bakery_table").style.visibility = "visible";
}

// For of - to iterate over iterable objects
// School application status
const score_level = [
	{ status: "Outstanding to admit", marks: 90 },
	{ status: "Good to admit", marks: 70 },
	{ status: "Acceptable to admit", marks: 50 },
];

function getSchoolApplicationStatus(event) {
	event.preventDefault();

	const student_marks = document.getElementById("marks").value;

	var status = "Admission Application Rejected";
	for (const score_obj of score_level) {
		if (student_marks >= score_obj.marks) {
			status = score_obj.status;
			break;
		}
	}

	document.getElementById("status_of_application_div").innerHTML =
		"Application status: " + status;
}

// GIFT Voucher
// for in - loop through properties of object
const schemes = {
	1000: 500,
	3000: 1500,
	5000: 3000,
};

function generateGiftVoucher(event) {
	event.preventDefault();

	const purchased_items_value = Number(
		document.getElementById("purchased_items_value").value,
	);

	var gv = 0;
	for (scheme in schemes) {
		if (purchased_items_value > scheme) {
			gv = schemes[scheme];
		}
	}
	gv += 100;

	document.getElementById("gv_div").innerHTML =
		"Your gift voucher amount is: " + gv;
}
