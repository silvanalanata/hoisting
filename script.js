//prediccion ejercicio 1:
//daria error --> ReferenceError

/*console.log(example);
let example = "I'm the example!";    */

//----------------------------------------------------------------------------------------
//prediccion ejercicio 2:
var needle = 'haystack';       // se declara variable needle a nivel globl y se hoistea
test();
function test(){
	var needle = 'magnet';     //se declara variable needle a se hositea en la cima de test() y se le asigna un valor a needle
	console.log(needle);       //muestra por consola  magnet
}
//resultado por consola sera:
//magnet

//----------------------------------------------------------------------------------------
//prediccion ejercicio 3:
var brendan = 'super cool';   // se declara variable brendan a nivel global y se hositea
function print(){
	brendan = 'only okay';    // se le asigna un valor a la variable brendan pero dentro dle ambito
	console.log(brendan);     // muestra por consola el valor de brendan "ony okay" pero dentro del ambito,
}                             // pero como funcion no es invocada no hace nada
console.log(brendan);         // muestra por coonsola valor de brendan global --> super cool
// resultado por consola sera:
//super cool

//----------------------------------------------------------------------------------------
//prediccion ejercicio 4:
var food = 'chicken';         // se declara variable food a nivel global y se le asigna un valor "chicken"
console.log(food);            // muestra por consola valor asignado a food "chicken"
eat();
function eat(){
	food = 'half-chicken';    // se le asigna un valor a la vairable food pero dentro del ambito
	console.log(food);        // muestra por consola el valor asignado "half-chicken"
	var food = 'gone';        // se le asigna un nuevo valor a food "gone"
}
// el resultado mostrara por consola:
//chicken
//half-chicken

//----------------------------------------------------------------------------------------
//prediccion ejercicio 5:
mean();
console.log(food);
var mean = function() {
	food = "chicken";
	console.log(food);
	var food = "fish";
	console.log(food);
}
console.log(food);

//resultado por consola:
//error

//----------------------------------------------------------------------------------------
//prediccion ejercicio 6:
console.log(genre);        //undifined 
var genre = "disco";       // se le asigna un valor a genre
rewind();            
function rewind() {               
	genre = "rock";        // se le asigna un valor a genre dentro del ambito de la funcion
	console.log(genre);    // "rock"
	var genre = "r&b";     // se le asigna un valor a genre dentro del ambito de la funcion
	console.log(genre);    //"r&b"
}
console.log(genre);        //disco

//resultado por consola sera
//Undifined
//rock
//r&b
//disco

//----------------------------------------------------------------------------------------
//prediccion ejercicio 7:
dojo = "san jose";          // se le asigna un valor a dojo a nivel global     
console.log(dojo);          // "san jose"
learn();
function learn() {
	dojo = "seattle";       // se le asigna un valor a dojo a dentro del ambito de la funcion  
	console.log(dojo);      // "dojo"
	var dojo = "burbank";   // se le asigna un valor a dojo a dentro del ambito de la funcion  
	console.log(dojo);      // "burbank"
}
console.log(dojo);          // "san jose"
//resultado por consola sera
//san jose
//seattle
//burbank
//san jose

//----------------------------------------------------------------------------------------
//prediccion ejercicio 7:
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));

function makeDojo(name, students){
        const dojo = {};
        dojo.name = name;
        dojo.students = students;
        if(dojo.students > 50){
            dojo.hiring = true;
        }
        else if(dojo.students <= 0){
            dojo = "closed for now";
        }
        return dojo;
}

//resultado por consola sera


dojo=[ {'name:': 'chicago',
        'students:': '65'}]

//primer console
dojo=[ {'name:': 'chicago',
        'students:': '65',
        'hiring': 'true'}]

//segundo console
//error