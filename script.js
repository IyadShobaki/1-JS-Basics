/*
var markMass, johnMass, markHeight, johnHeight;

markMass = 78;
markHeight = 1.69;

johnMass = 92;
johnHeight = 1.95;

var bmi = CalculateBMI(markMass, johnMass, markHeight, johnHeight);

//console.log('Is Mark\'s BMI highr than John\'s?' + bmi);
if(bmi){
    console.log('Mark\'s BMI is higher than John\'s')
}else{
    console.log('John\'s BMI is higher than Mark\'s')
}

function CalculateBMI(mass1, mass2, height1, height2){
    var bmi1 = mass1 / (height1 * height1);
    console.log(bmi1);
    var bmi2 = mass2 / (height2 * height2);
    console.log(bmi2);
    return bmi1 > bmi2;
}


var firstName = 'John'
var age = 22

if(age < 13){
    console.log(firstName + ' is a boy.')
}else if (age >= 13 && age < 20){
    console.log(firstName + ' is a teenager.')
}else if (age >= 20 && age < 30){
    console.log(firstName + ' is a young man.')
}else{
    console.log(firstName + ' is a man.')
}


age >= 21 ? console.log(firstName + ' drinks beer.') :  console.log(firstName + ' drinks juice.')

var drink = age >= 21 ? 'beer' : 'juice'
console.log(drink)


var job = 'instructor'
switch (job){
    case 'teacher':
    case 'instructor':
        console.log(firstName + ' teaches kids how to code.')
        break
    case 'driver':
        console.log(firstName + ' driver and uber in Cleveland.')
        break
    case 'designer':
        console.log(firstName + ' designs beautiful websites.')
        break
    default:
        console.log(firstName + ' does something else.')
}

// falthy values: undefined, null, 0, '', NaN
// truthy values: NOT falsy values

var width;
//width = 0;
//width = '';
//width = null
//width = NaN
if(width){
    console.log('Variable is defined.')
}else{
    console.log('Variable has NOT been defined.')
}


var johnTeam = CalculateAverage(89, 120, 103)
var mikeTeam = CalculateAverage(116, 94, 123)
var maryTeam = CalculateAverage(77, 60, 140)

switch(true){
    case johnTeam > mikeTeam && johnTeam > maryTeam:
        console.log('John team the winner')
        console.log('John score: ' + johnTeam + ' > Mike score: ' + mikeTeam)
        console.log('John score: ' + johnTeam + ' > Mary score: ' + maryTeam)
        break
    case mikeTeam > johnTeam && mikeTeam > maryTeam:
        console.log('Mike team the winner')
        console.log('Mike score: ' + mikeTeam + ' > John score: ' + johnTeam)
        console.log('Mike score: ' + mikeTeam + ' > Mary score: ' + maryTeam)
        break
    case maryTeam > johnTeam && maryTeam > mikeTeam:
        console.log('Mary team the winner')
        console.log('Mary score: ' + maryTeam + ' > John score: ' + johnTeam)
        console.log('Mary score: ' + maryTeam + ' > Mike score: ' + mikeTeam)
        break
    default:
         console.log('There is a draw')
}



function CalculateAverage(fNumber, sNumber, tNumber){
    var avg = (fNumber + sNumber + tNumber) / 3

    return avg;
}

//Function declaration
// function(job, firstName){}

// Function expression
var whatDoYouDo = function(job, firstName){
    switch(job){
        case 'teacher':
            return firstName + ' teaches kids how to code'
        case 'driver':
            return firstName + ' drives a cab in Lisbon'
        case 'designer':
            return firstName + ' design beautiful websites'
        default:
            return firstName + ' do something else'
    }
}

console.log(whatDoYouDo('teacher', 'John'))
console.log(whatDoYouDo('designer', 'Jane'))
console.log(whatDoYouDo('retired', 'Mark'))


// Arrays

var names = ['John','Mark','Jane'];
var years = new Array(1990, 1969, 1948);

console.log(names[0]);
console.log(names);
console.log(names.length);

names[1] = 'Ben'
names[names.length] = 'Mary'
console.log(names)

// differnet data types
var john = ['John', 'Smith', 1990, 'teacher', false]
john.push('blue')
john.unshift('Mr.')  // put it in the beginning

john.pop()
john.pop()
john.shift()
console.log(john)

console.log(john.indexOf(1990))
console.log(john.indexOf(23))

var isDesigner =  john.indexOf('designer') === -1 ? 'John is NOT a designer' : 'John is a designer'
console.log(isDesigner)

var tips = [TipCalculator(124), TipCalculator(48), TipCalculator(268)]
console.log(tips)
var paidAmounts = [tips[0] + 124, tips[1] + 48, tips[2] + 268]
console.log(paidAmounts)


function TipCalculator(amount){
    if(amount < 50){
        return amount * 0.2
    }else if (amount >= 50 && amount < 200){
        return amount * 0.15
    }else {
        return amount * 0.1
    }
}

// Objects and properties

// Object literal
var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane','Mark','Bob','Emily'],
    job: 'teacher',
    isMarried: false 
};
console.log(john)
console.log(john.firstName)
console.log(john['lastName'])
var x = 'birthYear'
console.log(john[x])

john.job = 'designer';
john['isMarried'] = true;
console.log(john)

// new Object syntax
var jane = new Object();
jane.name = 'Jane';
jane.birthYear = 1969
jane['lastName'] = 'Smith'
console.log(jane)




var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane','Mark','Bob','Emily'],
    job: 'teacher',
    isMarried: false,
    calcAge: function(){
        this.age =  2020 - this.birthYear
    }
};

//console.log(john.calcAge())
//john.age = john.calcAge()

john.calcAge()
console.log(john)



var mark = {
    firstName: 'Mark',
    lastName: 'Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function(){
        this.BMI = this.mass / (this.height * this.height)
        return this.BMI
    }
}
var bob = {
    firstName: 'Bob',
    lastName: 'Smith',
    mass: 110,
    height: 1.95,
    calcBMI: function(){
        this.BMI = this.mass / (this.height * this.height)
        return this.BMI
    }
}
//mark.calcBMI()
//bob.calcBMI()
console.log(mark, bob)


/*
if (mark.BMI > bob.BMI){
    console.log(mark.firstName + ' has a higher BMI of ' + mark.BMI )
}else if (bob.BMI > mark.BMI){
    console.log(bob.firstName + ' has a higher BMI of ' + bob.BMI )
}else{
    console.log('They have equal BMI')
}
*/
/*
if (mark.calcBMI() > bob.calcBMI()){
    console.log(mark.firstName + ' has a higher BMI of ' + mark.BMI )
}else if (bob.BMI > mark.BMI){
    console.log(bob.firstName + ' has a higher BMI of ' + bob.BMI )
}else{
    console.log('They have equal BMI')
}

*/

