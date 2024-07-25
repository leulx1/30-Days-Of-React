let array= [];
let array2= [1,3,4,5,6];
console.log(array2.length);
console.log(array2[0],array2[2],array2[4])
let mixedDataTypes=['idk','1','3','idk2',null,NaN,undefined];  console.log(mixedDataTypes.length)
let itCompanies =['Facebook','Google','Microsoft','Apple','IBM','Oracle','Amazon']
console.log(itCompanies)
console.log(itCompanies.length)
console.log(itCompanies[0],itCompanies[3],itCompanies[6])
for (let i=0;i<itCompanies.length;i++){ console.log(itCompanies[i])}
for(let i=0; i<itCompanies.length; i++){ console.log(itCompanies[i].toUpperCase())}
console.log(itCompanies[0],itCompanies[1],itCompanies[2],itCompanies[3],itCompanies[4],itCompanies[5]+'and'+itCompanies[6] +'are big IT companies')




//Number 8.1 question..............................................................................................................................................
const fullName = (firstname,lastname)=> {
    return firstname + lastname
}
console.log(fullName('leul','tsehaye'))

//number 8.1.3
const addNumbers = (num1,num2)=>{
    console.log(num1+num2)
}
addNumbers(1,2)
//number 8.1.4
const areaOfCircle=(pi,r)=>{
    console.log(pi*r**2)
}
areaOfCircle(3.14,2)
//8.1.5
const convertCelciusToFarhrenheit = (C)=>{
    console.log((C * 9/5)+32)
}
convertCelciusToFarhrenheit(-40)
//8.1.6
const bmi= (weight,height)=>{
    bmi2=weight*height**2;
    if(bmi2<18.5){
        console.log('underweight')
    }
    else if(bmi2>18.5 && bmi2<24,5){
        console.log('normal')
    }
    else if(bmi2>25&&bmi2<24.9){
        console.log('overweight')
    }
    else if(bmi2>30){
        console.log('obese')}
}
bmi(70,1.7)