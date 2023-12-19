function x(){
    var i = 1;
    setTimeout(function(){
        console.log(i);
    }, 5000); //5000  mili second was a time for that output 
}
function z(){
    var k = ("Namaste" + " Himanshu Singh");
    setTimeout(function(){
        console.log(k);
    }, 10000)
}
    console.log("Himanshu Singh");
x();
z();