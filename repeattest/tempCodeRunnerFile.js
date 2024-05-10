// question1

// // function binarysearch(arr,target){
// //     let start=0;
// //     let end=arr.length-1;
// //     while(start<=end){
// //         let mid=Math.floor((start+end)/2);

// //         if(arr[mid]==target){
// //             return mid;
// //         }
// //         else if(arr[mid]<target){
// //             start=mid+1;
// //         }
// //         else{
// //             end=mid-1;
// //         }
// //     }

    
// // }

// //  let ans=binarysearch([10,20,30,40,50],40);
// //  console.log(ans);
// // let a=10;
// // console.log(a)

// // question 2

// // class Parent{
// //     firstname;
// //     lastname;

// //     constructor(fname,lname){
// //       this.firstname=fname;
// //       this.lastname=lname;
// //     }
// // }

// // let p1= new Parent("abc","lamba");
// // console.log(p1);



// // question 3

// // let Object={
// //     fname:"xyz",
// //     age:10,
// //     grade:"D",
// // }
// // let Object2=[...Object];

// // question 4-this keyword----------------------------------
// // condition1-window object-- global me 
// console.log(this);


// // condition2-  parent object-- normal function
// function hello(){
//     console.log(this);
// }

// hello();

// // condition 3- parent object--ek normal function or ek fat arrow function

// function hello(){
//     console.log("well");

//     true=()=>{
//         console.log(this);
//     }
   
// }

// hello();
// hello(true());

// // condition 4- window object-- dono fat arrow function

// one=()=>{
//     two=()=>{
//         console.log(this);
//     }
// }

// // condition 5-- dono normal function- parent object

// function Happy(){
// function  Date(){
// console.log(this);
//     }
// }