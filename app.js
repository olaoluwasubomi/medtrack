var one = document.getElementById("bugg");
var two = document.getElementById("remove");
var three = document.getElementById("open");


var four = document.getElementById("hide1");
var six = document.getElementById("icon");
var nine = document.getElementById("remove");
var seven = document.getElementById("open");

let pass = document.getElementById("save");
let stops = document.getElementById("send");
pass.onclick = function(){
    alert("The diagnosis and prescription was saved successfully");
}
stops.onclick = function(){
    alert("Diagnosis and Prescription sent successfully");
}

one.onclick = function(){
    one.style.display = "block";
    two.style.display = "block";
    three.style.display = "block";
}
two.onclick = function(){
    one.style.display = "block";
    three.style.display = "none";
    two.style.display = "none"
}
// six.onclick = function(){
//     six.style.display="none";
//     seven.style.display = "block";
//     nine.style.display = "block";

// }
nine.onclick = function(){
    seven.style.display ="none";
    // six.style.display = "block";
    nine.style.display = "none";
}