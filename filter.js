const arr = [9,5,2,3,8];

// Using Filter


function IsEven(x){

    // console.log(x)
    return x > 2;
}

const output = arr.filter(IsEven)


console.log(output);
document.write("Filter  "+output);


// const output = arr.filter((x)=>{

//     return x%2;
// })

// console.log(output);
// document.write("Filter  "+output);