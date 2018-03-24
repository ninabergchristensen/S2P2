function accordion(value,id){
	// her skal skrives en function, der får accordions til at expand/collapse
	var buttonDisplay = id;
	var accordionThis = value;
	//alert(accordionThis);
	//alert(buttonDisplay);
	if (document.getElementById(buttonDisplay).innerHTML == "+") {
		document.getElementById(buttonDisplay).innerHTML = "&minus;";
		document.getElementById(accordionThis).style.display = "block";
	} else {
		document.getElementById(buttonDisplay).innerHTML = "&plus;"
		document.getElementById(accordionThis).style.display = "none";
	}
}
