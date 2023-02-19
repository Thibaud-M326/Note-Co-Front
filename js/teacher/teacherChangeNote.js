const tbody = document.getElementById("tbody");
let studentChar = "";
const gradeValue = localStorage.getItem("gradeValue");
const start = document.getElementById("start");
const coefficientChange = document.getElementById("coefficientChange");
const optionEcrit = document.getElementById("optionEcrit");
const optionOral = document.getElementById("optionOral");
const inputNote = document.getElementsByClassName("inputNote");
const buttonModify = document.getElementById("buttonModify");
const buttonAddRating = document.getElementById("buttonAddRating");
const classAverageNote = document.getElementById("classAverageNote");
const trashButton = document.getElementById("trashButton");
const textModalDeletion  = document.getElementById("textModalDeletion");
const cancelDeletion = document.getElementsByClassName("cancelDeletion")[0];
const deleteGradeButton = document.getElementsByClassName("deleteGradeButton")[0];
var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];

let sum = 0;
let average = 0;

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

        buttonModify.addEventListener("click", () => onchangeNote(jsonStudents, gradeValue))
        
        buttonAddRating.addEventListener("click", () => onResetNotes(jsonSubj, jsonStudents, gradeValue))

        deleteGradeButton.addEventListener("click", () => onDeleteGrade(gradeValue))


        start.value = jsonSubj.subjectList[0].grade[gradeValue].date;
        coefficientChange.value = jsonSubj.subjectList[0].grade[gradeValue].coef;

        if(jsonSubj.subjectList[0].grade[gradeValue].type == "ecrit") {
            optionEcrit.selected = true; 

        } else if (jsonSubj.subjectList[0].grade[gradeValue].type == "oral") {
            optionOral.selected = true; 

        }

        for (let index = 0; index < 6; index++) {
            sum += parseInt(jsonSubj.subjectList[0].grade[gradeValue].students[index].note);
        }
        average = (sum / jsonSubj.subjectList[0].grade[gradeValue].students.length);
        console.log(average);
        classAverageNote.innerHTML = parseFloat(average).toFixed(1);
    
        textModalDeletion.innerHTML += jsonSubj.subjectList[0].grade[gradeValue].date + " ?";

        // When the user clicks on the button, open the modal
        trashButton.onclick = function() {
            modal.style.display = "block";
        }

        // When the user clicks on <span> (x), close the modal
        span.onclick = function() {
            modal.style.display = "none";
        }

        cancelDeletion.onclick = function() {
            modal.style.display = "none";
        }

        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
    })
    .catch(error => console.error(error));
})
.catch(error => console.error(error));




function onchangeNote(jsonSubj, gradeValue) {
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

function onResetNotes(jsonSubj, jsonStudents, gradeValue) {

    console.log("coucoucou");
    studentChar = "";
    tbody.innerHTML = "";

    for(let i = 0; i < 6; i++) {
        studentChar += 
        `
        <tr>
        <td>${jsonStudents.students[i].firstname}</td>
        <td><input type="number" class="inputNote" value="${jsonSubj.subjectList[0].grade[gradeValue].students[i].note}"></td>
        </tr>
        `;
        console.log(studentChar);
    }

    tbody.innerHTML = studentChar;
}

function onDeleteGrade(gradeValue) {
    
    const gradeValueData = new FormData();
    gradeValueData.append("index", gradeValue)

    console.log(gradeValueData);

    fetch("../../php/deleteGrade.php", {
        method: "POST",
        body: gradeValueData
    })
    .then(response => {
        if(response.status == 200) {
            return response.text();
        } else {
            throw new Error("Erreur lors de l'envoi de la requette");
        }
    })
    .then(data => {
        console.log(data);
        window.location.href = "http://localhost/Note-Co-Front/html/teacherPage/teacherHome.html";
    })
    .catch(error => {
        console.log(error);
    })
}