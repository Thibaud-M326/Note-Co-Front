const tbody = document.getElementById("tbody");
const classAverageNote = document.getElementById("classAverageNote");
const inputNote = document.getElementsByClassName("inputNote");
let studentChar = "";
let sum = 0;
let average = 0;

// ----------------------------
let subjectList = [
    {	
        "id" : 1,
        "coef": 2,
        "course": "Anglais", 
        "grade" :  [ 
            {
            "type" : "ecrit",
            "date" : "2020-09-02",
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
            ]},
            {
            "type" : "oral",
            "date" : "2020-09-13",
            "coef" : 2,
            "students" : [
                {
                    "idStudent": 1,
                    "note" : 13
                },
                {
                    "idStudent": 2,
                    "note" : 16
                },
                {
                    "idStudent": 3,
                    "note" : 4
                },
                {
                    "idStudent": 4,
                    "note" : 14
                },
                {
                    "idStudent": 5,
                    "note" : 19
                },
                {
                    "idStudent": 6,
                    "note" : 10
                }
            ]},
            {
            "type" : "ecrit",
            "date" : "2020-09-18",
            "coef" : 2,
            "students" : [
                {
                    "idStudent": 1,
                    "note" : 11
                },
                {
                    "idStudent": 2,
                    "note" : 12
                },
                {
                    "idStudent": 3,
                    "note" : 17
                },
                {
                    "idStudent": 4,
                    "note" : 19
                },
                {
                    "idStudent": 5,
                    "note" : 16
                },
                {
                    "idStudent": 6,
                    "note" : 17
                }
            ]}
        ]
    },
    {
        "id" : 2,
        "coef": 1,
        "course": "Histoire", 
        "grade" :  [
            {
            "type" : "ecrit",
            "date" : "2020-09-02",
            "coef" : 1,
            "students" : [
                {
                    "idStudent": 1,
                    "note" : 13
                },
                {
                    "idStudent": 2,
                    "note" : 15
                },
                {
                    "idStudent": 3,
                    "note" : 11
                },
                {
                    "idStudent": 4,
                    "note" : 21
                },
                {
                    "idStudent": 5,
                    "note" : 12
                },
                {
                    "idStudent": 6,
                    "note" : 12
                }
            ]},
            {
            "type" : "oral",
            "date" : "2020-09-13",
            "coef" : 2,
            "students" : [
                {
                    "idStudent": 1,
                    "note" : 15
                },
                {
                    "idStudent": 2,
                    "note" : 14
                },
                {
                    "idStudent": 3,
                    "note" : 2
                },
                {
                    "idStudent": 4,
                    "note" : 17
                },
                {
                    "idStudent": 5,
                    "note" : 18
                },
                {
                    "idStudent": 6,
                    "note" : 12
                }
            ]},
            {
            "type" : "ecrit",
            "date" : "2020-09-18",
            "coef" : 2,
            "students" : [
                {
                    "idStudent": 1,
                    "note" : 13
                },
                {
                    "idStudent": 2,
                    "note" : 16
                },
                {
                    "idStudent": 3,
                    "note" : 14
                },
                {
                    "idStudent": 4,
                    "note" : 20
                },
                {
                    "idStudent": 5,
                    "note" : 9
                },
                {
                    "idStudent": 6,
                    "note" : 12
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
            "date" : "2020-09-02",
            "coef" : 1,
            "students" : [
                {
                    "idStudent": 1,
                    "note" : 15
                },
                {
                    "idStudent": 2,
                    "note" : 12
                },
                {
                    "idStudent": 3,
                    "note" : 8
                },
                {
                    "idStudent": 4,
                    "note" : 17
                },
                {
                    "idStudent": 5,
                    "note" : 10
                },
                {
                    "idStudent": 6,
                    "note" : 9
                }
            ]},
            {
            "type" : "oral",
            "date" : "2020-09-13",
            "coef" : 3,
            "students" : [
                {
                    "idStudent": 1,
                    "note" : 11
                },
                {
                    "idStudent": 2,
                    "note" : 17
                },
                {
                    "idStudent": 3,
                    "note" : 1
                },
                {
                    "idStudent": 4,
                    "note" : 18
                },
                {
                    "idStudent": 5,
                    "note" : 18
                },
                {
                    "idStudent": 6,
                    "note" : 15
                }
            ]},
            {
            "type" : "ecrit",
            "date" : "2020-09-18",
            "coef" : 1,
            "students" : [
                {
                    "idStudent": 1,
                    "note" : 15
                },
                {
                    "idStudent": 2,
                    "note" : 13
                },
                {
                    "idStudent": 3,
                    "note" : 17
                },
                {
                    "idStudent": 4,
                    "note" : 16
                },
                {
                    "idStudent": 5,
                    "note" : 12
                },
                {
                    "idStudent": 6,
                    "note" : 12
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
// ----------------------------


for(let i = 0; i < 6; i++) {
    studentChar += 
    `
    <tr>
    <td>${students[i].firstname}</td>
    <td><input type="number" class="inputNote" value="" onchange="countAverage()"></td>
    </tr>
    `;
}

function countAverage() {
    average = 0;
    for(let i = 0; i < 6; i++) {
        sum += inputNote[i].value;
    }
    average = (sum / 6);
    classAverageNote.innerHTML = "0";
    classAverageNote.innerHTML = parseInt(average);
}


tbody.innerHTML = studentChar;