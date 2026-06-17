// let seconds=0;
// let mintues=0;
// let hours=0;

// let timmer=0;

// function start(){
//     if(timmer !== 0){
//         return;
//     }
//     timmer=setInterval(()=>{
//         seconds++;
//         if(seconds==60){
//             mintues++;
//             seconds=0;
//         }
//         if(mintues==60){
//             hours++;
//             mintues=0;
//         }

//         let h=hours <10 ? "0" + hours:hours
//         let m=mintues <10 ? "0" +mintues:mintues
//         let s=seconds <10 ? "0" +seconds:seconds

//         document.getElementById("Display").innerText=h+":"+m+":"+s

//     },1000)
// }

// function stop(){
//     clearInterval(timmer);
//     timmer=0;
// }

// function reset(){
//     clearInterval(timmer);
//     timmer=0
//     seconds=0;
//     mintues=0;
//     hours=0;
//     document.getElementById("Display").innerText="00:00:00"
// }