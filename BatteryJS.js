


alert("welcome\nTHIS WILL SHOW YOUR BATTERY PERCENTAGE");
 
 function priyanshi(){
     alert ("Thank You For visiting");
 }

navigator.getBattery().then(function(battery){
    function updateAllBatteryInfo(){
        
        updateLevelInfo();
       
    }
    
    updateAllBatteryInfo();
    
    
    battery.addEventListener('levelchange', updateLevelInfo);
    
     function updateLevelInfo(){
     document.getElementById("battery").innerHTML =  Math.round(battery.level*100) + '%';
       if(battery.level <= 0.2){
           document.getElementById("battery").style.color =  "red";
       }else{
           document.getElementById("battery").style.color =  "green";
       }
          
    };
     
    
});
