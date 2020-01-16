const todayDate = moment().format('ll');
const todayDateShort = moment().format('L'); 
const currentHour = moment().format('H');
let tasks = {};

//displays current date in header
$("#date").text(todayDate);

//changes color of hourly tasks depending on current time
const arrHours = [9, 10, 11, 12, 13, 14, 15, 16, 17];
for (let i = 0; i < arrHours.length; i++) {
    let divVal = $("#task-"+arrHours[i]).attr("data-hour");
    if (currentHour > parseInt(divVal)) {
        $("#task-"+arrHours[i]).css("background-color", "lightgray");
        $(".task"+arrHours[i]).attr('readonly', true);
        $("#row-"+ arrHours[i] + " button").addClass('click-disabled');
    }
    else if (currentHour == parseInt(divVal)) {
        $("#task-"+arrHours[i]).css("background-color", "red");
        $(".task"+arrHours[i]).addClass('focus');
        $(".btn-"+ arrHours[i]).addClass('click-enabled');
    }
    else if (currentHour < parseInt(divVal)) {
        $("#task-"+arrHours[i]).css("background-color", "green");
        $(".task"+arrHours[i]).addClass('focus');
        $(".btn-"+ arrHours[i]).addClass('click-enabled');
    }
}
//calls function to check local storage if any task stored for today
getStoredDate();

//calls function to get any existing tasks from today from local storage
getExistingTasks();

//saves task entered for the appropriate hour entered
$(".submitBtn:not('.click-disabled')").on("click", function (){
    let hourVal = $(this).attr("data-button");
    const taskVal = ($(".task"+hourVal).val()).trim();
    if (taskVal.length > 0){
        addTask(hourVal, taskVal);
    }
    else {
        alert("Please enter a task.");
    }
});

//checks if stored data for that day when page loads and clears local storage if from prior day
function getStoredDate () {
    let date = JSON.parse(localStorage.getItem("tasksDate"));
    if (date !== todayDateShort) {
        localStorage.clear();
    }
}

//gets existing tasks for that data from local storage and calls function to populate it
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

//populates hourly tasks that were saved in local storage
function populateExistingTask () {
    if (tasks !== null) {
        for (let i = 0; i < arrHours.length; i++) {
        $(".task"+arrHours[i]).text(tasks[arrHours[i]]);
        }
    }
}

//adds hourly task and stores in local storage
function addTask (hourVal, taskVal){
    tasks[hourVal] = taskVal;
    localStorage.setItem('hourlyTasks', JSON.stringify(tasks));
    alert("Your task has been saved!");
}

