/**
 * 

 */

function validation(sqm) {

	var areThereErros = false;

	if (sqm < 1 || sqm > 10000) {

		if (document.getElementById("languague").innerHTML.includes("pt_br")) {
			document.getElementById("sqm-error").textContent = pt_br.sqm_invalid;
		} else {
			document.getElementById("sqm-error").textContent = en_us.sqm_invalid;
		}

		areThereErros = true;
	}

	return areThereErros;
}