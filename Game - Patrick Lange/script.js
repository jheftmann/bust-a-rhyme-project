$(document).ready(function(){
	<script src="https://code.jquery.com/jquery-1.10.2.js"></script>



			alert("Lets learn RGB values!");

			console.log("Hi guys its sneaky Pat");
			var vocab = "This is part 1";

			console.log(vocab + " this is part 2");


			var answer = prompt("Are you ready to learn this?");
			if (answer == "yes"){
				$("body").alert("Let's learn RGB values")
			} else {
				$("body").alert("Okay, Goodbye!");
			}



			function yellowRGB() {
    		document.getElementById("questions").innerHTML = "RGB(255,255,0)";
			}

			function greenRGB() {
    		document.getElementById("questions").innerHTML = "RGB(0,255,0)";
    		}

    		function blueRGB() {
    		document.getElementById("questions").innerHTML = "RGB(0,0,255)";
			}

			function nextsettodays() {
    		document.getElementById("questions").innerHTML = "Now lets do some arithmetics questions";
			}




		});
