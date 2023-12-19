// function x() {
//   for (var i = 1; i <= 5; i++) {
//     function close(x) {
//       setTimeout(function () {
//         console.log(x);
//       }, x * 1000);
//     }
//     close(i);
//   }
//   console.log("Namaste Himanshu Singh");
// }
// x();

//set time out using for loops

// console.log("Start");

// setTimeout(function cb(){
//   console.log("Call Back");
// },5000);

// console.log("End");

// let startDate = new Date().getTime();
// let endDate = startDate;
// while(endDate < startDate + 10000){
//  endDate = new Date().getTime();
// }

// console.log("While Expire here"); 

// Higher order fucntion for calcualte area of circle

const radius = [3,1,2,4];

const calcualteArea = function(radius){
  const output = [];
  for(let i = 0;i<radius.lenght; i++){
    output.push(Math.PI * radius[i] * radius[i]);
  }
  return output;
};

console.log(calcualteArea(radius));