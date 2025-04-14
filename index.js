//Variables

let name="Nancy";
const age = 26;
var a=12;
console.log(name);
console.log(age);
console.log(a);

//function declaration
function greetings(nameOfPerson){
    return "Hey"+ nameOfPerson;
}

greetings();

//arrays
let days = ["monday","tuesday","wednesday"];
console.log(days[2]);
console.log(days.indexOf('monday'));
console.log(days.includes('tuesday'));

//push
days.push("Thrusday"); 
console.log(days);

//pop
days.pop();
console.log(days);

//shift
days.shift();
console.log(days);

//unshift
days.unshift("thrusday");
console.log(days);

//splice
days.splice(1,1,"monday");
console.log(days);

//slice
let x = days.slice(1,3);
console.log(x);

//foreach
days.forEach(function(days) {
  console.log(days);
});

//objects


//object creation

let rectangle= {
    length :1,
    breadth :2,

    draw:function(){
        console.log('drawing');
    }
};


function createReactangle(l,b){
    let rectangle= {
        length :l,
        breadth :b,
    
        draw:function(){
            console.log('draw');
        }
    };
    return rectangle;
}

let rectangleObj1= createReactangle(8,7);

//Template Literal

let message = `This 
is the 
first 
message.`;

console.log(message);

//arrow function

let numbers = [1,2,-1,-4];

let filter = numbers.filter(value => value >=0);

    console.log(filter);

//loops

//for loop

for(let i =1; i<5; i++){
    console.log(i)
}

//while loop

let i = 0;
while(i<5){
    console.log(i);
    i++;
}

//do while
let j = 0;
do{
    console.log(i);
    i++;
}while(j<=5);

//Promises, Async/Await Basics


let pro = new promise((resolve,reject)=>{
    let num = Math.random();
    if(num>0.5){
        resolve("Success");
    }
    else{
        reject("Failure or Bye");
    }
});

pro
.then(result => console.log(result))
.catch(error => console.log(error));



async function fetchData() {
    try {
      const res = await fetch('https://api.example.com/data');
      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }

fetchData();

