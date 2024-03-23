let triforce = 0;

let clickUpgrades = [
	{
		name: 'pickaxe',
		price: 100,
		quantity: 0,
		multiplier: 1
	}
];

let automaticUpgrades = [
	{
		name: 'rover',
		price: 600,
		quantity: 0,
		multiplier: 20
	}
];



function mine() {
	triforce++

	updateTriforce()
}

function updateTriforce() {
	let triforceElem = document.getElementById('triforce')
	let triforceHTML = ''

	triforceHTML += `<span id="triforce" class="fs-6 pt-3 me-2">${triforce}</span>`

	triforceElem.innerHTML = triforceHTML
}

