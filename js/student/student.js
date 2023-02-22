let subjectList = undefined;

fetch("../../json/subjectList.json")
  .then((res) => res.json())
  .then((jsonSubj) => {
    subjectList = jsonSubj.subjectList;
    //----------------------------------------------------//
    //affichage du tableau au chargement de la page

    let subjectsTable = "";
    let numberGrades = 0;
    let sumofAllGrades = 0;
    let previousCourseName = "";
    const myBtnOpenModal = document.getElementsByClassName("myBtnOpenModal");
    // const myBtnOpenModalAverage = document.getElementById("barCanvas").innerHTML;

    //boucle sur les matières
    for (i = 0; i < jsonSubj.subjectList.length; i++) {
      //boucle sur le devoir
      for (gradesIndex = 0; gradesIndex < jsonSubj.subjectList[i].grade.length; gradesIndex++) {
        //boucle sur les étudiants
        for (studentIndex = 0; studentIndex < jsonSubj.subjectList[i].grade[gradesIndex].students.length; studentIndex++) {
          //recupération des données de l'étudiants 1
          if (jsonSubj.subjectList[i].grade[gradesIndex].students[studentIndex].idStudent === 1) {
            const numberStudentGrade = parseInt(jsonSubj.subjectList[i].grade[gradesIndex].students[studentIndex].note);

            //Nombre total de notes
            numberGrades++;

            //calculer la moyenne générale
            sumofAllGrades += numberStudentGrade;

            //affichage matieres + dates + notes
            let tdSubjectCourses = "";
            if (jsonSubj.subjectList[i].course !== previousCourseName) {
              tdSubjectCourses = `<tr id="courseName">
          <td id="subjectCourses">
          <button 
          class = "myBtnOpenModal"
            type="button"
            id="btnOpenModal1"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal">${jsonSubj.subjectList[i].course}
          </button>(${jsonSubj.subjectList[i].coef})</td>
       </tr> `;
            }
            previousCourseName = jsonSubj.subjectList[i].course;

            subjectsTable += `
        <tr id="subjectsTable">${tdSubjectCourses}</tr>
        <tr id="subjectGrades" >
        <td><button
        type="button"
        class="myBtnDateModal"
        id="btnOpenModalGrade"
        onclick={getDetailsClassGrade('${jsonSubj.subjectList[i].course}','${jsonSubj.subjectList[i].grade[gradesIndex].date}')}
        data-bs-toggle="modal"
        data-bs-target="#exampleModalGrade"
      >${jsonSubj.subjectList[i].grade[gradesIndex].date}</button></td>
      <td id="gradeInTable">${jsonSubj.subjectList[i].grade[gradesIndex].students[studentIndex].note}</td>
        </tr>
        `;
          }
        }
      }
    }
    // Fin des FOR

    document.getElementById("subjectsTable").innerHTML = subjectsTable;
    const averageGrade = parseFloat(sumofAllGrades / numberGrades).toFixed(1);
    document.getElementById("average").value = averageGrade;
    document.getElementById("gradesNumber").innerHTML = numberGrades;

    document.getElementById("highestGrade").innerHTML = getStudentHighestGrade(1, jsonSubj);
    document.getElementById("lowestGrade").innerHTML = getStudentLowestGrade(1, jsonSubj);

    for (let i = 0; i < myBtnOpenModal.length; i++) {
      myBtnOpenModal[i].addEventListener("click", () => sendCourseNameModal(i, jsonSubj));
    }
    //---------------------------------------------------//
  })
  .catch((error) => console.error(error));

function getStudentGrades(studentId, jsonSubj) {
  const studentGrades = [];
  for (subject of jsonSubj.subjectList) {
    //boucle sur le devoir
    for (grade of subject.grade) {
      //boucle sur les étudiants
      for (student of grade.students) {
        //recupération des données de l'étudiants 1
        if (student.idStudent === studentId) {
          studentGrades.push(student.note);
        }
      }
    }
  }
  return studentGrades;
}

function getStudentHighestGrade(studentId, jsonSubj) {
  const studentGrades = getStudentGrades(studentId, jsonSubj);
  // Les "..." convertissent le tableau en une liste de paramètres
  const highestGrade = Math.max(...studentGrades);
  return highestGrade;
}

function getStudentLowestGrade(studentId, jsonSubj) {
  const studentGrades = getStudentGrades(studentId, jsonSubj);
  return Math.min(...studentGrades);
}

