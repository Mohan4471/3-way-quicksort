const container = document.querySelector(".data-container");



function checkUserInput() {
	let input1 = document.getElementById('v1').value;
	let input2 = document.getElementById('v2').value;
	let input3 = document.getElementById('v3').value;	

	if((input1 == "" || input1 < 0) || (input2 == "" || input2 < 0) || (input3 == "" || input3 < 0)) {
		alert("1. Values below 0 not allowed\n2. Empty input fields not allowed");
		return false;
	}

	return true;
}




// function to generate bars
function generateBars(num = 20) {
	
//for loop to generate 20 bars
	let var1 = document.getElementById('v1').value;
	let var2 = document.getElementById('v2').value;
	let var3 = document.getElementById('v3').value;

	/*
	let var1 = Math.floor(Math.random() * 30);
	let var2 = Math.floor(Math.random() * 30) + 30;
	let var3 = Math.floor(Math.random() * 30) + 60;
	*/

	var randomList = [];
	randomList[0] = var1;
	randomList[1] = var2;
	randomList[2] = var3;

for (let i = 0; i < num; i += 1) {

	let value = randomList[Math.floor(Math.random() * randomList.length)];

	// To create element "div"
	const bar = document.createElement("div");

	// To add class "bar" to "div"
	bar.classList.add("bar");

	// Provide height to the bar
	bar.style.height = `${value * 3}px`;

	// Translate the bar towards positive X axis
	bar.style.transform = `translateX(${i * 30}px)`;
	
	// To create element "label"
	const barLabel = document.createElement("label");

	// To add class "bar_id" to "label"
	barLabel.classList.add("bar_id");

	// Assign value to "label"
	barLabel.innerHTML = value;
	
	// Append "Label" to "div"
	bar.appendChild(barLabel);

	// Append "div" to "data-container div"
	container.appendChild(bar);
}
}



// function to perform "Three wayQuick sort"
async function threeWayQuickSort(delay=3) {
	let bars = document.querySelectorAll(".bar");

// Assign 0 to min_idx
var min_idx ;
for (var i = 0; i < bars.length; i += 1) {

	// Assign i to min_idx
	min_idx = i;

	// Provide darkblue color to the ith bar
	bars[i].style.backgroundColor = "darkblue";
	for (var j = i+1 ; j < bars.length; j += 1) {

	// Provide red color to the jth bar
	bars[j].style.backgroundColor = "red";
		
	// To pause the execution of code for 10 milliseconds
	await new Promise((resolve) =>
		setTimeout(() => {
		resolve();
		}, 5)
	);

	// To store the integer value of jth bar to var1
	var val1 = parseInt(bars[j].childNodes[0].innerHTML);

	// To store the integer value of (min_idx)th bar to var2
	var val2 = parseInt(bars[min_idx].childNodes[0].innerHTML);
		
	// Compare val1 & val2
	if (val1 < val2) {
		if (min_idx !== i) {

		// Provide skyBlue color to the (min-idx)th bar
		bars[min_idx].style.backgroundColor = " rgb(24, 190, 255)";
		}
		min_idx = j;
	} else {

		// Provide skyBlue color to the jth bar
		bars[j].style.backgroundColor = " rgb(24, 190, 255)";
	}
	}

	// To swap ith and (min_idx)th bar
	var temp1 = bars[min_idx].style.height;
	var temp2 = bars[min_idx].childNodes[0].innerText;
	bars[min_idx].style.height = bars[i].style.height;
	bars[i].style.height = temp1;
	bars[min_idx].childNodes[0].innerText = bars[i].childNodes[0].innerText;
	bars[i].childNodes[0].innerText = temp2;
	
	// To pause the execution of code for 10 milliseconds
	await new Promise((resolve) =>
	setTimeout(() => {
		resolve();
	}, 5)
	);

	// Provide skyBlue color to the (min-idx)th bar
	bars[min_idx].style.backgroundColor = " rgb(24, 190, 255)";

	// Provide lightGreen color to the ith bar
	bars[i].style.backgroundColor = " rgb(49, 226, 13)";
}

// To enable the button "Generate New Array" after final(sorted)
document.getElementById("Button1").disabled = false;
document.getElementById("Button1").style.backgroundColor = "#6f459e";

// To enable the button "threeWayQuickSort" after final(sorted)
document.getElementById("Button2").disabled = false;
document.getElementById("Button2").style.backgroundColor = "#6f459e";
}



// Call "generateBars" function
// function to generate new random array
function generate()
{
	if(checkUserInput()) {
		generateBars();
	}
}

// function to disable the button
function disable()
{
// To disable the button "Generate New Array"
document.getElementById("Button1").disabled = true;
document.getElementById("Button1").style.backgroundColor = "#d8b6ff";

// To disable the button "threeWayQuickSort"
document.getElementById("Button2").disabled = true;
document.getElementById("Button2").style.backgroundColor = "#d8b6ff";
}
