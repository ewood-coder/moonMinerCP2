let triforce = 0;

let clickUpgrades = [
	{
		name: 'pickaxe',
		emoji: '⛏️',
		price: 50,
		quantity: 0,
		multiplier: 1
	},
	{
		name: 'drill',
		emoji: '🪛',
		price: 250,
		quantity: 0,
		multiplier: 5
	}
];

let automaticUpgrades = [
	{
		name: 'mousetronaut',
		emoji: '🐭',
		price: 1000,
		quantity: 0,
		multiplier: 10
	},
	{
		name: 'space-station',
		emoji: '🛰️',
		price: 50000,
		quantity: 0,
		multiplier: 100
	}
];



function mine() {
	triforce++

	let initialValue = 0
	const collectorCount = clickUpgrades.reduce(
		(accumulator, upgrade) => accumulator + (upgrade.multiplier * upgrade.quantity),
		initialValue
	);

	triforce += collectorCount

	updateTriforce()
}

function updateTriforce() {
	let triforceElem = document.getElementById('triforce')
	let triforceHTML = ''

	triforceHTML += `<span id="triforce" class="fs-6 pt-3 me-2">${triforce}</span>`

	triforceElem.innerHTML = triforceHTML
}


// NOTE: Functions for buying and updating upgrades
function buyClickUpgrade(name) {
	let upgrade = clickUpgrades.find((upgrade) => upgrade.name == name)
	if (triforce < upgrade.price) {
		console.log('🪙 NOT ENOUGH FUNDS 🪙')
		console.log("")
		return
	}
	else {
		triforce -= upgrade.price
		upgrade.quantity++
		upgrade.price += 100
		console.log("Purchased:", upgrade.emoji, upgrade.name, upgrade.emoji)
		console.log("Quantity Held:", upgrade.quantity)
		console.log("")
	}

	updateClickButtons()
	updateClickUpgradesCount()
	updateTriforce()
}

function updateClickUpgradesCount() {
	let clickUpgradeElem = document.getElementById('clickUpgradeCount')
	let clickUpgradeHTML = ''

	clickUpgrades.forEach((upgrade) => {
		clickUpgradeHTML += `
		<span class="d-flex align-items-center mb-4">
			<h3 class="borderBox text-center">${upgrade.quantity}</h3>
			<h5 class="ms-3 newFont me-4">${upgrade.name}s</h5>
			<h1><i class="mdi mdi-arrow-right-bold"></i></h1>
			<h3 class="borderBox ms-3 text-center">
				+${upgrade.multiplier * upgrade.quantity}
			</h3>
		</span>
		`
	})
	clickUpgradeElem.innerHTML = clickUpgradeHTML



	// NOTE: This is the part that affects the auto clicker display
	let initialValue = 1
	let clickCountElem = document.getElementById('clickCollectorCount')

	const collectorCount = clickUpgrades.reduce(
		(accumulator, upgrade) => accumulator + (upgrade.multiplier * upgrade.quantity),
		initialValue
	);
	clickCountElem.innerText = '+' + collectorCount.toString()
}

function buyAutomaticUpgrade(name) {
	let upgrade = automaticUpgrades.find((upgrade) => upgrade.name == name)
	if (triforce < upgrade.price) {
		console.log('🪙 NOT ENOUGH FUNDS 🪙')
		console.log("")
		return
	}
	else {
		triforce -= upgrade.price
		upgrade.quantity++
		upgrade.price += 500
		console.log("Purchased:", upgrade.emoji, upgrade.name, upgrade.emoji)
		console.log("Quantity Held:", upgrade.quantity)
		console.log("")
	}

	updateAutoButtons()
	updateAutomaticUpgradesCount()
	updateTriforce()
}

function updateAutomaticUpgradesCount() {
	let automaticUpgradeElem = document.getElementById('automaticUpgradeCount')
	let automaticUpgradeHTML = ''

	automaticUpgrades.forEach((upgrade) => {
		automaticUpgradeHTML += `
		<span class="d-flex align-items-center mb-4">
			<h3 class="borderBox text-center">${upgrade.quantity}</h3>
			<h5 class="ms-3 newFont me-5">${upgrade.name}</h5>
			<h1><i class="mdi mdi-timer-outline"></i></h1>
			<h3 class="borderBox ms-3 text-center">
				+${upgrade.multiplier * upgrade.quantity}
			</h3>
		</span>
		`
	})
	automaticUpgradeElem.innerHTML = automaticUpgradeHTML



	// NOTE: This is the part that affects the auto clicker display
	let initialValue = 0
	let collectorCountElem = document.getElementById('autoCollectorCount')

	const collectorCount = automaticUpgrades.reduce(
		(accumulator, upgrade) => accumulator + (upgrade.multiplier * upgrade.quantity),
		initialValue
	);
	collectorCountElem.innerText = '+' + collectorCount.toString()
}


// NOTE: Updates the pricing on the HTML of buttons
function updateClickButtons() {
	let initialValue = 0

	clickUpgrades.forEach((upgrade) => {
		let clickButtonElem = document.getElementById(upgrade.name + '-btn')
		clickButtonElem.innerHTML = `${upgrade.price}&nbsp;<i class="mdi mdi-triforce"></i>`
	})
}

function updateAutoButtons() {
	let initialValue = 0

	automaticUpgrades.forEach((upgrade) => {
		let autoButtonElem = document.getElementById(upgrade.name + '-btn')
		autoButtonElem.innerHTML = `${upgrade.price}&nbsp;<i class="mdi mdi-triforce"></i>`
	})
}


// NOTE: function for collecting the auto upgrades
function collectAutoUpgrades() {
	let initialValue = 0

	const collectorCount = automaticUpgrades.reduce(
		(accumulator, upgrade) => accumulator + (upgrade.multiplier * upgrade.quantity),
		initialValue
	);
	triforce += collectorCount

	updateTriforce()
}

setInterval(collectAutoUpgrades, 3000);