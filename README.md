<<<<<<< HEAD
# Day Planner :ledger:
The daily planner is a simple calendar application that allows the user to see their day at a glance, schedule time effectively, and improve productivity.

## user story
AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively

## how it works
The application displays one-hour time blocks for the current day for standard business hours (9 a.m. to 5 p.m.). Each time block contains an input field and save button. Clicking a time block’s "Save" button stores the input text in local storage, allowing the text to persist when the application is refreshed. Each time block is color coded to indicate whether it is in a past (gray), present (red), or future hour (green).  Timeclocks in the past are not editable, and the save button is disabled. When refreshed, the timeslots colors are updated depending on the current time. The next day all tasks are cleared to enter tasks for the new day.

## libraries
It uses the Moment.js library to work with date and time.

## enhancements
* Allow users to select different days in the week/month and schedule tasks for that day
* Save button would gray out or be removed for past hours
* Replace alerts with a custom module or text on screen that briefly displays messages or errors 
* Add clear button that would remove the daily task or all for the day
* Add a refresh button to allow the user to update the current time

## user acceptance story
GIVEN that an employee adds events to a specific hour in a calendar 
WHEN the employee clicks the save button
THEN events are saved in the timeblock for that hour


