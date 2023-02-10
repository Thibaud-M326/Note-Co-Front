let student = {
  firstname: "Tom",
  lastname: "Sawyer",
  username: "ETsawyer",
  password: "Tsawyer",
  id: "1",
  grades: [
    {
      lesson: "Anglais",
      grade: 9,
    },
    {
      lesson: "Anglais",
      grade: 15,
    },
    {
      lesson: "Maths",
      grade: 18,
    },
    {
      lesson: "Histoire",
      grade: 13,
    },
  ],
};

const gradesNumber = student.grades.length;
console.log(gradesNumber);

document.getElementById("gradesNumber").innerHTML = gradesNumber;

let highestGrade = null;
for (i = 0; i < student.grades.length; i++) {
  if (highestGrade == null || highestGrade < student.grades[i].grade) {
    highestGrade = student.grades[i].grade;
  }
}
document.getElementById("highestGrade").innerHTML = highestGrade;

let lowestGrade = null;
for (i = 0; i < student.grades.length; i++) {
  if (lowestGrade == null || lowestGrade > student.grades[i].grade) {
    lowestGrade = student.grades[i].grade;
  }
}
document.getElementById("lowestGrade").innerHTML = lowestGrade;

//   {
//     firstname: "John",
//     lastname: "Doe",
//     username: "Jdoe",
//     password: "Jdoe",
//     id: "2",
//   },
//   {
//     firstname: "Emilie",
//     lastname: "Martin",
//     username: "Emartin",
//     password: "Emartin",
//     id: "3",
//   },
//   {
//     firstname: "Mathieu",
//     lastname: "Simon",
//     username: "Msimon",
//     password: "Msimon",
//     id: "4",
//   },
//   {
//     firstname: "Camille",
//     lastname: "Leroy",
//     username: "Cleroy",
//     password: "Cleroy",
//     id: "5",
//   },
// ];

// let loggedInStudent = null;
// for (student of students) {
//   if (student.id == 0) {
//     loggedInStudent = student;
//   }
// }

// function getStudent(id) {
//   for (i = 0; i < students.length; i++) {
//     if (students[i].id == id) {
//       return students[i];
//     }
//   }
// }

// const loggedInStudent = getStudent(3);

document.getElementById("studentUserName").innerHTML =
  loggedInStudent.firstname + " " + loggedInStudent.lastname;
