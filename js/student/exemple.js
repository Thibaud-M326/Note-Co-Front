const ENGLISH_COEF = 2;
const ENGLISH_COURSE_NAME = "Anglais";
const HISTORY_COEF = 1;
const HISTORY_COURSE_NAME = "Histoire";
const MATHS_COEF = 4;
const MATHS_COURSE_NAME = "Maths";

const writtenEnglishTest = {
  id: 1,
  course: ENGLISH_COURSE_NAME,
  courseCoef: ENGLISH_COEF,
  type: "ecrit",
  testCoef: 1,
  date: "2020-09-02",
};

const oralEnglishTest1 = {
  id: 2,
  course: ENGLISH_COURSE_NAME,
  courseCoef: ENGLISH_COEF,
  type: "oral",
  testCoef: 2,
  date: "2020-09-13",
};

const oralEnglishTest2 = {
  id: 3,
  course: ENGLISH_COURSE_NAME,
  courseCoef: ENGLISH_COEF,
  type: "oral",
  testCoef: 1,
  date: "2020-09-14",
};

const historyOralTest = {
  id: 4,
  course: HISTORY_COURSE_NAME,
  courseCoef: HISTORY_COEF,
  type: "oral",
  testCoef: 1,
  date: "2020-09-14",
};

const historyWrittenTest1 = {
  id: 5,
  course: HISTORY_COURSE_NAME,
  courseCoef: HISTORY_COEF,
  type: "ecrit",
  testCoef: 1,
  date: "2020-09-14",
};

const historyWrittenTest2 = {
  id: 6,
  course: HISTORY_COURSE_NAME,
  courseCoef: HISTORY_COEF,
  type: "ecrit",
  testCoef: 1,
  date: "2020-09-14",
};

const mathsTest1 = {
  id: 7,
  course: MATHS_COURSE_NAME,
  courseCoef: MATHS_COEF,
  type: "ecrit",
  testCoef: 1,
  date: "2020-09-14",
};

const mathsTest2 = {
  id: 8,
  course: MATHS_COURSE_NAME,
  courseCoef: MATHS_COEF,
  type: "ecrit",
  testCoef: 1,
  date: "2020-09-14",
};

const mathsTest3 = {
  id: 9,
  course: MATHS_COURSE_NAME,
  courseCoef: MATHS_COEF,
  type: "ecrit",
  testCoef: 1,
  date: "2020-09-14",
};

// const tests = [writtenEnglishTest, oralEnglishTest1, oralEnglishTest2];

