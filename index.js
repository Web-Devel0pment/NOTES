// // //use key word and declartion
// // //keyword let,var,const
// // //initialize variable
// var name1;

// const aadhar=987654321;
// name1="avinaash"+1;
// console.log(name1)
// name1=99
// c=true
// console.log(c)


///arithmetix expression
//operand and operators
//operands=93,398,933
//operator=+,-,/,*,%
//bitwise operator=&,|,^,~
//assignment opertors= +=,-+,*=,/=,%=,++,--
//expression=left to right
//BODMAS
// console.log(3+8)
// let x=90,y=89;
// x+=y

// // x=3+2*(8*10)
// // //3+2*80
// // //3+160
// // //163
// // console.log(x)

// // user input
// // // var x=window.prompt("enter your age")
// // x=Number(x)

// // console.log(x)
// b=98
// b+=1
// console.log(typeof b,b)
// b=String(b)
// b+=1
// console.log(typeof b,b)
// x=false
// b=""
// z=Boolean(b)

// console.log(typeof x,z,b)
// //area of cirlce

// // var btn=document.getElementById("btn1")
// // btn.onclick=()=>x("mani")

// // function x(name){
// //     var msg=document.getElementById("id1").value
// //     console.log(msg)
// //     document.getElementById("man").innerHTML=msg
// // }

//MAth

// x=4
// console.log(Math.round(x))
// console.log(Math.floor(x))
// console.log(Math.ceil(x))
// console.log(Math.pow(3,3))
// console.log(Math.sqrt(x))
// console.log(Math.sqrt(x))
// console.log(Math.sign(x))
// console.log(Math.max(999,99999))
// console.log(Math.min(999,99999))

// num=99
// console.log(num%2)
// if(num%2==0)
// console.log("even")
// else

///var=(condition)?"":""
// x=99
// y=90
// var ans=(x>y)?y:x
// console.log(ans)
/*
Task  - 1
Valid Triangle
*/

// var btn=document.getElementById("check");
// var ans=document.getElementById("ans");
// btn.onclick=function () {
    
// var a=document.getElementById("side1").value;
// var b=document.getElementById("side2").value;
// var c=document.getElementById("side3").value;
//     a=Number(a)
//     b=Number(b)
//     c=Number(c)
//     var x=a+b;
//     var y=b+c;
//     var z=a+c;
//     console.log(y,a,typeof a);
//     console.log(z,b);
//     console.log(x,c);
//     if(y>a && z>b && x>c)
//     ans.innerHTML="Hey! its Valid Triangle ✌️"
//     else
//     ans.innerHTML="Nope! its InValid Triangle 😒"
// }
/*
var nam="cenzo zone"

console.log(nam.length)
console.log(nam.charAt(nam.length-1))
console.log(nam.indexOf('z',4))
console.log(nam.trim())
console.log(nam.toUpperCase())
nam=nam.replaceAll("-","*")
console.log(nam.toUpperCase())
console.log(nam.substring(2,5)
*/

// var sli="cenzo zone"
// console.log(sli)
// var ans1=sli.slice(3,7);
//                 //0        1         2       3        4
//                 //-5     -4         -3        -2          -1 
// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// const myBest = fruits.slice(0,4);
// console.log(myBest)


//Method chaining

// var name="avinash".toUpperCase().toLowerCase().slice(2).toUpperCase()
// console.log(name)

//if
//if - else
//if if 
//elseif if ladder
// var x=0;
// var y=2;
// var z=3;
// if(!(x==1))
// console.log("noo")
// else
// console.log("nooqqq")

// // if(x===0)
// // console.log("noo")
// // else if(y==0)
// // console.log("nooty")
// // else if(z==0)
// // console.log("nooz")
// // else
// // console.log("xyz")

//4%5

//switch
// var x='9';
// var a=9;
// var b=5;
// switch(x){
//     case '+':console.log(a+b);
//     break;
//     case '-':console.log(a-b);
//     break;
//     case '*':console.log(a*b);
//     break;
//     case '/':console.log(a/b);
//     break;
//     default:
//         console.log(a%b)
// }



//while
// i=9;
// while (i>11) {
//     console.log("jii")
// }

// //for
// var s="aanbs";
// //0 1 2 3 4

// for (let i = 0; i < 5; i++) {
//     for (let j = 0; j < 5; j++) {
//         console.log("*");
//     }
// }
// /*
//     i=0
//     0-  *****
//     1-  *****
//     2-  *****

   
// */


console.log("-----------------------------------------------Arrays Function--------------------------------------------- ");
const arr=["a","b","c","d"]
console.log(arr[2]); // accesssing the array 
arr[1]="bannana" // changging the specific value in the array 
console.log("the array length "+arr.length); // array length 
arr.push("grape"); //push in the array
arr[arr.length]="lemon" //add values without push method 
console.log(Object.values(arr));
const arr2=[];
console.log(arr2);
console.log(typeof arr2); // objects 
arr.push("a"); // push method 
arr.pop("a"); //pop method 
console.log(arr);
console.log(arr.lastIndexOf("a")); //last indexof 
console.log("--------------loop using foor loop--------------");

for(let i=0;i<arr.length;i++){
        console.log(arr[i]);
}
book=["programming with c","c++","java","dev ops","react"]
console.log("------------loop using mapfunction -----------------");

book.map((value)=>{
        console.log(value);
})
console.log("------------loop using foreach -----------------");

book.forEach((value)=>{
        console.log(value);
})

console.log("------------sort in descending order -----------------");
console.log(book.reverse());
console.log(book.sort());

// sort in decending order
console.log(book.reverse());

let arr4=arr.concat(book);
console.log(arr4.sort());
console.log(arr);
// arr.push("good",2) // we cannot insert the value at the specific position 

arr4=[...arr.slice(0,2), // thered operator 
        "good",
        ...arr.slice(2)]
        //[a,banana,good,......]

console.log(arr4);

// splice 
const months = ['Jan', 'March', 'April', 'June'];
// months.splice(1, 0, 'Feb');
months.splice(1, 2, 'Feb');
// Inserts at index 1
console.log(months);

arr4= new Array(1,2,3,4,5,6,7,8,9,0) // array constructor 
console.log( typeof arr4);
// task 
//  demonstate the callback() of sort
// some array functions like indexof ,indexof some(),
//  rotate the array 
// example 1234567890 rotatevalue=7   result  4567890123

//2darrays 
const tarr=[
        ["divakaran",20],
        ["kumaran",40],
        ["guru",86]
]
tarr[0][0]="ravi";
console.log(tarr[0][0]);


console.log("---------------rest paramenters-----------------");
function printit(name,...restparamenters){
        console.log(name);
        if(restparamenters){
                restparamenters.map((data)=>{
                        console.log(data);
                })
        }
}
printit("suresh","kamalhasan","vijay","surya");

console.log("--------------- callback function -----------------");
function fun(gun){
        console.log("printinggun");
        gun();
        console.log("endgun");
 }
fun(()=>{
        console.log("printhello");
})
// task 
// demonstate the callback() of sort
// some array functions like indexof ,indexof some(),
//  rotate the array 
// example 1234567890 rotatevalue=7   result  4567890123

