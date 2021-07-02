/**
 * 

 */

function validation(sqm) {

	var areThereErros = false;
	
	if (sqm < 1 || sqm > 10000) {
		document.getElementById("sqm-error").textContent = lang.sqm_invalid;
		areThereErros = true;
		console.log(lang.sqm_invalid);
	}

	return areThereErros;
}