const tbody = document.getElementById("tbody");
const howmanyStudents = document.getElementById("howmanyStudents");
const classAverageNote = document.getElementById("classAverageNote");
const subject = document.getElementById("subject");
const rating = document.getElementById("rating");
const modal = document.getElementById("myModal");
const btn = document.getElementsByClassName("myBtn");
const span = document.getElementsByClassName("close")[0];
const insideModal = document.getElementById("insideModal");
const studentName = document.getElementById("studentName");
const averageAllNotes = document.getElementById("averageAllNotes");
const averageWrittenNotes = document.getElementById("averageWrittenNotes");
const averageOralNotes = document.getElementById("averageOralNotes");
const tbodyModal = document.getElementById("tbodyModal");
const graphModal = document.getElementById("graphModal");
const graph = document.getElementById("graph");
const exit = document.getElementsByClassName("exit")[0];
const insideGraphModal = document.getElementById("insideGraphModal");
const dateAndType = document.getElementsByClassName("dateAndType");
const myBtn = document.getElementsByClassName("myBtn");
let tab = "";
let sum = 0;
let average = 0;
let ratingInsert = "";
let valueSelected = "";



fetch('../../json/subjectList.json')
  .then(res => res.json())
  .then(jsonSubj => {

    fetch('../../json/students.json')
      .then(resp => resp.json())
      .then(jsonStudents => {

        //----------------------------------------------------//
      
        console.log(jsonSubj)

        let studentList = jsonSubj.subjectList[0].grade[0].students.length;
        


        //affichage du tableau au chargement de la page 
        for (let i = 0; i < studentList; i++) {
          tab +=
            `<tr>
          <td class="myBtn"> ${jsonStudents.students[i].firstname} ${jsonStudents.students[i].lastname} </td>
          <td>${jsonSubj.subjectList[0].grade[0].students[i].note}</td>
          </tr>`;
        }

        tbody.innerHTML = tab;

        for (let i = 0; i < studentList; i++) {
          myBtn[i].addEventListener("click", () => showModal(i, jsonSubj, jsonStudents));
        }


        //calcul de la moyenne de la classe
        for (let i = 0; i < studentList; i++) {
          sum += parseInt(jsonSubj.subjectList[0].grade[0].students[i].note);
        }
        average = (sum / studentList);
        console.log(average);




        //ajout du choix du devoirs (ecrit  -  date)

        console.log(jsonSubj.subjectList[0].grade.length);

        for (let i = 0; i < jsonSubj.subjectList[0].grade.length; i++) {
          ratingInsert +=
            `
          <option value="${i}" class="dateAndType">${jsonSubj.subjectList[0].grade[i].type} - ${jsonSubj.subjectList[0].grade[i].date}</option>
          `;
        }

        rating.innerHTML = ratingInsert;

        for (let i = 0; i < jsonSubj.subjectList[0].grade.length; i++) {
          dateAndType[i].addEventListener("click", () => changeNoteList(jsonStudents, jsonSubj));
        }


        classAverageNote.innerHTML = "";
        classAverageNote.innerHTML = parseFloat(average).toFixed(1);

        span.onclick = function () {
          modal.style.display = "none";
        }

        window.onclick = function (event) {
          if (event.target == modal) {
            modal.style.display = "none";
          }
        }

        subject.innerHTML = jsonSubj.subjectList[0].course;

        howmanyStudents.innerHTML = "devoir coefficient " + jsonSubj.subjectList[0].grade[0].coef;
        //---------------------------------------------------//

      })
      .catch(error => console.error(error));
  })
  .catch(error => console.error(error));



//on click affiche les autre liste de notes (ecrit - date) et calcul de la moyenne

function changeNoteList(jsonStudents, jsonSubj) {

  valueSelected = rating.value;
  console.log(valueSelected);
  const studentList = jsonSubj.subjectList[0].grade[0].students.length;
        

  tbody.innerHTML = "";
  tab = "";
  sum = 0;
  for (let i = 0; i < studentList; i++) {
    tab +=
      `
        <tr>
        <td class="myBtn" onclick="showModal(${i})">${jsonStudents.students[i].firstname} ${jsonStudents.students[i].lastname}</td>
        <td>${jsonSubj.subjectList[0].grade[valueSelected].students[i].note}</td>
        </tr>
        `;
    sum += parseInt(jsonSubj.subjectList[0].grade[valueSelected].students[i].note);
  }
  average = (sum / studentList);
  classAverageNote.innerHTML = parseInt(average);
  tbody.innerHTML = tab;
  
  howmanyStudents.innerHTML = "";
  howmanyStudents.innerHTML = "devoir coefficient " + jsonSubj.subjectList[0].grade[valueSelected].coef ;
}



