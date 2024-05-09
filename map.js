const arr = [1,5,2,3,8];

function Double(x){

    return x * 3;
}

const output = arr.map((x) => {
  return x * 3;
});

console.log(output);
document.write("Double  "+output);

// const output = arr.map((x)=>{

//     return x.toString(2)

// })

// console.log(output);
// document.write("Binary  "+output);


