// // let butn = document.getElementById("btn")
// // butn.addEventListener("click" , ()=>{
// //     butn.style.backgroundColor = "red"
// //     console.log("clicked")
// // })

// // let tm =document.getElementById("time")
// // function timeout(){
// //     if(tm.innerHTML != 0){
// //         tm.innerHTML -=1;
// //     }
// // }
// // let coumter = setInterval(timeout , 1000);

// // let n1 = [10,30,10,20];
// // let n2 = [30,20,10];

// // console.log([...n1 , ...n2].length*Math.max(...(new Set(n1))))

// // let re = /(\w|http?)+(\w)+.+(org)$/ig

// // let url1 = "elzero.org"
// // let url2 = "http:elzero.org"
// // let url3 = "https:elzero.org"

// // console.log(url1.match(re))
// // console.log(url2.match(re))
// // console.log(url3.match(re))

// // let date = new Date()
// // document.write(`the date today is ${date.getDate()}/${date.getUTCMonth() + 1}/${date.getFullYear()}`)

// let d = document.getElementById("d1");




// function sumOdd(arr) {
//     // write your code here
//     let sum = 0;
//     for(let i=0; i <= arr.length; i++){
//         if(arr[i]  == 7){
//             continue;
//         }
//         else{
//             sum += arr[i]
//         }
//     }
//     return sum
// }

// console.log(sumOdd([1 , 2 , 4 ,3]))

// function last_elm(arr) {
//     // write your code here
// 	for (let i = 0; i <=arr.length; i++){
//         if(i == arr.length-1 )
//         return arr[i];
//     }
// }

// function oddsVsEvens(num) {
//     var odd = 0;
//     var even = 0;
//     let arr = num.toString().split("");
//     var realDigits = arr.map(Number)
//     for(let i =0; i <= realDigits.length; i++){
//         if(realDigits[i] % 2 == 0){
//             even += realDigits[i] 
//         }
//         else if(realDigits[i] % 2 == 1)
//         odd += realDigits[i] 
//     }
//     if(odd > even)
//     return "odd"; 
//     else if(even > odd)
//     return "even";
//     else return "equal"
// }

// function sort_array(my_array, typeParam) {
//     // write your code here
//     if(typeParam == 'S'){
//         let tmp = 0;
//         for(let i = 0; i <= my_array.length; i++){
//             for(let j = 0; j <= my_array.length; j++){
//             if(my_array[i] <= my_array[j]){
//                 tmp = my_array[i] 
//                 my_array[i] = my_array[j]
//                 my_array[j] = tmp
//             }
//             }
//         }
//     }
//     if(typeParam == 'B'){
//         let tmp = 0;
//         for(let i = 0; i <= my_array.length; i++){
//             for(let j = 0; j <= my_array.length; j++){
//             if(my_array[i] >= my_array[j]){
//                 tmp = my_array[i] 
//                 my_array[i] = my_array[j]
//                 my_array[j] = tmp
//             }
//             }
//         }
//     }
//     return my_array;
// }

// function addStrNums(num1, num2) {
//     // write your code here
//     let n1 = Number(num1);
//     let n2 = Number(num2);
//     let total = 0;
//     if(isNaN(n1)){
//     return -1;}
//     else if(isNaN(n2)){
//         return -1;
//     }
//     else{
//         total = n1 + n2;
//         total = total.toString()
//     }
//     return total;

// }



// function hasSpace(strParam) {
//     // write your code here
//     let arr = strParam.split("");
//     for(let i = 0; i <= arr.length; i++){
//         if(arr[i] == " "){
//             arr[i] = "#"
//         }
    
//     }
//     return arr.join("")
// }

document.querySelector(".control-buttons span").onclick = function () {

    let yourName = prompt("Whats Your Name?");

    if (yourName == null || yourName == "") {

        document.querySelector(".name span").innerHTML = 'Unknown';

    } else {

        document.querySelector(".name span").innerHTML = yourName;

    }

    document.querySelector(".control-buttons").remove();

    let minutes = document.getElementById("minutes")
    let seconds = document.getElementById("seconds")

    let countdown= setInterval(() =>{
        if(seconds.innerHTML > 0 ){
            seconds.innerHTML -= 1;
            
        } else{
            if(minutes.innerHTML > 0){
                minutes.innerHTML -= 1
                seconds.innerHTML = 1
                
                }else { 
            clearInterval (countdown)
            } 
            }
        }, 1000);

        if(countdown == 0){
        }
    

    

    };

let duration = 1000;

let blocksContainer = document.querySelector(".memory-game-blocks");

let blocks = Array.from(blocksContainer.children);


let orderRange = Array.from(Array(blocks.length).keys());


shuffle(orderRange);



blocks.forEach((block, index) => {


block.style.order = orderRange[index];


block.addEventListener('click', function () {

    flipBlock(block);

    });

});

function flipBlock(selectedBlock) {

    selectedBlock.classList.add('is-flipped');

    let allFlippedBlocks = blocks.filter(flippedBlock => flippedBlock.classList.contains('is-flipped'));

    if(allFlippedBlocks.length === 2){
        
        stopclicking();

        checkMatchesBlocks(allFlippedBlocks[0] , allFlippedBlocks[1] )
    }



}



function stopclicking(){
    blocksContainer.classList.add('no-clicking');

    setTimeout(() =>{

        blocksContainer.classList.remove("no-clicking")   

        }, duration)
}

function checkMatchesBlocks(firstBlock , SecondBlock){

    let triesElement = document.querySelector(".tries span")

    if(firstBlock.dataset.technology == SecondBlock.dataset.technology){
        firstBlock.classList.remove("is-flipped")
        SecondBlock.classList.remove("is-flipped")

        firstBlock.classList.add("has-match")
        SecondBlock.classList.add("has-match")

        document.getElementById("True").play()

    }else{

        triesElement.innerHTML = parseInt(triesElement.innerHTML) + 1;

        setTimeout(() =>{

            firstBlock.classList.remove("is-flipped")
            SecondBlock.classList.remove("is-flipped")

        }, duration)

        document.getElementById("False").play()
    }

}

function shuffle(array) {

    let current = array.length,
        temp,
        random;

    while (current > 0) {

        random = Math.floor(Math.random() * current);

        current--;

        temp = array[current];

        array[current] = array[random];

        array[random] = temp;

    }
    return array;
    }