function computeCourseAverage(courseName) {
  let numberGradesCourses = 0;
  let sumofAllGradesCourses = 0;
  let numberStudentsGrade = 0;
  let averageGrade = null;
  for (let i = 0; i < subjectList.length; i++) {
    //boucle sur le devoir
    for (let gradesIndex = 0; gradesIndex < subjectList[i].grade.length; gradesIndex++) {
      //boucle sur les étudiants
      for (let studentIndex = 0; studentIndex < subjectList[i].grade[gradesIndex].students.length; studentIndex++) {
        if (subjectList[i].course === courseName) {
          numberStudentsGrade = parseInt(subjectList[i].grade[gradesIndex].students[studentIndex].note);
          numberGradesCourses++;

          //Moyenne générale toutes matières confondues
          sumofAllGradesCourses = sumofAllGradesCourses + numberStudentsGrade;
        }
      }
    }
  }
  averageGrade = parseFloat(sumofAllGradesCourses / numberGradesCourses).toFixed(1);
  document.getElementById("mediumGradeModal").innerHTML = averageGrade;

  // renvoie le tableau
  return averageGrade;
}

function computeStudentAverage(courseName, jsonSubj) {
  let numberGradesCourses = 0;
  let sumofAllGradesCourses = 0;
  let studentAverageGrade = 0;
  for (let i = 0; i < jsonSubj.subjectList.length; i++) {
    //boucle sur le devoir
    for (let gradesIndex = 0; gradesIndex < jsonSubj.subjectList[i].grade.length; gradesIndex++) {
      //boucle sur les étudiants
      for (let studentIndex = 0; studentIndex < jsonSubj.subjectList[i].grade[gradesIndex].students.length; studentIndex++) {
        if (jsonSubj.subjectList[i].grade[gradesIndex].students[studentIndex].idStudent === 1 && jsonSubj.subjectList[i].course === courseName) {
          const numberStudentsGrade = parseInt(jsonSubj.subjectList[i].grade[gradesIndex].students[studentIndex].note);
          numberGradesCourses++;

          sumofAllGradesCourses += numberStudentsGrade;
        }
      }
    }
  }
  studentAverageGrade = parseFloat(sumofAllGradesCourses / numberGradesCourses).toFixed(1);

  document.getElementById("MediumStudentGradeModalCourse").innerHTML = studentAverageGrade;

  return [studentAverageGrade];
}

//recuperer note  de lélèveet l'afficher dans le modal "date"
function sendStudentGrade(courseName, dateGrade) {
  let studentGrade = 0;
  for (let i = 0; i < subjectList.length; i++) {
    //boucle sur le devoir
    for (let gradesIndex = 0; gradesIndex < subjectList[i].grade.length; gradesIndex++) {
      //boucle sur les étudiants
      for (let studentIndex = 0; studentIndex < subjectList[i].grade[gradesIndex].students.length; studentIndex++) {
        if (subjectList[i].grade[gradesIndex].students[studentIndex].idStudent === 1 && subjectList[i].course === courseName && subjectList[i].grade[gradesIndex].date == dateGrade) {
          studentGrade = subjectList[i].grade[gradesIndex].students[studentIndex].note;
        }
      }
    }
  }
  document.getElementById("studentGrade").innerHTML = studentGrade;
}

function getDetailsClassGrade(courseName, date) {
  for (i = 0; i < subjectList.length; i++) {
    if (subjectList[i].course === courseName) {
      for (gradesIndex = 0; gradesIndex < subjectList[i].grade.length; gradesIndex++) {
        const gradeDate = subjectList[i].grade[gradesIndex].date;
        if (gradeDate === date) {
          sendStudentGrade(courseName, gradeDate);

          document.getElementById("typeOfGradeModal3").innerHTML = subjectList[i].grade[gradesIndex].type;

          document.getElementById("coefGradeModal").innerHTML = subjectList[i].grade[gradesIndex].coef;
          const classAverageGrade = getClassAverageGrade(courseName, gradeDate);
          document.getElementById("avererageClassModal").innerHTML = classAverageGrade;

          const highestGrade = getHighestGrade(courseName, gradeDate);
          document.getElementById("highestGradeModal").innerHTML = highestGrade;

          const lowestGrade = getLowestGrade(courseName, gradeDate);
          document.getElementById("lowestGradeModal").innerHTML = lowestGrade;

          document.getElementById("titleModalDateGrade").innerHTML = gradeDate;
        }
      }
    }
  }
}

// recupere moyenne de classe et l'affiche dans le modal "date"
function getClassAverageGrade(courseName, dateGrade) {
  let studentGrade = 0;
  let sumOfAllStudentsGrades = 0;
  let numberGrades = 0;
  for (i = 0; i < subjectList.length; i++) {
    //boucle sur le devoir
    for (gradesIndex = 0; gradesIndex < subjectList[i].grade.length; gradesIndex++) {
      //boucle sur les étudiants
      for (studentIndex = 0; studentIndex < subjectList[i].grade[gradesIndex].students.length; studentIndex++) {
        if (subjectList[i].course === courseName && subjectList[i].grade[gradesIndex].date == dateGrade) {
          {
            studentGrade = parseInt(subjectList[i].grade[gradesIndex].students[studentIndex].note);
            numberGrades++;
            sumOfAllStudentsGrades = sumOfAllStudentsGrades + studentGrade;
          }
        }
      }
    }
  }
  const averageGrade = parseFloat(sumOfAllStudentsGrades / numberGrades).toFixed(1);

  return averageGrade;
}

