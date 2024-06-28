// // console.log("hello world")
// let num=-5;

// if(num>0){
//     console.log("Number is Postive.");
// }

// else if(num<0){
//     console.log("Numberis Negetive");
// }
// else{
//     console.log("Number is Zero")
// }

// (1)
// let num=7;

// if(num%2==0){
//     console.log("Number is Even");
// }
// else{
//     console.log("Number is Odd")
// }
// (2)
// let i;

// for(i=1;i<=100;i++){
//     if(i%2==0){
//         console.log(i);
//     }
// }
// (3)
// let i;
// let sum=0;
// for(i=1;i<=100;i++){
//     if(i%2!=0){
//         sum=sum+i
        
//     }
// }
// console.log("Sum of Odd number:-"+sum);

//Task with Fucntions
// (1)
function call1(num1){
if(num1%2==0){
    console.log("Number is Even");
}
else{
    console.log("Number is Odd")
}
}
call1(13);

// (2)
function call2(num3){
    let i;

    for(i=1;i<=num3;i++){
        if(i%2==0){
            console.log(i);
        }
    }
}
call2(20);
// (3)

function call3(num2){
    let i;
    let sum=0;
    for(i=1;i<=num2;i++){
        if(i%2!=0){
            sum=sum+i
            
        }
    }
    console.log("Sum of Odd number:-"+sum);

}
call3(100);
