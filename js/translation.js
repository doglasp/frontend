/**
 * 
 */

function retrieveTranslation(language, string) {

	//change language
	var element = document.getElementById("languague");
	element.innerHTML = language;

	//change language of the titles. 
	var element = document.getElementById("title1-word");
	element.innerHTML = language.title_one;

	element = document.getElementById("title2-word");
	element.innerHTML = language.title_two;

	element = document.getElementById("explanation-word");
	element.innerHTML = language.explanation;

	element = document.getElementById("welcome-word");
	element.innerHTML = language.welcome;

	//change language of the form elements. 
	element = document.getElementById("name-word");
	element.innerHTML = language.name;

	var element = document.getElementById("phone-word");
	element.innerHTML = language.phone;

	var element = document.getElementById("city-word");
	element.innerHTML = language.city;

	var element = document.getElementById("neighborhood-word");
	element.innerHTML = language.neighborhood;

	var element = document.getElementById("sqm-word");
	element.innerHTML = language.sqm;

	var element = document.getElementById("parking-word");
	element.innerHTML = language.parking;

	var element = document.getElementById("adress-word");
	element.innerHTML = language.adress;

	var element = document.getElementById("value-word");
	element.innerHTML = language.value;

	var element = document.getElementById("bedrooms-word");
	element.innerHTML = language.bedrooms;

	var element = document.getElementById("date-word");
	element.innerHTML = language.date;

	var element = document.getElementById("remarks-word");
	element.innerHTML = language.remarks;

	var element = document.getElementById("remember-word");
	element.innerHTML = '<input class="form-check-input" type="checkbox" id="remember" name="remember">'
		+ language.remember;

	var element = document.getElementById("button-word");
	element.innerHTML = language.button;

	//change language of the result elements
	element = document.getElementById("new-success-word");
	element.innerHTML = language.success;

	element = document.getElementById("new-name-word");
	element.innerHTML = language.name;

	var element = document.getElementById("new-phone-word");
	element.innerHTML = language.phone;

	var element = document.getElementById("new-city-word");
	element.innerHTML = language.city;

	var element = document.getElementById("new-neighborhood-word");
	element.innerHTML = language.neighborhood;

	var element = document.getElementById("new-sqm-word");
	element.innerHTML = language.sqm;

	var element = document.getElementById("new-parking-word");
	element.innerHTML = language.parking;

	var element = document.getElementById("new-adress-word");
	element.innerHTML = language.adress;

	var element = document.getElementById("new-value-word");
	element.innerHTML = language.value;

	var element = document.getElementById("new-bedrooms-word");
	element.innerHTML = language.bedrooms;

	var element = document.getElementById("new-date-word");
	element.innerHTML = language.date;

	var element = document.getElementById("new-remarks-word");
	element.innerHTML = language.remarks;

	var element = document.getElementById("new-remember-word");
	element.innerHTML = language.remembered;

	var element = document.getElementById("sqm-error");
	element.innerHTML = language.sqm_invalid;
	
		var element = document.getElementById("navbarDropdownMenuLink");
	element.innerHTML = language.language_name;
}