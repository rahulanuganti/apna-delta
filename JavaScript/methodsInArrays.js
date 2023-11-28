let students = [
    {
        name: "Rahul",
        marks: 97,
    },
    {
        name: "shradha",
        marks: 99,
    },
    {
        name: "rajat",
        marks: 90,
    }
];

let gpa = students.map((el)=>
{
    return el.marks/10;
});

// arr.forEach(function(el){
//     console.log(el);
// });

let num = [1,2,3,4];
let double = num.map(el=>{
    return el*el;
});

console.log(double);


let nums = [2, 4, 1, 5, 6, 2, 7, 8, 9];

let even = nums.filter((num)=> (num%2 == 0));
let odd = nums.filter(a =>(a%2 != 0));
let greaterThanFive = nums.filter(a =>(a>5));
console.log(even);
console.log(odd);
console.log(greaterThanFive);


//ever function
let a = [1, 2, 3, 4, 5];

a.every(el => (el%2 ==0));
