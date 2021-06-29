/**
 * 
 */


$(function() {

	// INITIALIZE DATEPICKER PLUGIN
	$('.datepicker').datepicker({
		clearBtn: true,
		format: "dd/mm/yyyy"
	});


	// FOR DEMO PURPOSE
	$('#reservationDate').on('change', function() {
		var pickedDate = $('input').val();
		$('#pickedDate').html(pickedDate);
	});
});

function sendData() {
	alert("Submitted");

	var name = document.getElementById("name").value;
	var phone = document.getElementById("phone").value;
	var email = document.getElementById("email").value;
	var city = document.getElementById("city").value;
	var neighborhood = document.getElementById("neighborhood").value;
	var sqm = document.getElementById("sqm").value;
	var parking = document.getElementById("parking").value;
	var adress = document.getElementById("adress").value;
	var erv = document.getElementById("erv").value;
	var bedrooms = document.getElementById("bedrooms").value;
	var date = document.getElementById("date").value;
	var remarks = document.getElementById("remarks").value;
	var remember = document.getElementById("remember");

	document.getElementById("newName").textContent = name;
	document.getElementById("newPhone").textContent = phone;
	document.getElementById("newEmail").textContent = email;
	document.getElementById("newCity").textContent = city;
	document.getElementById("newNeighborhood").textContent = neighborhood;
	document.getElementById("newSqm").textContent = sqm;
	document.getElementById("newParking").textContent = parking;
	document.getElementById("newAdress").textContent = adress;
	document.getElementById("newErv").textContent = erv;
	document.getElementById("newBedrooms").textContent = bedrooms;
	document.getElementById("newDate").textContent = date;
	document.getElementById("newRemarks").textContent = remarks;
	var newRemember = document.getElementById("newRemember");
	if (remember.checked == true) {
		newRemember.style.display = "block";
	} else {
		newRemember.style.display = "none";
	}
}