// recupere la meilleure note et l'affiche dans le modal "date"
function getHighestGrade(courseName, dateGrade) {
  let highestGrade = null;
  for (i = 0; i < subjectList.length; i++) {
    //boucle sur le devoir
    for (gradesIndex = 0; gradesIndex < subjectList[i].grade.length; gradesIndex++) {
      //boucle sur les étudiants
      for (studentIndex = 0; studentIndex < subjectList[i].grade[gradesIndex].students.length; studentIndex++) {
        if (subjectList[i].course === courseName && subjectList[i].grade[gradesIndex].date == dateGrade) {
          let currentGrade = subjectList[i].grade[gradesIndex].students[studentIndex].note;

          if (highestGrade == null || highestGrade < currentGrade) {
            highestGrade = currentGrade;
          }
        }
      }
    }
  }
  return highestGrade;
}
//  recupere la moins bonne note et l'affiche dans le modal "date"
function getLowestGrade(courseName, dateGrade) {
  let lowestGrade = null;
  let currentGrade = 0;
  for (i = 0; i < subjectList.length; i++) {
    //boucle sur le devoir
    for (gradesIndex = 0; gradesIndex < subjectList[i].grade.length; gradesIndex++) {
      //boucle sur les étudiants
      for (studentIndex = 0; studentIndex < subjectList[i].grade[gradesIndex].students.length; studentIndex++) {
        if (subjectList[i].course === courseName && subjectList[i].grade[gradesIndex].date == dateGrade) {
          currentGrade = subjectList[i].grade[gradesIndex].students[studentIndex].note;

          if (lowestGrade == null || lowestGrade > currentGrade) {
            lowestGrade = currentGrade;
          }
        }
      }
    }
  }
  return lowestGrade;
}

function sendCourseNameModal(i, jsonSubj) {
  const courseName = jsonSubj.subjectList[i].course;
  computeCourseAverage(courseName);
  computeStudentAverage(courseName, jsonSubj);
  document.getElementById("CourseNameModal").innerHTML = courseName;
  generateCourseAverageGraph(courseName, jsonSubj);
}

function getCourseNames() {
  let getCourses = [];
  for (i = 0; i < subjectList.length; i++) {
    getCourses.push(subjectList[i].course);
  }
  return getCourses;
}

function getAverageCourses() {
  console.log("toto");
  const courseNames = getCourseNames();
  const canvas = document.getElementById("barCanvas").getContext("2d");
  new Chart(canvas, {
    type: "bar",
    data: {
      datasets: [
        {
          label: courseNames[0],
          data: [computeCourseAverage(courseNames[0])],
          backgroundColor: "rgba(75, 192, 192, 0.2)",
          borderColor: "rgba(75, 192, 192, 1)",
          borderWidth: 1,
        },
        {
          label: courseNames[1],
          data: [computeCourseAverage(courseNames[1])],
          backgroundColor: "rgba(255, 99, 132, 0.2)",
          borderColor: "rgba(255, 99, 132, 1)",
          borderWidth: 1,
        },
        {
          label: courseNames[2],
          data: [computeCourseAverage(courseNames[2])],
          backgroundColor: "rgba(43, 84, 12, 0.2)",
          borderColor: "rgba(43, 84, 12, 1)",
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        xAxes: [
          {
            ticks: {
              min: 0,
              stepSize: 1,
            },
          },
        ],
        yAxes: [
          {
            ticks: {
              max: 20,
              beginAtZero: true,
            },
          },
        ],
      },
    },
  });
}

function getDateGrade(jsonSubj) {
  let getAverageClass = [];
  for (i = 0; i < jsonSubj.subjectList.length; i++) {
    for (gradesIndex = 0; gradesIndex < jsonSubj.subjectList[i].grade.length; gradesIndex++) {
      getAverageClass.push(jsonSubj.subjectList[i].grade[gradesIndex].date);
    }
  }
  return getAverageClass;
}

function generateCourseAverageGraph(courseName, jsonSubj) {
  const datasets = [];
  for (subject of jsonSubj.subjectList) {
    if (subject.course === courseName) {
      for (grade of subject.grade) {
        const averageGrade = getClassAverageGrade(courseName, grade.date, jsonSubj);
        const dataset = {
          label: grade.date,
          data: [averageGrade],
          backgroundColor: "rgba(75, 192, 192, 0.2)",
          borderColor: "rgba(75, 192, 192, 1)",
          borderWidth: 1,
          order: 1,
        };
        datasets.push(dataset);
      }
    }
  }

  const graph = document.getElementById("studentAverageCanvas").getContext("2d");

  new Chart(graph, {
    type: "bar",
    data: {
      datasets,
    },
    options: {
      scales: {
        xAxes: [
          {
            ticks: {
              min: 0,
              stepSize: 1,
            },
          },
        ],
        yAxes: [
          {
            ticks: {
              max: 20,
              beginAtZero: true,
            },
          },
        ],
      },
    },
  });
}