//---------la modal----------------//

function showModal(i, jsonSubj, jsonStudents) {

  // console.log(i);
  // console.log(jsonSubj);
  // console.log(jsonStudents);
  modal.style.display = "block";
  insideModal.innerHTML = i;
  studentName.innerHTML = `${jsonStudents.students[i].firstname} ${jsonStudents.students[i].lastname}`;

  //calcul moyenne generale
  sum = 0;
  average = 0;
  for (let index = 0; index < jsonSubj.subjectList[0].grade.length; index++) {
    sum += parseInt(jsonSubj.subjectList[0].grade[index].students[i].note);
  }
  average = (sum / jsonSubj.subjectList[0].grade.length);
  averageAllNotes.innerHTML = parseFloat(average).toFixed(1);


  //calcul moyenne ecrit
  let writtenNotes = jsonSubj.subjectList[0].grade.filter(grade => grade.type === "ecrit");
  let coef = 0;
  console.log(writtenNotes);
  console.log(writtenNotes[0].students[0].note);
  // console.log(writtenNotes[1].students[0].note);
  sum = 0;
  average = 0;
  for (let index = 0; index < writtenNotes.length; index++) {
    sum += (writtenNotes[index].students[i].note * writtenNotes[index].coef);
    coef += writtenNotes[index].coef;
  }
  // sum = sum * subjectList[0].grade.coef
  console.log("coef : " + coef);
  console.log("sum : " + sum);
  average = (sum / coef);
  averageWrittenNotes.innerHTML = parseFloat(average).toFixed(1);


  //calcul moyenne oral
  let oralNotes = jsonSubj.subjectList[0].grade.filter(grade => grade.type === "oral");
  coef = 0;
  // console.log(writtenNotes.length);
  // console.log(writtenNotes[0].students[0].note);
  // console.log(writtenNotes[1].students[0].note);
  sum = 0;
  average = 0;
  for (let index = 0; index < oralNotes.length; index++) {
    sum += (oralNotes[index].students[i].note * oralNotes[index].coef);
    coef += oralNotes[index].coef;
  }
  average = (sum / coef);
  averageOralNotes.innerHTML = parseFloat(average).toFixed(1);


  tbodyModal.innerHTML = "";
  tab = "";
  for (let index = 0; index < jsonSubj.subjectList[0].grade.length; index++) {
    tab +=
      `
        <tr>
        <td>${jsonSubj.subjectList[0].grade[index].date}</td>
        <td>${jsonSubj.subjectList[0].grade[index].type}</td>
        <td>${jsonSubj.subjectList[0].grade[index].students[i].note}</td>
        <td>${jsonSubj.subjectList[0].grade[index].coef}</td>
        </tr>
        `;
  }
  tbodyModal.innerHTML = tab;
}

//---------send local Storage---//

function sendGradeValue() {
  localStorage.setItem("gradeValue", rating.value);
  window.location.href = "http://localhost/Note-Co-Front/html/teacherPage/teacherChangeNote.html";
}


//---------modal graph--------//

graph.onclick = function () {
  graphModal.style.display = "block";
  insideGraphModal.innerHTML = "hello its me";
}

exit.onclick = function () {
  graphModal.style.display = "none";
}

window.onclick = function (event) {
  if (event.target == graphModal) {
    graphModal.style.display = "none";
  }
}











// Oui, voici quelques autres m??thodes couramment utilis??es en JavaScript pour manipuler des fichiers JSON :

//     map() : Cette m??thode peut ??tre utilis??e pour convertir chaque ??l??ment d'un tableau en un autre objet, en utilisant une fonction de transformation.

//     sort() : Cette m??thode peut ??tre utilis??e pour trier les ??l??ments d'un tableau JSON en fonction de certains crit??res.

//     forEach() : Cette m??thode peut ??tre utilis??e pour parcourir tous les ??l??ments d'un tableau JSON et effectuer une action sp??cifique pour chacun d'entre eux.

//     find() : Cette m??thode peut ??tre utilis??e pour trouver le premier ??l??ment d'un tableau JSON qui correspond ?? une condition donn??e.

//     every() : Cette m??thode peut ??tre utilis??e pour v??rifier si tous les ??l??ments d'un tableau JSON correspondent ?? une condition donn??e.

//     some() : Cette m??thode peut ??tre utilis??e pour v??rifier si au moins un ??l??ment d'un tableau JSON correspond ?? une condition donn??e.

// Ces m??thodes sont souvent utilis??es en combinaison pour effectuer des op??rations complexes sur des fichiers JSON en JavaScript.