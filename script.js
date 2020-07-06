'use strict';

window.addEventListener('load', () => {
	var Clear = function () {
		document.getElementById("output-value").innerText = "";
		document.getElementById("history-value").innerText = "";
	}
	var Backspace = function () {
		var output = Number(document.getElementById("output-value").replace(/,/g, ''));
		if (output) {
			output = output.substr(0, output.length - 1);
			if (output == "") {
				document.getElementById("output-value").innerText = output;
			}
			else {
				if (output == "-") {
					return "";
				}
				var n = Number(output);
				var value = n.toLocaleString("en");
				document.getElementById("output-value").innerText = value;
			}
		}
	}
	var EnterNumber = function (id) {
		var output = reverseNumberFormat(document.getElementById("output-value").innerText);
		if (output != NaN) { //‗ךשמ קטסכמ
			output = output + id;
			if (output == "") {
				document.getElementById("output-value").innerText = output;
			}
			else {
				if (output == "-") {
					return "";
				}
				var n = Number(output);
				var value = n.toLocaleString("en");
				document.getElementById("output-value").innerText = value;
			}
		}
	}
	var Functions = function (id) {
		var output = document.getElementById("output-value").innerText;
		var history = document.getElementById("history-value").innerText;
		if (output == "" && history != "") {
			if (isNaN(history[history.length - 1])) {
				history = history.substr(0, history.length - 1);
			}
		}
		if (output != "" || history != "") {
			output = output == "" ? output : reverseNumberFormat(output);
			history = history + output;
			if (id == "=") {
				var result = eval(history);
				if (result == "") {
					document.getElementById("output-value").innerText = result;
                  
				}
				else {
					if (result == "-") {
						return "";
					}
					var n = Number(result);
					var value = n.toLocaleString("en");
					document.getElementById("output-value").innerText = value;
					document.getElementById("history-value").innerText = "";
                  
				}
                  

			}
			else {
				history = history + id;
				document.getElementById("output-value").innerText = "";
				document.getElementById("history-value").innerText = history;

			}
		}
    }
    var Avg = function(id){

    }
	const controller = new Controler("operator", "number", Clear, Backspace, EnterNumber, Functions, Avg);
});

function reverseNumberFormat(num) {
	return Number(num.replace(/,/g, ''));
}





