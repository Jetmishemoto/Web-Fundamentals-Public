

var city1 = document.getElementById("city-1").innerText;
var city2 = document.getElementById("city-2").innerText;
var city3 = document.getElementById("city-3").innerText;




function cityChangeAlert(id){
    // console.log(loadedcity)
    if(id == 1){
        alert( "Loading weather report for " + city1);
        document.getElementById("stateName").textContent = city1;
    }else if(id ==2){
        alert( "Loading weather report for " + city2);
        document.getElementById("stateName").textContent = city2;
    }else if(id == 3){
        alert( "Loading weather report for " + city3);
        document.getElementById("stateName").textContent = city3;
    }
}


cookieb = document.getElementById("cookiebtn")


function acceptCookie(){
    cookieArea = document.querySelector(".cookieArea").remove();



}

