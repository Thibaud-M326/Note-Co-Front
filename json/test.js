let dataObject = [];
let dato = null;
let opif = null;
let testP = document.getElementById("testP");
let allP = document.getElementsByClassName("allP");
let fuckthat = "";

fetch('./subjectList.json')
  .then(res => res.json())
  .then(data => {
    console.log(data.subjectList[0].grade[0].students[2].note); // accédez à une propriété en utilisant des indices

		callWhen(data);
		for(let i = 0; i < 5; i++) {
		fuckthat += `<p class="allP">hello</p>`;
		}
		testP.innerHTML = fuckthat;
		console.log(allP);
	
	})
	.catch(error => console.error(error));

function callWhen(data) {
	console.log("c'est data : ")
	console.log(data);
}



async function getData() {
	try {
		const response = await fetch('./subjectList.json')
		const dataObject = await response.json();
		return dataObject;
	} catch (error) {
		console.error(error);
	}
}


async function main() {

	dato = await getData();
	return dato;
}

// console.log("c'est dato : ");
// console.log(dato);
// console.log(dato.subjectList[0].grade[0].students[2].note);

main().then(dataSet=> opif = dataSet)
.then(opif => console.log(opif))
console.log(opif);





console.log(fuckthat);
