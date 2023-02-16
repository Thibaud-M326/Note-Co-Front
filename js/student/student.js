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
            note: 20,
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
            note: 6,
          },
        ],
      },
    ],
  },
];
let subjectsTable = "";
let numberGrades = 0;
let sumofAllGrades = 0;
let previousCourseName = "";

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

        //calculer la moyenne générale
        sumofAllGrades += numberStudentGrade;

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
          </button>(${subjectList[i].coef})</td>
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

const averageGrade = parseFloat(sumofAllGrades / numberGrades).toFixed(1);
document.getElementById("average").value = averageGrade;

document.getElementById("gradesNumber").innerHTML = numberGrades;
document.getElementById("subjectsTable").innerHTML = subjectsTable;

function getStudentGrades(studentId) {
  const studentGrades = [];
  for (subject of subjectList) {
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

function getStudentHighestGrade(studentId) {
  const studentGrades = getStudentGrades(studentId);
  // Les "..." convertissent le tableau en une liste de paramètres
  const highestGrade = Math.max(...studentGrades);
  return highestGrade;
}

function getStudentLowestGrade(studentId) {
  const studentGrades = getStudentGrades(studentId);
  return Math.min(...studentGrades);
}

document.getElementById("highestGrade").innerHTML = getStudentHighestGrade(1);
document.getElementById("lowestGrade").innerHTML = getStudentLowestGrade(1);

function computeCourseAverage(courseName) {
  let numberGradesCourses = 0;
  let sumofAllGradesCourses = 0;
  let numberStudentsGrade = 0;
  let averageGrade = null;
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
        if (subjectList[i].course === courseName) {
          numberStudentsGrade =
            subjectList[i].grade[gradesIndex].students[studentIndex].note;
          numberGradesCourses++;

          //Moyenne générale toutes matières confondues
          sumofAllGradesCourses = sumofAllGradesCourses + numberStudentsGrade;
        }
      }
    }
  }
  averageGrade = parseFloat(
    sumofAllGradesCourses / numberGradesCourses
  ).toFixed(1);
  document.getElementById("mediumGradeModal").innerHTML = averageGrade;

  // renvoie le tableau
  return averageGrade;
}

function computeStudentAverage(courseName) {
  let numberGradesCourses = 0;
  let sumofAllGradesCourses = 0;
  let studentAverageGrade = 0;
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
          subjectList[i].grade[gradesIndex].students[studentIndex].idStudent ===
            1 &&
          subjectList[i].course === courseName
        ) {
          const numberStudentsGrade =
            subjectList[i].grade[gradesIndex].students[studentIndex].note;
          numberGradesCourses++;

          sumofAllGradesCourses += numberStudentsGrade;
        }
      }
    }
  }
  studentAverageGrade = parseFloat(
    sumofAllGradesCourses / numberGradesCourses
  ).toFixed(1);

  document.getElementById("MediumStudentGradeModalCourse").innerHTML =
    studentAverageGrade;
  // console.log(studentAverageGrade);

  return [studentAverageGrade];
}

//recuperer note de lélève et l'afficher dans le modal "date"
function sendStudentGrade(courseName, dateGrade) {
  let studentGrade = 0;
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
          subjectList[i].grade[gradesIndex].students[studentIndex].idStudent ===
            1 &&
          subjectList[i].course === courseName &&
          subjectList[i].grade[gradesIndex].date == dateGrade
        ) {
          studentGrade =
            subjectList[i].grade[gradesIndex].students[studentIndex].note;
        }
      }
    }
  }
  document.getElementById("studentGrade").innerHTML = studentGrade;
}

// recupere moyenne de classe et l'affiche dans le modal "date"
function getClassAverageGrade(courseName, dateGrade) {
  let studentGrade = 0;
  let sumOfAllStudentsGrades = 0;
  let numberGrades = 0;
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
          subjectList[i].course === courseName &&
          subjectList[i].grade[gradesIndex].date == dateGrade
        ) {
          {
            studentGrade =
              subjectList[i].grade[gradesIndex].students[studentIndex].note;
            numberGrades++;
            sumOfAllStudentsGrades = sumOfAllStudentsGrades + studentGrade;
          }
        }
      }
    }
  }
  const averageGrade = parseFloat(
    sumOfAllStudentsGrades / numberGrades
  ).toFixed(1);

  return averageGrade;
}

