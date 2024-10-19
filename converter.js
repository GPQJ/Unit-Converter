const inputUnit = document.getElementById("input-field")
const convertBtn = document.getElementById("convert-btn")
const lengthField = document.getElementById("length-conversion")
const volumeField = document.getElementById("volume-conversion")
const massField = document.getElementById("mass-conversion")

convertBtn.addEventListener("click", renderConversion)

const conversionRates = {
	lengths: {
	  metricUnit: "meters",
	  imperialUnit: "feet",
	  metricToImperial: 3.280,
	  imperialToMetric: 0.3048,
	},
	volume: {
	  metricUnit: "liters",
	  imperialUnit: "gallons",
	  metricToImperial: 0.219,
	  imperialToMetric: 4.546,
	},
	mass: {
	  metricUnit: "kilograms",
	  imperialUnit: "pounds",
	  metricToImperial: 2.204,
	  imperialToMetric: 0.453,
	}
}

function convertUnits(conversionType) {

	let inputValue = inputUnit.value
	let metricConverted  = (inputValue * conversionType.metricToImperial).toFixed(3)
	let imperialConverted  = (inputValue * conversionType.imperialToMetric).toFixed(3)

	let fullConversion = `${inputValue} ${conversionType.metricUnit} = ${metricConverted} ${conversionType.imperialUnit} | 
	${inputValue} ${conversionType.imperialUnit} = ${imperialConverted} ${conversionType.metricUnit}`

	return fullConversion
}

function renderConversion() {

	if (!inputUnit.value) return

	lengthField.textContent = convertUnits(conversionRates.lengths)
	volumeField.textContent = convertUnits(conversionRates.volume)
	massField.textContent = convertUnits(conversionRates.mass)
	inputUnit.focus()
}
 