
   /*var maleName = ["Kwasi","Kwadmo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
    var femaleName = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
    function  Submit(){
        var year = document.getElementById("Year").value;
        var month = document.getElementById("Month").value;
        var day = document.getElementById("Day").value;
        var gender = document.getElementById("Gender").value;
        var birthday = date ('_{Year} _{Month} _{Day}')
        var dtString = birthday.todtString()
        var brthDate = birthday.getday()
        //Date month year calculation formula is as follows below //
        var answer = (((cc/4) -2 * cc - 1) + ((5 * Year / 4))+((26 * ((Month + 1)/ + 1)/ 10))+ Day)% 7;
        if (gender == 'male'){
            let Name = maleName[brthDate]
            alert ('You Bere Born On' + dtString + 'Your Aan Name Would Be' + Name)
        }
        else if (gender =='female'){
            let Name = femaleName[brthDate]
            alert('You Were Born On' + dtString + 'Your Akan Name Would Be' + Name)
            
        }
        //Incase the user stupidly or mistakenly fails to input all the required details Js will help me correct them//
        alert('You Have Not Filled All The Details Please Revisit The Form And Submit')
    //wrong Day input//
    if( Day > 31 || Day < 1){
        alert('Invalid Date Input')
    }
    //wrong Month input//
    if(Month > 12 || Month < 1){
        alert('Invalid Month Input')
    }
    //To refresh the inputs after the user has filled in the form//
    function formRefresher(){
        document.getElementById("refresh").reset();
        formRefresher();
    }
}

    

   alert('You wewre born on a monday you Akan Name is Mwangi ');*/

    // Function to refresh the form after submition
function formRefresher(){
    document.getElementById("refresh").reset();
}

// Event function on button
function Submit(){

    var birthDate=document.getElementById("Date").value;
    var dateEntered= birthDate.split("-");
    var day=parseInt(dateEntered[2]);
    var month=parseInt(dateEntered[1]);
    var year=parseInt(dateEntered[0]);

    //Centuary calculation
    var centry=(year-1)/100+1; 
    var dayOfTheWeek = ( centry/4 -2*centry-1 + 5*year/4  + 26*(month+1)/10 + day ) % 7;
        
    document.getElementById("display").innerHTML=Math.round(dayOfTheWeek);
    var femaleNames=["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
    var maleNames=["Kwasi"," Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
    var gender=document.getElementById("gender").value;
    var daysOfWeek=["Sunday", "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    var dOfWeek = Math.round(dayOfTheWeek)

    //form validation and output
    if(!isNaN(dOfWeek)){
        if(gender=="Male"){
        alert("Your akan names is"+ maleNames[Math.round(dayOfTheWeek)]+"  you were born on "+ daysOfWeek[dOfWeek]);
        }
        else if(gender==="Female"){
        alert("You were born on "+daysOfWeek[dOfWeek]+ " and Your akan name is " + femaleNames[Math.round(dayOfTheWeek)]);
        }else{
            alert("Enter valid dates and choose your gender");
            document.getElementById("display").innerHTML="";
        }
    }
            else{
                alert("Enter valid birthday and choose your gender");
            
            }
    
    
    //call to the reFresh function
    formRefresher();
}

    