// recupere la meilleure note et l'affiche dans le modal "date"
function getHighestGrade(courseName, dateGrade) {
  let highestGrade = null;
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
          subjectList[i].course === courseName &&
          subjectList[i].grade[gradesIndex].date == dateGrade
        ) {
          let currentGrade =
            subjectList[i].grade[gradesIndex].students[studentIndex].note;

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
          subjectList[i].course === courseName &&
          subjectList[i].grade[gradesIndex].date == dateGrade
        ) {
          currentGrade =
            subjectList[i].grade[gradesIndex].students[studentIndex].note;

          if (lowestGrade == null || lowestGrade > currentGrade) {
            lowestGrade = currentGrade;
          }
        }
      }
    }
  }
  return lowestGrade;
}

function sendCourseNameModal(i) {
  const courseName = subjectList[i].course;
  computeCourseAverage(courseName);
  computeStudentAverage(courseName);
  document.getElementById("CourseNameModal").innerHTML = courseName;
  generateCourseAverageGraph(courseName);
}

function sendDateGradeModal(i, gradesIndex) {
  const gradeDate = subjectList[i].grade[gradesIndex].date;
  sendStudentGrade(subjectList[i].course, gradeDate);

  document.getElementById("typeOfGradeModal3").innerHTML =
    subjectList[i].grade[gradesIndex].type;

  document.getElementById("coefGradeModal").innerHTML =
    subjectList[i].grade[gradesIndex].coef;
  const classAverageGrade = getClassAverageGrade(
    subjectList[i].course,
    gradeDate
  );

  document.getElementById("avererageClassModal").innerHTML = classAverageGrade;
  // console.log(classAverageGrade);

  const highestGrade = getHighestGrade(subjectList[i].course, gradeDate);
  document.getElementById("highestGradeModal").innerHTML = highestGrade;

  const lowestGrade = getLowestGrade(subjectList[i].course, gradeDate);
  document.getElementById("lowestGradeModal").innerHTML = lowestGrade;

  document.getElementById("titleModalDateGrade").innerHTML = gradeDate;
}

function getCourseNames() {
  let getCourses = [];
  for (i = 0; i < subjectList.length; i++) {
    getCourses.push(subjectList[i].course);
  }
  return getCourses;
}
let courseNames = getCourseNames();

const canvas = document.getElementById("barCanvas").getContext("2d");
const barCanvas = new Chart(canvas, {
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

function getDateGrade() {
  let getAverageClass = [];
  for (i = 0; i < subjectList.length; i++) {
    for (
      gradesIndex = 0;
      gradesIndex < subjectList[i].grade.length;
      gradesIndex++
    ) {
      getAverageClass.push(subjectList[i].grade[gradesIndex].date);
    }
    console.log(getAverageClass);
  }
  return getAverageClass;
}
let dateGrade = getDateGrade();

function generateCourseAverageGraph(courseName) {
  const datasets = [];
  for (subject of subjectList) {
    if (subject.course === courseName) {
      for (grade of subject.grade) {
        const averageGrade = getClassAverageGrade(courseName, grade.date);
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
    // const dataset2 = {
    //   label: "toto",
    //   data: [10],
    //   backgroundColor: "rgba(75, 192, 192, 0.2)",
    //   borderColor: "rgba(75, 192, 192, 1)",
    //   borderWidth: 1,
    //   type: "line",
    //   order: 0,
    // };

    // datasets.push(dataset2);
  }

  const graph = document
    .getElementById("studentAverageCanvas")
    .getContext("2d");

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

  // new Chart(graph, {
  //   type: "line",
  //   data: {
  //     datasets: [
  //       {
  //         label: "My First Dataset",
  //         data: [65, 59, 80, 81, 56, 55, 40],
  //         fill: false,
  //         borderColor: "rgb(75, 192, 192)",
  //         tension: 0.1,
  //       },
  //     ],
  //   },
  // });
}
