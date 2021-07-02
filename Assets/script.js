//grabbed the current day container element, timeblock element and all textareas from webpage
var currentDayContainer = $('#currentDay');
var timeBlock = $('.time-block');
var textAreaBoxes = $('textarea');

// formats the day generated by the moment command and adds the day and date to the currentDayContainer
var currentDay = moment().format('dddd Do MMMM');

currentDayContainer.text(currentDay);


//array for the work day hours formatted for the moment function
var workDayHours = ['9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM'];
// array containing IDs for the text areas
var currentDayHours = ['#9AM', '#10AM', '#11AM', '#12PM', '#1PM', '#2PM', '#3PM', '#4PM', '#5PM'];


// the below function is used to format the textareas with different colours depending omn the time of day
//for loop loops through all timeboxes/times
for (var i = 0; i < workDayHours.length; i++){
    var timeNow = moment(); //crates a new moment
    var timeThen = moment(workDayHours[i],'h a'); //creates a moment using the time obtained from the workDayHours element
    var timeDiff = timeNow.diff(timeThen, 'hour'); //calculates the time difference in hours between current time and time given by array in hours

// block below is used to assign different formatting depending on time of day.
    if(timeDiff > 0){
        $(currentDayHours[i]).addClass('past');
    } else if(timeDiff < 0){
        $(currentDayHours[i]).addClass('future');
    } else if(timeDiff == 0 ){
        $(currentDayHours[i]).addClass('present');
    }
}

//the below for loop grabs the saved timeblock entries saved in local storage and adds the text to the respective textareas
for (var i = 0; i < textAreaBoxes.length; i++){
    var savedTasks = $(textAreaBoxes[i]);
    savedTasks.val(localStorage.getItem(savedTasks.attr('id')));
}

//the below block uses event delegation to listen to which button was pressed within the timeblock container and uses
// Jquerys element traversal locate the respective textarea and saves the time ID and the respective textarea content to local storage

$('.time-block').on('click','i', function(event){
    event.preventDefault();
    var hourBlock = $(event.target).parents().siblings('textarea').attr('id');
    var textBoxValue = $(event.target).parents().siblings('textarea').val();
    localStorage.setItem (hourBlock, textBoxValue);
    alert('Entry Saved!'); // throws an alert to the screen when content saved, to give feedback to user
})

