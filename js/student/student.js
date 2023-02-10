let subjectList = [
  {
    id: 1,
    coef: 2,
    course: "Anglais",
    grade: [
      {
        type: "ecrit",
        date: "2020-09-02",
        coef: 1,
        students: [
          {
            idStudent: 1,
            note: 10,
          },
          {
            idStudent: 2,
            note: 11,
          },
          {
            idStudent: 3,
            note: 14,
          },
          {
            idStudent: 4,
            note: 18,
          },
          {
            idStudent: 5,
            note: 16,
          },
          {
            idStudent: 6,
            note: 10,
          },
        ],
      },
      {
        type: "oral",
        date: "2020-09-13",
        coef: 2,
        students: [
          {
            idStudent: 1,
            note: 13,
          },
          {
            idStudent: 2,
            note: 16,
          },
          {
            idStudent: 3,
            note: 4,
          },
          {
            idStudent: 4,
            note: 14,
          },
          {
            idStudent: 5,
            note: 19,
          },
          {
            idStudent: 6,
            note: 10,
          },
        ],
      },
      {
        type: "ecrit",
        date: "2020-09-18",
        coef: 2,
        students: [
          {
            idStudent: 1,
            note: 9,
          },
          {
            idStudent: 2,
            note: 12,
          },
          {
            idStudent: 3,
            note: 17,
          },
          {
            idStudent: 4,
            note: 19,
          },
          {
            idStudent: 5,
            note: 16,
          },
          {
            idStudent: 6,
            note: 17,
          },
        ],
      },
    ],
  },
  {
    id: 2,
    coef: 1,
    course: "Histoire",
    grade: [
      {
        type: "ecrit",
        date: "2020-09-02",
        coef: 1,
        students: [
          {
            idStudent: 1,
            note: 11,
          },
          {
            idStudent: 2,
            note: 15,
          },
          {
            idStudent: 3,
            note: 11,
          },
          {
            idStudent: 4,
            note: 21,
          },
          {
            idStudent: 5,
            note: 12,
          },
          {
            idStudent: 6,
            note: 12,
          },
        ],
      },
      {
        type: "oral",
        date: "2020-09-13",
        coef: 2,
        students: [
          {
            idStudent: 1,
            note: 2,
          },
          {
            idStudent: 2,
            note: 14,
          },
          {
            idStudent: 3,
            note: 2,
          },
          {
            idStudent: 4,
            note: 17,
          },
          {
            idStudent: 5,
            note: 18,
          },
          {
            idStudent: 6,
            note: 12,
          },
        ],
      },
      {
        type: "ecrit",
        date: "2020-09-18",
        coef: 2,
        students: [
          {
            idStudent: 1,
            note: 13,
          },
          {
            idStudent: 2,
            note: 16,
          },
          {
            idStudent: 3,
            note: 14,
          },
          {
            idStudent: 4,
            note: 20,
          },
          {
            idStudent: 5,
            note: 9,
          },
          {
            idStudent: 6,
            note: 12,
          },
        ],
      },
    ],
  },
  {
    id: 3,
    coef: 2,
    course: "Math",
    grade: [
      {
        type: "ecrit",
        date: "2020-09-02",
        coef: 1,
        students: [
          {
            idStudent: 1,
            note: 15,
          },
          {
            idStudent: 2,
            note: 12,
          },
          {
            idStudent: 3,
            note: 8,
          },
          {
            idStudent: 4,
            note: 17,
          },
          {
            idStudent: 5,
            note: 10,
          },
          {
            idStudent: 6,
            note: 9,
          },
        ],
      },
      {
        type: "oral",
        date: "2020-09-13",
        coef: 3,
        students: [
          {
            idStudent: 1,
            note: 20,
          },
          {
            idStudent: 2,
            note: 17,
          },
          {
            idStudent: 3,
            note: 1,
          },
          {
            idStudent: 4,
            note: 18,
          },
          {
            idStudent: 5,
            note: 18,
          },
          {
            idStudent: 6,
            note: 15,
          },
        ],
      },
      {
        type: "ecrit",
        date: "2020-09-18",
        coef: 1,
        students: [
          {
            idStudent: 1,
            note: 9,
          },
          {
            idStudent: 2,
            note: 13,
          },
          {
            idStudent: 3,
            note: 17,
          },
          {
            idStudent: 4,
            note: 16,
          },
          {
            idStudent: 5,
            note: 12,
          },
          {
            idStudent: 6,
            note: 12,
          },
        ],
      },
    ],
  },
];
console.log(subjectList);
let subjectsTable = "";
let titleModalDateGrade = "";
let numberGrades = 0;
let highestGrade = null;
let lowestGrade = null;
let countGrade = 0;
let averageGrade = 0;
let sumofAllGrades = 0;
let previousCourseName = "";
let recupCourseName = "";
let recupDateGrades = "";
let sumByCourse = "";
//boucle sur les matières
for (i = 0; i < subjectList.length; i++) {
  //boucle sur le devoir
  for (
    gradesIndex = 0;
    gradesIndex < subjectList[i].grade.length;
    gradesIndex++
  ) {
    //boucle sur les étudiants
    for (
      studentIndex = 0;
      studentIndex < subjectList[i].grade[gradesIndex].students.length;
      studentIndex++
    ) {
      //recupération des données de l'étudiants 1
      if (
        subjectList[i].grade[gradesIndex].students[studentIndex].idStudent === 1
      ) {
        const numberStudentGrade =
          subjectList[i].grade[gradesIndex].students[studentIndex].note;
        // console.log(numberStudentGrade);

        //Nombre total de notes
        numberGrades++;

        const currentGrade =
          subjectList[i].grade[gradesIndex].students[studentIndex].note;
        //note la plus élevée
        if (highestGrade == null || highestGrade < currentGrade) {
          highestGrade = currentGrade;
        }
        //note la plus basse
        if (lowestGrade == null || lowestGrade > currentGrade) {
          lowestGrade = currentGrade;
        }
        //afficher la moyenne générale
        countGrade = sumofAllGrades += numberStudentGrade;
        averageGrade = parseFloat(countGrade / numberGrades).toFixed(1);
        // console.log(averageGrade);

        // Afficher la moyenne par matiere
        if (subjectList[i].course == previousCourseName) {
        }

        //affichage matieres + dates + notes
        let tdSubjectCourses = "";
        if (subjectList[i].course !== previousCourseName) {
          tdSubjectCourses = `<tr id="courseName">
          <td id="subjectCourses">
          <button
          onclick = "sendCourseNameModal(${i})"
            type="button"
            id="btnOpenModal1"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal">${subjectList[i].course}
          </button></td>
       <td id="coefCourses">${subjectList[i].coef}</td>
       </tr> `;
        }
        previousCourseName = subjectList[i].course;
        // console.log(i + " cours : " + subjectList[i].course);

        subjectsTable += `
        <tr id="subjectsTable">${tdSubjectCourses}</tr>

        <tr id="subjectGrades" >
        <td><button
        onclick = "sendDateGradeModal(${i}, ${gradesIndex})"
        type="button"
        id="btnOpenModalGrade"
        data-bs-toggle="modal"
        data-bs-target="#exampleModalGrade"
      >${subjectList[i].grade[gradesIndex].date}</button></td>
      <td id="gradeInTable">${subjectList[i].grade[gradesIndex].students[studentIndex].note}</td>
        </tr>
        `;
      }
    }
  }
}

