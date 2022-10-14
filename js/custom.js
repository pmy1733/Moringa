const FFEMALE_NAMES=[
    "Akosua",
    "Adwoa",
    "Abenaa",
    "Akua",
    "Yaa",
    "Afua",
    "Ama"

];
const MALE_NAMES=[
    "Kwasi",
    "Kwadwo",
    "Kwabena",
    "Kwaku",
    "Yaw",
    "Kofi",
    "Kwame"
];
const DAYS_OF_THE_WEEK=[
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];


function computeDayOfTheweek(){

    let month = getMonth();
    let day = getDay();
    let year = getYear();
    let century = parseInt (year.substring(0,2));
    year=parseInt(year);

    let dayOfTheWeek = Math.round (( ( (century/4) -2*century-1) + ((5*year/4) ) + ((26*(month+1)/10)) + day ) % 7);

    return dayOfTheWeek;
    
}

function checkRadiobutton() {

    let gender = null;
    let ele = document.getElementsByName('gender');
      
    for(i = 0; i < ele.length; i++) {
        if(ele[i].checked)
        gender = ele[i].value;
    }
    return gender;
}

function main(){
    let akanName = null;
    let gender = getGender();
    let dayOfTheweek = computeDayOfTheweek();

    if(gender.toLocaleLowerCase().startsWith('m')){
        akanName=MALE_NAMES[dayOfTheweek];
    } else{
        akanName= FFEMALE_NAMES[dayOfTheweek];
    }

    // check if valid inputs were provided otherwise the computation will result to undefined
    if (akanName==undefined){
        akanName="Error: please use number within the ranges provided."
    }
    // //Output the name of the user for the birthday given
     document.getElementById("name_label").innerHTML = " " + akanName;
    
    
}
//get and validate the month
function getMonth(){
    let month = document.getElementById("month").value;
    if(month > 0  && month <=12){
    return month;
    }else{
        alert (" Month must be between 1 - 12.");
     
    }
}

//get and validate the day
function getDay(){
    let day = document.getElementById("day").value;
    if(day > 0 && day<=31){
    return day;
    }else{
        alert (" Day must be between 1 - 31.");
    
    }
}

//get and validate the year
function getYear(){

    let year = document.getElementById("year").value;
    if(year.length != 4){
        alert("year must be 4 digits i.e 1989");
    }else{

    return year;
    }
}
function getGender(){    
    let gender = checkRadiobutton();
     return gender;
}