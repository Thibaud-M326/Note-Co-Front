const tbody = document.getElementById("tbody");
let studentChar = "";
const gradeValue = localStorage.getItem("gradeValue");
const start = document.getElementById("start");
const coefficientChange = document.getElementById("coefficientChange");
const optionEcrit = document.getElementById("optionEcrit");
const optionOral = document.getElementById("optionOral");
const inputNote = document.getElementsByClassName("inputNote");
const buttonModify = document.getElementById("buttonModify");

fetch('../../json/subjectList.json')
  .then(res => res.json())
  .then(jsonSubj => {
	
    fetch('../../json/students.json')
    .then(resp => resp.json())
    .then(jsonStudents => {

        for(let i = 0; i < 6; i++) {
            studentChar += 
            `
            <tr>
            <td>${jsonStudents.students[i].firstname}</td>
            <td><input type="number" class="inputNote" value="${jsonSubj.subjectList[0].grade[gradeValue].students[i].note}"></td>
            </tr>
            `;
        }

        tbody.innerHTML = studentChar;

        buttonModify.addEventListener("click", () => OnchangeNote(jsonStudents, gradeValue))


        start.value = jsonSubj.subjectList[0].grade[gradeValue].date;
        coefficientChange.value = jsonSubj.subjectList[0].grade[gradeValue].coef;

        if(jsonSubj.subjectList[0].grade[gradeValue].type == "ecrit") {
            optionEcrit.selected = true; 

        } else if (jsonSubj.subjectList[0].grade[gradeValue].type == "oral") {
            optionOral.selected = true; 

        }

    })
    .catch(error => console.error(error));
})
.catch(error => console.error(error));




function OnchangeNote(jsonSubj, gradeValue) {
    let coef = document.getElementById("coefficientChange").value;
    let date = document.getElementById("start").value;
    let type = document.getElementById("quarters").value;
    let students = []; 

    for(let i = 0; i < 6; i++) {
        students.push(inputNote[i].value);
        
    }


    console.log(type);
    console.log(date);
    console.log(coef);
    console.log(students);

    const gradeData = new FormData();
    gradeData.append("index", gradeValue)
    gradeData.append("type", type);
    gradeData.append("date", date);
    gradeData.append("coef", coef);
    gradeData.append("students", JSON.stringify(students));

    console.log(gradeData);


    fetch("../../php/teacherChangeNote.php", {
        method: "POST",
        body: gradeData
    })
    .then(response => {
        if(response.status == 200) {
            return response.text()
        } else {
            throw new Error("Erreur lors de l'envoi de la requette")
        }
    })
    .then(data => {
        console.log(data);
        window.location.href = "http://localhost/Note-Co-Front/html/teacherPage/teacherHome.html";
    })
    .catch(error => {
        console.log(error)
    })
}