/*
for( var i = 0; i < 10; i++){
    console.log(i)
}


var joe = ['Joe', 'Smith', 1990, 'teacher', false]

for (var i = 0; i < joe.length; i++){
    console.log(joe[i])
}

var i = 0;
while(i < joe.length){
    console.log(joe[i])
    i++
}
*/

/*
// continue and break statements
var joe = ['Joe', 'Smith', 1990, 'teacher', false]

for (var i = 0; i < joe.length; i++){
    if (typeof joe[i] !== 'string') continue
    console.log(joe[i])
}

for (var i = 0; i < joe.length; i++){
    if (typeof joe[i] !== 'string') break
    console.log(joe[i])
}

console.log('***********************')
for (var i = joe.length-1; i >= 0 ; i--){
    console.log(joe[i])
}

*/


// Challenge
var johnRes = {
    fullName: "John Smith",
    bill: [124,48,268,180,42],
    calcTip: function(){
        this.tipsAmount = []
        this.finalAmount = []
        for (var i = 0; i < this.bill.length; i++){
            if(this.bill[i] < 50){
                this.tipsAmount[i] = this.bill[i] * .2
            }else if(this.bill[i] >= 50 && this.bill[i] < 200){
                this.tipsAmount[i] = this.bill[i] * .15
            }else{
                this.tipsAmount[i] = this.bill[i] * .1
            }       
            
            this.finalAmount[i] = this.bill[i] + this.tipsAmount[i]             
        }
    }
}

var markRes = {
    fullName: "Mark Miller",
    bill: [77,375,110,45],
    calcTip: function(){
        this.tipsAmount = []
        this.finalAmount = []
        
        for (var i = 0; i < this.bill.length; i++){
            if(this.bill[i] < 100){
                this.tipsAmount[i] = this.bill[i] * .2
            }else if(this.bill[i] >= 100 && this.bill[i] < 300){
                this.tipsAmount[i] = this.bill[i] * .1
            }else{
                this.tipsAmount[i] = this.bill[i] * .25
            }  
            this.finalAmount[i] = this.bill[i] + this.tipsAmount[i]                  
        }
    }
}


function calcAverageTips(arr){
    var sum = 0;
    for(var i=0; i < arr.length; i++){
        sum += arr[i];
    }
    return sum / arr.length;
}

markRes.calcTip()
johnRes.calcTip();

johnRes.average = calcAverageTips(johnRes.tipsAmount)
markRes.average = calcAverageTips(markRes.tipsAmount)

console.log(johnRes, markRes)


if ( johnRes.average > markRes.average ){
    console.log('John paid highest tips on average')
}else if(markRes.average > johnRes.average){
    console.log('Mark paid highest tips on average')
}else{
    console.log('John and Mark paid equal tips on average')
}








