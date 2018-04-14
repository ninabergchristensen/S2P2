// accordion script

function accordion(value,id){
	// her skal skrives en function, der får accordions til at expand/collapse
	var buttonDisplay = id;
	var accordionThis = value;
	//alert(accordionThis);
	//alert(buttonDisplay);
	if (document.getElementById(buttonDisplay).innerHTML == "Show code") {
		document.getElementById(buttonDisplay).innerHTML = "Hide code";
		document.getElementById(buttonDisplay).className = "accButtonOpen";
		document.getElementById(accordionThis).style.display = "block";
	} else {
		document.getElementById(buttonDisplay).innerHTML = "Show code";
		document.getElementById(buttonDisplay).className = "accButton";
		document.getElementById(accordionThis).style.display = "none";
	}
}

// function til login
function check(form)
{
  if(form.userid.value == "John" && form.pswrd.value == "123")
  {
    window.open('index.html')
  }
  else {
    alert("The username is incorrect")
  }
}

//dropdown Function

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

////////// infobox script

function infobox(event) {
	var targetObject = event.target;
	var newInfobox = document.createElement("div");
	var newInfoboxText = targetObject.title;
    newInfobox.innerHTML = "<p>" + newInfoboxText + "</p>";
    newInfobox.id = "infobox";
    document.getElementById("badgeholder").appendChild(newInfobox); // virker
    //document.targetObject.after(newInfobox);
    //alert(targetObject);
}

function clearInfobox(event) {
	//var klaphat = document.getElementById("infobox");
	//alert(klaphat);
	var removeThis = document.getElementById("infobox");
	document.getElementById("badgeholder").removeChild(removeThis);
}