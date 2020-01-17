# Summary
a simple calendar application using JQuery that allows the user to save events for each hour of the day

# How it Works
The app displays standard business hours (9 a.m. to 5 p.m.) for the current day. Each time slot represents one hour and contain the time, a field for user to input a task, and save button. Each hour is be color coded to reflect whether the time slot is in the past (gray), the present (red), or the future (green). It changes depending on the time of day. Task in the past are uneditable. Clicking on the save button store the time and user input in localStorage. The data are saved for the entire day, even if the page is refreshed or reopens the application later in the day. The next day all tasks are cleared to enter tasks for the new day.

# Enhancement
* allow users to change days and save tasks for that day
* a custom alert pops when task is saved or for error message
* save button removed or replaced with different image/style for past tasks

