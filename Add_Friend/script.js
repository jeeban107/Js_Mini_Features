 var istatus = document.querySelector("h5");

 var btn = document.querySelector(".add");

var flag = 0;

btn.addEventListener("click",function(){
    
    if(flag == 0){
        istatus.innerHTML="Friends";
        istatus.style.color="green";
        btn.innerHTML="Remove";
        btn.style.backgroundColor ="red";
        flag =1;    
    }
    else{
        istatus.innerHTML="Stranger";
        istatus.style.color="red";
        btn.innerHTML="Add Friend";
        btn.style.backgroundColor ="rgb(102, 166, 135)";
        flag =0;    
    }
})


