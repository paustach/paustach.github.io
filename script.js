function myFunction(){
	var userName = document.getElementById("userName").value;
	var email = document.getElementById("email").value;
	document.getElementById("form").innerHTML = userName + ", thank you for your details. We will be in touch via "+ email + " shortly.";
	event.preventDefault();
}