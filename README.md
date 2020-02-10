# Day Planner :ledger:
The daily planner allows the user to see their day at a glance, schedule time effectively, and improve productivity.

## user story
AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively

## how to use
The application displays timeblocks for the current day for standard business hours (9 a.m. to 5 p.m.). Each timeblock contains an input field and save button. Clicking a timeblock's "Save" button stores the input text in local storage, allowing the text to persist when the application is refreshed. Each timeblock is color coded to indicate whether it is in a past (gray), present (red), or future hour (green).  If timeblock is in the past, the save button is disabled. 

## libraries
It uses the Moment.js library to work with date and time.

## enhancements
* The application would allow users to select different days in the week/month and schedule tasks.
* Save button would gray out for past hours
* Replace alert with a custom module or text on screen that displays briefly to notify when a task has been save
* Add clear button that would remove the daily task or all for the day

## user acceptance story
GIVEN that an employee adds events to a specific hour in a calendar 
WHEN the employee clicks the save button
THEN events are saved in the timeblock for that hour


