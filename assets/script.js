// WEB STORAGE ON USERS  - localstorage

/* Algoritme der skaber kompatibilitet med alle browsere MÅ IKKE ÆNDRES !!! */
if (!window.localStorage) {
  Object.defineProperty(window, "localStorage", new (function () {
    var aKeys = [], oStorage = {};
    Object.defineProperty(oStorage, "getItem", {
      value: function (sKey) { return sKey ? this[sKey] : null; },
      writable: false,
      configurable: false,
      enumerable: false
    });
    Object.defineProperty(oStorage, "key", {
      value: function (nKeyId) { return aKeys[nKeyId]; },
      writable: false,
      configurable: false,
      enumerable: false
    });
    Object.defineProperty(oStorage, "setItem", {
      value: function (sKey, sValue) {
        if(!sKey) { return; }
        document.cookie = escape(sKey) + "=" + escape(sValue) + "; expires=Tue, 19 Jan 2038 03:14:07 GMT; path=/";
      },
      writable: false,
      configurable: false,
      enumerable: false
    });
    Object.defineProperty(oStorage, "length", {
      get: function () { return aKeys.length; },
      configurable: false,
      enumerable: false
    });
    Object.defineProperty(oStorage, "removeItem", {
      value: function (sKey) {
        if(!sKey) { return; }
        document.cookie = escape(sKey) + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
      },
      writable: false,
      configurable: false,
      enumerable: false
    });
    Object.defineProperty(oStorage, "clear", {
      value: function () {
        if(!aKeys.length) { return; }
        for (var sKey in aKeys) {
          document.cookie = escape(sKey) + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
        }
      },
      writable: false,
      configurable: false,
      enumerable: false
    });
    this.get = function () {
      var iThisIndx;
      for (var sKey in oStorage) {
        iThisIndx = aKeys.indexOf(sKey);
        if (iThisIndx === -1) { oStorage.setItem(sKey, oStorage[sKey]); }
        else { aKeys.splice(iThisIndx, 1); }
        delete oStorage[sKey];
      }
      for (aKeys; aKeys.length > 0; aKeys.splice(0, 1)) { oStorage.removeItem(aKeys[0]); }
      for (var aCouple, iKey, nIdx = 0, aCouples = document.cookie.split(/\s*;\s*/); nIdx < aCouples.length; nIdx++) {
        aCouple = aCouples[nIdx].split(/\s*=\s*/);
        if (aCouple.length > 1) {
          oStorage[iKey = unescape(aCouple[0])] = unescape(aCouple[1]);
          aKeys.push(iKey);
        }
      }
      return oStorage;
    };
    this.configurable = false;
    this.enumerable = true;
  })());
}
/*ALgoritme slut*/

/* our local storage */

// accordion script //////////////////////////////////////////////////////////////////////////////

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

// function til login /////////////////////////////////////////////////////////////////////////////
function check(form)
{
  if(form.userid.value == "john@doe.com" && form.pswrd.value == "123")
  {
    window.open('index.html')
  }
  else {
    alert("The username is incorrect")
  }
}

//dropdown Function /////////////////////////////////////////////////////////////////////////////////

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

////////// infobox script /////////////////////////////////////////////////////////////////////////////

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

////// Lesson Builder Script ////////

function createLessonPlan() {
	var LessonPlanString = localStorage.getItem("LessonPlan");
	var nextID = "0";
	var LessonPlanArray = [];
	if (LessonPlanString != null) {
		LessonPlanArray = JSON.parse(LessonPlanString);
		nextID = LessonPlanArray.length;
	}
	var newLessonPlan = [nextID, "Untitled", "0", "0", "", []];
	LessonPlanArray.push(newLessonPlan);
	var LessonPlanArrayString = JSON.stringify(LessonPlanArray);
	localStorage.setItem('LessonPlan',LessonPlanArrayString);
	var currentLessonPlan = nextID;
	localStorage.setItem('currentLessonPlanID', currentLessonPlan);
	console.log(currentLessonPlan);
	showLessonPlans();
}

function setCurrentLessonPlan(id) {
	var currentLessonPlanID = JSON.stringify(id);
	console.log(currentLessonPlanID);
	localStorage.setItem('currentLessonPlanID',id);
}

function showLessonPlans() {
	var LessonPlanArray = [];
	var LessonPlanString = localStorage.getItem('LessonPlan');
	var LessonPlanList = "";
	//console.log(LessonPlanString);
	if(LessonPlanString != null) {
		LessonPlanArray = JSON.parse(LessonPlanString);
		console.log("lessonplanarray: "+LessonPlanArray);
		for(var i=0;i<LessonPlanArray.length;i++) {

			LessonPlanList +=  '<div class="lessonplanlistitem flexcontainer"><div><img class="mylessonplanimg" src="assets/img/lessonplanimg2.jpg" alt="Lesson Image"></div><div><h3> ' + LessonPlanArray[i][1] + '</h3><p>Subject: ' + LessonPlanArray[i][2] + '</p><p>Difficulty: ' + LessonPlanArray[i][3] + '</div><div><a href="lessonplanbuilder.html" class="ctaButtonLink widebutton" onclick="setCurrentLessonPlan('+LessonPlanArray[i][0] +')">Edit</a><a href="" class="redButtonLink" onclick="'+LessonPlanArray[i][0] +'">Delete</a></div></div>';
		}
	} else {
		LessonPlanList = "You have no custom Lesson Plans.";
	}
	//console.log(LessonPlanList);
	document.getElementById("myLPListholder").innerHTML = LessonPlanList;
}

