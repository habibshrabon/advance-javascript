const students = [
    {id: 21, name: "omor sunny"},
    {id: 31, name: "Manna Dey"},
    {id: 41, name: "Sadia mitu"},
    {id: 71, name: "Deeojol"},
]

const names = students.map( s => s.name);
console.log(names);

const ids = students.map( s => s.id);
console.log(ids);

const bigger = students.filter( s => s.id <40);
console.log(bigger);

const bigger1 = students.find( s => s.id >40);
console.log(bigger1);