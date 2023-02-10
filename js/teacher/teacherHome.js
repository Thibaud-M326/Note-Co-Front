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
const studentList = 6;
let tab = "";
let sum = 0;
let average = 0;
let ratingInsert = "";
let valueSelected = "";



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

// console.log(subjectList[0].grade[0].students[0].note);
// console.log(subjectList[0].grade[0].type);
// console.log(subjectList[0].grade[0].date);


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






//affichage du tableau au chargement de la page 
for(let i = 0; i < studentList; i++) {

    // console.log(students[i].firstname);
    // console.log(students[i].lastname);
    // console.log(" ");

    tab +=
    `<tr>
    <td class="MyBtn" onclick="showModal(${i})"> ${students[i].firstname} ${students[i].lastname} </td>
    <td>${subjectList[0].grade[0].students[i].note}</td>
    </tr>`;
}





//calcul de la moyenne de la classe
for(let i = 0; i < studentList; i++) {
    sum += subjectList[0].grade[0].students[i].note;
}
average = (sum / studentList);





//ajout du choix du devoirs (ecrit  -  date)
for(let i = 0; i < subjectList.length; i++) {
    // console.log(subjectList[0].grade[i].type);
    // console.log(subjectList[0].grade[i].date);
    ratingInsert +=
    `
    <option value="${i}" onclick="changeNoteList()">${subjectList[0].grade[i].type} - ${subjectList[0].grade[i].date}</option>
    `;
}



//on click affiche les autre liste de notes (ecrit - date) et calcul de la moyenne
function changeNoteList() {
    valueSelected = rating.value;
    console.log(valueSelected);

    tbody.innerHTML = "";
    tab = "";
    sum = 0;
    for(let i = 0; i < studentList; i++) {
        tab +=
        `
        <tr>
        <td class="myBtn" onclick="showModal(${i})">${students[i].firstname} ${students[i].lastname}</td>
        <td>${subjectList[0].grade[valueSelected].students[i].note}</td>
        </tr>
        `;
        sum += subjectList[0].grade[valueSelected].students[i].note;
    }
    average = (sum / studentList);
    classAverageNote.innerHTML = parseInt(average);
    tbody.innerHTML = tab;

}



//la modal
function showModal(i) {
    modal.style.display = "block";
    insideModal.innerHTML = i;
    studentName.innerHTML = `${students[i].firstname} ${students[i].lastname}`;

    //calcul moyenne generale
    sum = 0;
    average = 0;
    for (let index = 0; index < subjectList[0].grade.length; index++) {
        sum += subjectList[0].grade[index].students[i].note;
    }
    average = (sum / subjectList[0].grade.length);
    averageAllNotes.innerHTML = parseFloat(average).toFixed(1);
    

    //calcul moyenne ecrit
    let writtenNotes = subjectList[0].grade.filter(grade => grade.type === "ecrit");
    let coef = 0;
    console.log(writtenNotes);
    console.log(writtenNotes[0].students[0].note);
    console.log(writtenNotes[1].students[0].note);
    sum = 0;
    average = 0;
    for(let index = 0; index < writtenNotes.length; index++) {
        sum += (writtenNotes[index].students[i].note * writtenNotes[index].coef);
        coef += writtenNotes[index].coef;
    }
    // sum = sum * subjectList[0].grade.coef
    console.log("coef : " + coef);
    console.log("sum : " + sum);
    average = (sum / coef);
    averageWrittenNotes.innerHTML = parseFloat(average).toFixed(1);
    

    //calcul moyenne oral
    let oralNotes = subjectList[0].grade.filter(grade => grade.type === "oral");
    coef = 0;
    // console.log(writtenNotes.length);
    // console.log(writtenNotes[0].students[0].note);
    // console.log(writtenNotes[1].students[0].note);
    sum = 0;
    average = 0;
    for(let index = 0; index < oralNotes.length; index++) {
        sum += (oralNotes[index].students[i].note * oralNotes[index].coef);
        coef += oralNotes[index].coef;
    }
    average = (sum / coef);
    averageOralNotes.innerHTML = parseFloat(average).toFixed(1);
    
    
    tbodyModal.innerHTML = "";
    tab = "";
    for(let index = 0; index < subjectList[0].grade.length; index++) {
        tab +=
        `
        <tr>
        <td>${subjectList[0].grade[index].date}</td>
        <td>${subjectList[0].grade[index].type}</td>
        <td>${subjectList[0].grade[index].students[i].note}</td>
        <td>${subjectList[0].grade[index].coef}</td>
        </tr>
        `;
    }
    tbodyModal.innerHTML = tab;
}


span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}



//ajout des valeurs dans l'HTML
rating.innerHTML = ratingInsert;
subject.innerHTML = subjectList[0].course;
howmanyStudents.innerHTML = studentList + " élèves";
tbody.innerHTML = tab;
classAverageNote.innerHTML = parseFloat(average).toFixed(1);








// Oui, voici quelques autres méthodes couramment utilisées en JavaScript pour manipuler des fichiers JSON :

//     map() : Cette méthode peut être utilisée pour convertir chaque élément d'un tableau en un autre objet, en utilisant une fonction de transformation.

//     sort() : Cette méthode peut être utilisée pour trier les éléments d'un tableau JSON en fonction de certains critères.

//     forEach() : Cette méthode peut être utilisée pour parcourir tous les éléments d'un tableau JSON et effectuer une action spécifique pour chacun d'entre eux.

//     find() : Cette méthode peut être utilisée pour trouver le premier élément d'un tableau JSON qui correspond à une condition donnée.

//     every() : Cette méthode peut être utilisée pour vérifier si tous les éléments d'un tableau JSON correspondent à une condition donnée.

//     some() : Cette méthode peut être utilisée pour vérifier si au moins un élément d'un tableau JSON correspond à une condition donnée.

// Ces méthodes sont souvent utilisées en combinaison pour effectuer des opérations complexes sur des fichiers JSON en JavaScript.