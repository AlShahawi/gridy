var elements = document.querySelectorAll(".row div[class*=\"col-\"]");
for(var i = 0; i < elements.length; i++) {
	elements[i].innerHTML =  elements[i].className + elements[i].innerHTML;
}
