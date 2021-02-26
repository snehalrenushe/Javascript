document.getElementById("change_twit").onclick = function() {
	document.getElementById("textinput").style.display = "";
	document.getElementById("submit").style.display = "";
}

document.getElementById("submit").onclick = function() {
	var text = " ";

	text = document.getElementById("textinput").value;

	document.getElementById("twit").innerHTML = text;
	
}

document.getElementById("tweet").onclick = function() {
	document.getElementById("submit").style.display = "none";
	document.getElementById("textinput").style.display = "none";
	document.getElementById('textinput').value='';
	return alert('Are you sure ?? you want to tweet these ??');

}

$(document).ready(function(){
	$('.toggle').click(function(){
		$('.toggle').toggleClass('active')
		$('body').toggleClass('night')
	})
}) 

function EnableDisable(textinput) {
	var btn = document.getElementById("submit");

	if(textinput.value.trim() != "") {
		submit.disabled = false;
	} else {
		submit.disabled = true;
	}
};


