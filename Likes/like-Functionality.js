
var ilikecount = document.querySelector("#likenum");
var ilikecount1 = document.querySelector("#likenum1");
var ilikecount2 = document.querySelector("#likenum2");
var count = 0;
var count1 = 0;
var count2 = 0;


// console.log(ilikecount);

function likebtnIncrement(id){
    console.log(id)
    
    if(id == 1){
        count++;

        ilikecount.innerText = count;
       
    }else if(id == 2){

        count1++;
        ilikecount1.innerText = count1;
        

    } else if(id == 3){
        count2++;

        ilikecount2.innerText = count2;
    }
    
    
}

