//  let obj = {
//     item : "pen",
//     price : 10,
//  }

// let output = ` the cost of this ${obj.item} is ${obj.price} rupees `

//  console.log(output);

// console.log("my name is" + " mohit");


// arr2 = [85,97,44,37,76,60];
// let sum = 0;
// for(let i of arr){
//     sum += i;

// }

// console.log(sum/arr2.length);


// arr = [250,645,300,900,50];
// let idx = 0;
// for(let i of arr){
//     console.log(`value before offer ${idx} = ${i}`);
//     offer = i/10;
//     arr[idx] = arr[idx] - offer
//     console.log(`value after offer = ${arr[idx]}`);
//     idx++
//  }
//  let foodItems = ["potato","apple","litchi","tomato"]
//  foodItems.push("orange");
//  console.log(foodItems);


// let arr = [3,5,8,9,12,14];
// let [a, , ,...rest] = arr;

// console.log(a,rest);
// let{a,b} = {a :1,b:5}
// console.log(a,b);


// spread operator

// let arr1 = [3,5,8]
// let obj1 ={...arr1 }
// // console.log(obj1);



// function sum (v1,v2,v3){
//     return v1 + v2 +v3
// }

// console.log(sum(...arr1));


//  const calculateFactorial= (number) => {
//     if(number === 0 || number === 1){
//         return 1} else {

//             return number * calculateFactorial(number - 1);
//         } 
//  }
// console.log("result",calculateFactorial(5));



//calculte the factorial of the number by using javascript
// const calculateFactorial =(number) =>{
//     if(number === 0 || number === 1)return 1
//     else return number * calculateFactorial(number - 1)
// }
//   console.log("result",calculateFactorial(8));
// // num => num * num - 1 * num - 2 * num - 3 * num - 4
//    const factorial = (num) => {
//     if(num === 1){
//         return 1;
//     } else {
//         return num * num - 1;
//     }
//    };

// 5 =>5 * (4 * (3* (2)))

// recursion is when function call itself again and again

// const factorial = (num) => {
//     if(num === 1 || num === 0){
//         return 1;
//     }else {
//         return num * factorial(num -1)
//     }
// }

// console.log(factorial(7));


// let str = "apnabhidu";
//   console.log(str.split(""));
// console.log(str.replace("a","s"));
// console.log(str.slice(1,5));
// console.log(str.charAt(5));
// const arr  = [5,40,8,3,2]
// arr.sort((a,b) => a - b);
// console.log(arr[0]);


 
// const  findLongestWord= (str) =>{
//     if(str.trim() === 0){
//      return false
//     }
//     words = str.split(" ")
//     // words = words.sort((a,b) => a.length - b.length);
//     // console.log(words);
//     // return words.at(-1)
//     return words.reduce((h1,h2) =>  h2.length > h1.length ? h2 : h1)
   
// }



// console.log(
//     findLongestWord("watch Thapa Technical javascript course on youtube")
// );


// let a = 38.9999;
// let b = 34;

// console.log(Math.round(a) * 3);
// console.log(Math.floor(a));
// console.log(Math.ceil(a));
// console.log(Math.random());
// console.log(Math.abs(a));
// console.log(Math.pow(3,2ZX));


function  animate(timestamp){
    if(!startime){
        startTime = timestamp;
    }
    let progres = timestamp - startTime;
    BaseAudioContext.style
}







window.requestAnimationFrame(animate)









