const students = [
  {
    firstname: "Tom",
    lastname: "Sawyer",
    username: "ETsawyer",
    password: "Tsawyer",
    id: 1,
    tests: [
      {
        testId: writtenEnglishTest.id,
        note: 10,
      },
      {
        testId: oralEnglishTest2.id,
        note: 4,
      },
      {
        testId: oralEnglishTest1.id,
        note: 18,
      },
      {
        testId: historyOralTest.id,
        note: 8,
      },
      {
        testId: historyWrittenTest1.id,
        note: 1,
      },
      {
        testId: historyWrittenTest2.id,
        note: 13,
      },
      {
        testId: mathsTest1.id,
        note: 6,
      },
      {
        testId: mathsTest2.id,
        note: 15,
      },
      {
        testId: mathsTest3.id,
        note: 8,
      },
    ],
  },
  {
    firstname: "John",
    lastname: "Doe",
    username: "Jdoe",
    password: "Jdoe",
    id: 2,
    tests: [
      {
        testId: writtenEnglishTest.id,
        note: 6,
      },
      {
        testId: oralEnglishTest2.id,
        note: 14,
      },
      {
        testId: oralEnglishTest1.id,
        note: 13,
      },
      {
        testId: historyOralTest.id,
        note: 18,
      },
      {
        testId: historyWrittenTest1.id,
        note: 19,
      },
      {
        testId: historyWrittenTest2.id,
        note: 3,
      },
      {
        testId: mathsTest1.id,
        note: 9,
      },
      {
        testId: mathsTest2.id,
        note: 11,
      },
      {
        testId: mathsTest3.id,
        note: 13,
      },
    ],
  },
  {
    firstname: "Emilie",
    lastname: "Martin",
    username: "Emartin",
    password: "Emartin",
    id: 3,
    tests: [
      {
        testId: writtenEnglishTest.id,
        note: 11,
      },
      {
        testId: oralEnglishTest2.id,
        note: 13,
      },
      {
        testId: oralEnglishTest1.id,
        note: 16,
      },
      {
        testId: historyOralTest.id,
        note: 17,
      },
      {
        testId: historyWrittenTest1.id,
        note: 14,
      },
      {
        testId: historyWrittenTest2.id,
        note: 10,
      },
      {
        testId: mathsTest1.id,
        note: 19,
      },
      {
        testId: mathsTest2.id,
        note: 12,
      },
      {
        testId: mathsTest3.id,
        note: 13,
      },
    ],
  },
  {
    firstname: "Mathieu",
    lastname: "Simon",
    username: "Msimon",
    password: "Msimon",
    id: 4,
    tests: [
      {
        testId: writtenEnglishTest.id,
        note: 14,
      },
      {
        testId: oralEnglishTest2.id,
        note: 15,
      },
      {
        testId: oralEnglishTest1.id,
        note: 13,
      },
      {
        testId: historyOralTest.id,
        note: 8,
      },
      {
        testId: historyWrittenTest1.id,
        note: 11,
      },
      {
        testId: historyWrittenTest2.id,
        note: 7,
      },
      {
        testId: mathsTest1.id,
        note: 9,
      },
      {
        testId: mathsTest2.id,
        note: 14,
      },
      {
        testId: mathsTest3.id,
        note: 12,
      },
    ],
  },
];

function getStudent(studentId) {
  //Go through every students
  for (studentIndex = 0; studentIndex < students.length; studentIndex++) {
    // Check if the student at the current index as the same id than the studentId (function parameter)
    if (students[studentIndex].id === studentId) {
      //The function returns the student as soon as it as found it
      return students[studentIndex];
    }
  }
}

// Retrieve the highest grade for a given student id
function getHighestGrade(studentId) {
  //Call the function to get the student with the studentId (function parameter)
  const student = this.getStudent(studentId);
  const tests = student.tests;

  // highestGrade is undefined/null at first
  let highestGrade = null;

  //Go through every tests that the student had
  for (testsIndex = 0; testsIndex < tests.length; testsIndex++) {
    //If highestGrade is null, then we store the current grade/note in it
    //If highest grade has a value but is smaller than the value of the current grade/note, then we override it with the new grade/note
    if (highestGrade === null || highestGrade < tests[testsIndex].note) {
      highestGrade = tests[testsIndex].note;
    }
  }

  //At this stage of the function, the highest grade has been found and is returned
  return highestGrade;
}

const highestGrade = this.getHighestGrade(1);

function getAllGrades(testId) {
  // This array aim is to store all the grade of a given test
  const allGrades = [];

  // Loop through every students
  for (studentIndex = 0; studentIndex < students.length; studentIndex++) {
    // Store the student at the current index in a variable (code readability)
    const currentStudent = students[studentIndex];

    //Loop through every tests a student had
    for (
      testsIndex = 0;
      testsIndex < currentStudent.tests.length;
      testsIndex++
    ) {
      const currentTest = currentStudent.tests[testsIndex];
      //If the test id is the same as testId (function param), then the grade is added to the array containing all the grades
      if (currentTest.testId === testId) {
        allGrades.push(currentTest.note);
      }
    }
  }

  return allGrades;
}

function getGradeAverage(testId) {
  const testGrades = this.getAllGrades(testId);
  let sumOfAllGrades = 0;
  for (grade of testGrades) {
    sumOfAllGrades += grade;
  }
  return sumOfAllGrades / testGrades.length;
}

document.getElementById("highestGrade").innerHTML = highestGrade;

const writtenEnglishGrades = this.getAllGrades(writtenEnglishTest.id);
console.log(writtenEnglishGrades);

const writtenEnglishGradesAverage = this.getGradeAverage(writtenEnglishTest.id);
console.log(writtenEnglishGradesAverage);
