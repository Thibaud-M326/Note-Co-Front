let subjectsTable = "";

let subjectsList = [
  {
    id: 1,
    coef: 2,
    course: "Anglais",
    grade: [
      {
        type: "ecrit",
        date: "2020-09-30",
        coef: 1,
        students: [
          {
            idStudent: 1,
            note: 11,
          },
          {
            idStudent: 2,
            note: 6,
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
            note: 8,
          },
        ],
      },
    ],
  },
  {
    id: 1,
    coef: 2,
    course: "Histoire",
    grade: [
      {
        type: "oral",
        date: "2020-10-15",
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
    ],
  },
  {
    id: 1,
    coef: 2,
    course: "Math",
    grade: [
      {
        type: "ecrit",
        date: "2020-12-02",
        coef: 1,
        students: [
          {
            idStudent: 1,
            note: 4,
          },
          {
            idStudent: 2,
            note: 19,
          },
          {
            idStudent: 3,
            note: 18,
          },
          {
            idStudent: 4,
            note: 16,
          },
          {
            idStudent: 5,
            note: 2,
          },
          {
            idStudent: 6,
            note: 9,
          },
        ],
      },
    ],
  },
];

// Afficher les matieres
// const subjectstest = subjectsList[0].course;
// console.log(subjectstest);

for (let i = 0; i < 3; i++) {
  subjectsTable += `
    <tr id="subjectsTable">
    <td id="subjectCourses">${subjectsList[i].course}</td>
    <td>${subjectsList[i].grade[0].date} ${subjectsList[i].grade[0].students[0].note}</td>
  
    </tr>
    `;
}
console.log(subjectsTable);
document.getElementById("subjectsTable").innerHTML = subjectsTable;

// // Afficher les notes
// // const notetest = subjectsList[0].grade[0].students[0].note;
// // console.log(notetest);
// let noteSchoolWork = "";
// for (i = 0; i <= 2; i++) {
//   noteSchoolWork = subjectsList[i].grade[0].students[0].note;
// }
// document.getElementById("noteSchoolWork").innerHTML = noteSchoolWork;