function sendCourseNameModal(i) {
  recupCourseName = subjectList[i].course;
  document.getElementById("CourseNameModal").innerHTML = recupCourseName;
  // console.log(i);
}

function sendDateGradeModal(i, gradesIndex) {
  recupDateGrades = subjectList[i].grade[gradesIndex].date;
  document.getElementById("titleModalDateGrade").innerHTML = recupDateGrades;
}

document.getElementById("gradesNumber").innerHTML = numberGrades;
document.getElementById("highestGrade").innerHTML = highestGrade;
document.getElementById("lowestGrade").innerHTML = lowestGrade;
document.getElementById("subjectsTable").innerHTML = subjectsTable;
document.getElementById("average").value = averageGrade;
// document.getElementById("titleModalDateGrade").innerHTML = tdSubjectCourses;

let numberStudentsGrade = 0;
for (i = 0; i < subjectList.length; i++) {
  //boucle sur le devoir
  for (
    gradesIndex = 0;
    gradesIndex < subjectList[i].grade.length;
    gradesIndex++
  ) {
    //boucle sur les étudiants
    for (
      studentIndex = 0;
      studentIndex < subjectList[i].grade[gradesIndex].students.length;
      studentIndex++
    ) {
      if (
        subjectList[i].grade[gradesIndex].students[studentIndex].idStudent !==
        null
      ) {
      }
      const numberStudentGrade =
        subjectList[i].grade[gradesIndex].students[studentIndex].note;
      numberGrades++;
      console.log(numberStudentGrade);
    }
  }
}

document.getElementById("mediumGradeModal").innerHTML = numberStudentGrade;
