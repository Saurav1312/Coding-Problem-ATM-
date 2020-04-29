function atm(){
    var a,b,c;
    a=Number(document.getElementById("withdraw").value);
    b=Number(document.getElementById("total").value);
    
    
    if (a%5===0 && 0<a && a<=2000 && a < b && 0<b && b<=2000 ){
        c= b-(a+0.50);
        document.getElementById("transaction").innerHTML= "Succesfull Transaction";
        document.getElementById("balance").innerHTML= c.toFixed(2);
    }
    
    else{
        if ( b< 0 || b> 2000){
            document.getElementById("balance").innerHTML=  "Total Amount should be more than 0 and less than 2001" ;
          document.getElementById("transaction").innerHTML= "Unsuccesfull Transaction!!";
        }
       else {
        c= b;
        document.getElementById("balance").innerHTML= c.toFixed(2);
        document.getElementById("transaction").innerHTML= "Unsuccesfull Transaction";
       }

    }
    }
