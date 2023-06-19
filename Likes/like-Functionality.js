
var ilikecount = document.querySelector("#likenum");
var count = 0;


console.log(ilikecount);

function likebtnIncrement(){
    count++;
    ilikecount.innerText = count;
    console.log(count)
    return count;
   
}

