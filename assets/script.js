const todayDate = moment().format('ll');
const todayDateShort = moment().format('L'); 
const currentHour = moment().format('H');
let tasks = {};

//create each hourly task



//displays current date in header
$("#date").text(todayDate);

//changes color of hourly tasks depending on current time
const arrHours = [9, 10, 11, 12, 13, 14, 15, 16, 17];
for (let i = 0; i < arrHours.length; i++) {
    let divVal = $("#row-"+arrHours[i]).attr("data-hour");
    if (currentHour > parseInt(divVal)) {
        $("#row-"+arrHours[i]).css("background-color", "gray");
        $(".task"+arrHours[i]).attr('readonly', true);
    }
    else if (currentHour == parseInt(divVal)) {
        $("#row-"+arrHours[i]).css("background-color", "red");
    }
    else if (currentHour < parseInt(divVal)) {
        $("#row-"+arrHours[i]).css("background-color", "green");
    }
}

//saves task entered for the appropriate hour entered
$(".submitBtn").on("click", function (){
    let hourVal = $(this).attr("data-button");
    const taskVal = $(".task"+hourVal).val();
    if (taskVal.length > 0){
        addTask(hourVal, taskVal);
    }
    else {
        alert("Please enter a task.");
    }
});

function getStoredDate () {
    let date = JSON.parse(localStorage.getItem("tasksDate"));
    if (date !== todayDateShort) {
        localStorage.clear();
    }
}
   
function getExistingTasks () {
    tasks = JSON.parse(localStorage.getItem("hourlyTasks"));
    //if null - create new array and add value
    if (tasks === null) {
        tasks = {};
        localStorage.setItem('tasksDate', JSON.stringify(todayDateShort));
    }
    else {
        populateExistingTask();
    }
}

function populateExistingTask () {
    if (tasks !== null) {
        for (let i = 0; i < arrHours.length; i++) {
        $(".task"+arrHours[i]).text(tasks[arrHours[i]]);
        }
    }
}

function addTask (hourVal, taskVal){
    tasks[hourVal] = taskVal;
    localStorage.setItem('hourlyTasks', JSON.stringify(tasks));
}

getStoredDate();
getExistingTasks();