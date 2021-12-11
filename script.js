var cc
let maleName = ["Kwasi","Kwadmo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
let femaleName = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
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

}
 
//To refresh the inputs after the user has filled in the form//
function formRefresher(){
    dovu
}





