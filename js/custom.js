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

function getGender(){    
    let gender = checkRadiobutton();
     return gender;
}
function getUserinputAndCalculateDay(){

    let year = document.getElementById("year").value;
    let century = parseInt (year.substring(0,2));
    year=parseInt(year);
    let month = document.getElementById("month").value;
    let day = document.getElementById("day").value;

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
    let dayOfTheweek = getUserinputAndCalculateDay();

    if(gender.toLocaleLowerCase().startsWith('m')){
        akanName=MALE_NAMES[dayOfTheweek];
    } else{
        akanName= FFEMALE_NAMES[dayOfTheweek];
    }
    // //Output the name of the user for the birthday given
     document.getElementById("name_label").innerHTML = " " + akanName;
    
    
}
