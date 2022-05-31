
var counter = 2;
   add = () =>{
    document.getElementById("show" + counter).style.display = "block";
    counter++;
}
calculate = () =>{
    var sum = 0;
    var cr_hr = 0;
    for(let i=1;i<=(counter-1);i++){
       sum += document.getElementById("cr_hr"+i).value * document.getElementById("grade"+i).value 
      cr_hr += parseInt(document.getElementById("cr_hr"+i).value);
    }
    document.getElementById("result").innerHTML = sum/cr_hr; 
    
}