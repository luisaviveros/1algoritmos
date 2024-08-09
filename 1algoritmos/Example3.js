function findstudents (students, name) {
for (let i = 0; i < students.length; i++) {
if (students[i].Name === name) {
    return students[i];
}
}
return null;
}






const students = [
    { name: "Andres", score: 4.2 },
    { name: "Aleja", score: 3.2 },
    { name: "Ana", score: 2.1 },
    { name: "Luisa", score: 5.0}
    ];

const findstudentsT = findstudents(students, "Ana");
console.log(findstudentsT); 

const findstudentsT2 = findstudents(students, "Aleja");
console.log(findstudentsT2);

const findstudentsT3 = findstudents(students, "Andres");
console.log(findstudentsT3);

const findstudentsT4 = findstudents(students, "Luisa");
console.log(findstudentsT4);

const findstudentsT5 = findstudents(students, "Juan");
console.log(findstudentsT5);

    