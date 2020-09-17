function initCurrencyConverter() {
	const changeBtn = document.querySelector(".btn");
	changeBtn.onclick = calculate;

	const curInput1 = document.querySelector(".cur-input-1");
	const curInput2 = document.querySelector(".cur-input-2");
	const curItem1 = document.querySelector(".cur-item-1");
	const curItem2 = document.querySelector(".cur-item-2");
	const resultBox = document.querySelector(".rete-box");

	resultBox.innerHTML =
		"1" + curItem1.value + " = " + "0.000 " + curItem2.value;

	function calculate() {

		resultBox.innerHTML =
			"1 " + curItem1.value + " = " + "0.000 " + curItem2.value;
		const aaa = curItem1.value;
		curItem1.value = curItem2.value;
		curItem2.value = aaa;
	}

	
}

document.addEventListener("DOMContentLoaded", initCurrencyConverter);
