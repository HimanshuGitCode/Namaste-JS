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


console.log("Start");

setTimeout(function cb(){
  console.log("Call Back");
},5000);

console.log("End");

let startDate = new Date().getTime();
let endDate = startDate;
while(endDate < startDate + 10000){
 endDate = new Date().getTime();
}

console.log("While Expire here"); 