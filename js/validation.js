/**
 * 

 */
$.getScript("translate-collection.js");

function validation(sqm) {

	var areThereErros;
	
	if (sqm < 1) {
		document.getElementById("sqm-error").textContent = lang.sqm_small;
		areThereErros = true;
	} else if (sqm > 10000) {
		document.getElementById("sqm-error").textContent = lang.sqm_big;
		areThereErros = true;
	}

	console.log(areThereErros);
	return areThereErros;
}