function editLessonPlan() {
	var currentLessonPlanID = localStorage.getItem('currentLessonPlanID');
	//var currentLessonPlanIDString = JSON.stringify(currentLessonPlanID);
	//console.log(currentLessonPlanIDString);
	var LessonPlanString = localStorage.getItem('LessonPlan');
	var LessonPlanArray = [];
	LessonPlanArray = JSON.parse(LessonPlanString);
	//console.log(LessonPlanArray);
	//console.log(LessonPlanArray[currentLessonPlanID-1]);

	var currentTitle = LessonPlanArray[currentLessonPlanID][1];
	document.getElementById("lpTitle").innerHTML = currentTitle;

	var currentSubject = LessonPlanArray[currentLessonPlanID][2];
	switch (currentSubject) {
		case "":
			document.getElementById("lpSubjectSelector").selectedIndex = 0;
			console.log("filled the empty");
			break;
		case "0":
			document.getElementById("lpSubjectSelector").selectedIndex = 0;
			console.log("subject coding selected");
			break;
		case "1":
			document.getElementById("lpSubjectSelector").selectedIndex = 1;
			break;
		case "2":
			document.getElementById("lpSubjectSelector").selectedIndex = 2;
			break;
		case "3":
			document.getElementById("lpSubjectSelector").selectedIndex = 3;
			break;
	}

	var currentDiff = LessonPlanArray[currentLessonPlanID][3];
		switch (currentDiff) {
		case "":
			document.getElementById("lpDifficultySelector").selectedIndex = 0;
			break;
		case "0":
			document.getElementById("lpDifficultySelector").selectedIndex = 0;
			break;
		case "1":
			document.getElementById("lpDifficultySelector").selectedIndex = 1;
			break;
		case "2":
			document.getElementById("lpDifficultySelector").selectedIndex = 2;
			break;
		case "3":
			document.getElementById("lpDifficultySelector").selectedIndex = 3;
			break;
	}

	var currentDesc = LessonPlanArray[currentLessonPlanID][4];
	document.getElementById("lpDescriptionBox").innerHTML = currentDesc;

	var currentLessons = [];
	currentLessons = LessonPlanArray[currentLessonPlanID][5];
	//console.log(currentTitle+", "+currentSubject+", "+currentDiff+", "+currentDesc+", "+currentLessons);
}

function renameLP() {
	//document.getElementById()
	var titleH1 = document.getElementById("lpTitle");
	var titleInput = document.createElement("input");
	titleInput.id = "lpTitleBox";
	titleInput.type = "text";
	titleInput.value = titleH1.innerHTML;
	titleInput.onblur = function() { renameLPset();};
	titleH1.parentNode.replaceChild(titleInput, titleH1);
	document.getElementById("lpTitleBox").focus();
}

function renameLPset() {
	console.log()
	var titleInput = document.getElementById("lpTitleBox");
	var titleH1 = document.createElement("h1");
	titleH1.id = "lpTitle";
	titleH1.innerHTML = titleInput.value;
	//console.log(titleH1.innerHTML)
	titleH1.onclick = function() { renameLP()};
	titleInput.parentNode.replaceChild(titleH1, titleInput);
}

//localStorage.clear();

function saveLessonPlan() {
	// Find ID på aktuelle Lesson:
	var currentLessonPlanID = localStorage.getItem('currentLessonPlanID');
	var currentLessonPlanIDString = JSON.stringify(currentLessonPlanID);
	console.log(currentLessonPlanID);

	// Hent opdaterede data fra document:
	var changedTitle = document.getElementById("lpTitle").innerHTML;
	var changedSubject = document.getElementById("lpSubjectSelector").value;
	var changedDiff = document.getElementById("lpSubjectSelector").value;
	var changedDesc = document.getElementById("lpDescriptionBox").value;
	var changedLessons = [];
	
	//console.log(changedTitle);

	// Send opdaterede data til localstorage:
	var getLessonPlanString = localStorage.getItem('LessonPlan');
	var getLessonPlan = JSON.parse(getLessonPlanString);

	for (var i=0;i<getLessonPlan.length;i++) {
		if (getLessonPlan[i][0] == currentLessonPlanID) {
			getLessonPlan[i] = [currentLessonPlanID, changedTitle,changedSubject,changedDiff,changedDesc,changedLessons];
			console.log(getLessonPlan[i]);
			var LessonPlanArrayString = JSON.stringify(getLessonPlan);
			localStorage.setItem('LessonPlan',LessonPlanArrayString);
			break;
		}
	}
}

function deleteLessonPlan() {

}