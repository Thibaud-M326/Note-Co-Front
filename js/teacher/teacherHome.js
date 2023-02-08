const tbody = document.getElementById("tbody");
const howmanyStudents = document.getElementById("howmanyStudents");
const classAverageNote = document.getElementById("classAverageNote");
const subject = document.getElementById("subject");
const rating = document.getElementById("rating");
const studentList = 6;
let tab = "";
let sum = 0;
let average = 0;
let ratingInsert = "";


let subjectList = [
    {	
        "id" : 1,
        "coef": 2,
        "course": "Anglais", 
        "grade" :  [ 
            {
            "type" : "ecrit",
            "date" : "2020-02-28",
            "coef" : 1,
            "students" : [
                {
                    "idStudent": 1,
                    "note" : 10
                },
                {
                    "idStudent": 2,
                    "note" : 11
                },
                {
                    "idStudent": 3,
                    "note" : 14
                },
                {
                    "idStudent": 4,
                    "note" : 18
                },
                {
                    "idStudent": 5,
                    "note" : 16
                },
                {
                    "idStudent": 6,
                    "note" : 10
                }
            ]}
        ]
    },
    {
        "id" : 2,
        "coef": 2,
        "course": "Histoire", 
        "grade" :  [
            {
            "type" : "oral",
            "date" : "2020-03-16",
            "coef" : 1,
            "students" : [
                {
                    "idStudent": 1,
                    "note" : 10
                },
                {
                    "idStudent": 2,
                    "note" : 11
                },
                {
                    "idStudent": 3,
                    "note" : 14
                },
                {
                    "idStudent": 4,
                    "note" : 18
                },
                {
                    "idStudent": 5,
                    "note" : 16
                },
                {
                    "idStudent": 6,
                    "note" : 10
                }
            ]}
        ]
    },
    {
        "id" : 3,
        "coef": 2,
        "course": "Math", 
        "grade" :  [
            {
            "type" : "ecrit",
            "date" : "2020-03-14",
            "coef" : 1,
            "students" : [
                {
                    "idStudent": 1,
                    "note" : 4
                },
                {
                    "idStudent": 2,
                    "note" : 19
                },
                {
                    "idStudent": 3,
                    "note" : 18
                },
                {
                    "idStudent": 4,
                    "note" : 16
                },
                {
                    "idStudent": 5,
                    "note" : 2
                },
                {
                    "idStudent": 6,
                    "note" : 9
                }
            ]}
        ]
    }

]

console.log(subjectList[0].grade[0].students[0].note);
console.log(subjectList[0].grade[0].type);
console.log(subjectList[0].grade[0].date);


let students = [
    {
        "firstname" : "Tom",
        "lastname" : "Sawyer",
        "username" : "ETsawyer",
        "password" : "Tsawyer",
        "id" : 1
    },
    {
        "firstname" : "John",
        "lastname" : "Doe",
        "username" : "Jdoe",
        "password" : "Jdoe",
        "id" : 2
    },
    {
        "firstname" : "Emilie",
        "lastname" : "Martin",
        "username" : "Emartin",
        "password" : "Emartin",
        "id" : 3
    },
    {
        "firstname" : "Mathieu",
        "lastname" : "Simon",
        "username" : "Msimon",
        "password" : "Msimon",
        "id" : 4
    },
    {
        "firstname" : "Camille",
        "lastname" : "Leroy",
        "username" : "Cleroy",
        "password" : "Cleroy",
        "id" : 5
    },
    {
        "firstname" : "Lucie",
        "lastname" : "Bernard",
        "username" : "Lbernard",
        "password" : "Lbernard",
        "id" : 6
    },
    {
        "firstname" : "Maxime",
        "lastname" : "Rousseau",
        "username" : "Mrousseau",
        "password" : "Mrousseau",
        "id" : 7
    },
    {
        "firstname" : "Chloe",
        "lastname" : "Garcia",
        "username" : "Cgarcia",
        "password" : "Cgarcia",
        "id" : 8
    },
    {
        "firstname" : "Adrien",
        "lastname" : "David",
        "username" : "Adavid",
        "password" : "Adavid",
        "id" : 9
    },
    {
        "firstname" : "Julie",
        "lastname" : "Fernandez",
        "username" : "Jfernandez",
        "password" : "Jfernandez",
        "id" : 10
    },
    {
        "firstname" : "Antoine",
        "lastname" : "Moreau",
        "username" : "Amoreau",
        "password" : "Amoreau",
        "id" : 11
    },
    {
        "firstname" : "Manon",
        "lastname" : "Girard",
        "username" : "Mgirard",
        "password" : "Mgirard",
        "id" : 12
    },
    {
        "firstname" : "Alexandre",
        "lastname" : "Durand",
        "username" : "Adurand",
        "password" : "Adurand",
        "id" : 13
    },
    {
        "firstname" : "Claire",
        "lastname" : "Lefevre",
        "username" : "Clefevre",
        "password" : "Clefevre",
        "id" : 14
    },
    {
        "firstname" : "Cedric",
        "lastname" : "Morel",
        "username" : "Cmorel",
        "password" : "Cmorel",
        "id" : 15
    },
    {
        "firstname" : "Elodie",
        "lastname" : "Lambert",
        "username" : "Elambert",
        "password" : "Elambert",
        "id" : 16
    },
    {
        "firstname" : "Fabien",
        "lastname" : "Gauthier",
        "username" : "Fgauthier",
        "password" : "Fgauthier",
        "id" : 17
    },
    {
        "firstname" : "Amelie",
        "lastname" : "Perrin",
        "username" : "Aperrin",
        "password" : "Aperrin",
        "id" : 18
    }
];


for(let i = 0; i < studentList; i++) {

    // console.log(students[i].firstname);
    // console.log(students[i].lastname);
    // console.log(" ");

    tab +=
    `<tr>
    <td>${students[i].firstname} ${students[i].lastname}</td>
    <td>${subjectList[0].grade[0].students[i].note}</td>
    </tr>`;
}








//calcul de la moyenne
for(let i = 0; i < studentList; i++) {
    sum += subjectList[0].grade[0].students[i].note;
}

average = (sum / studentList);











//ajout du choix du devoirs
for(let i = 0; i < subjectList.length; i++) {
    console.log(subjectList[i].grade[0].type);
    console.log(subjectList[i].grade[0].date);
    ratingInsert += 
    `
    <option value="date${i}">${subjectList[i].grade[0].type} - ${subjectList[i].grade[0].date}</option>
    `;

}



//ajout des valeurs dans l'HTML
rating.innerHTML = ratingInsert;
subject.innerHTML = subjectList[0].course;
howmanyStudents.innerHTML = studentList + " élèves";
tbody.innerHTML = tab;
classAverageNote.innerHTML = parseInt(average);