let dataObject = [];

fetch('./subjectList.json')
  .then(res => res.json())
  .then(data => {
    console.log(data.subjectList[0].grade[0].students[2].note); // accédez à une propriété en utilisant des indices
		
		callWhen(data);
	
	})
	.catch(error => console.error(error));


function callWhen(data) {

	console.log(data);



}