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
    let gender = prompt("Enter your Gender: ");
    return gender;
}
function getUserinputAndCalculateDay(){
    let year = prompt("Enter Year of Birth(4 digits): ");
    let month = prompt("Enter Month of Birth (1-12): ");
    let day = prompt("Enter Day of Birth (1-31): ");

    let century = parseInt (year.substring(0,2));
    year=parseInt(year);

    return Math.round ( ( ( (century/4) -2*century-1) + ((5*YY/4) ) + ((26*(month+1)/10)) + day ) % 7);
    
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
    //Output the name of the user for the birthday given
    document.getElementById("name").innerHTML = "your name is: " + akanName;
}