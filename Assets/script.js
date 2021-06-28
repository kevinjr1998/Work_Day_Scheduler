var currentDayContainer = $('#currentDay');
var timeBlock = $('.time-block');

var currentDay = moment().format('MMMM Do YYYY');
// var currentDay = moment('5 PM','h a'); //time today at 5 pm
currentDayContainer.text(currentDay);

var workDayHours = ['9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM'];
var currentDayHours = ['#9AM', '#10AM', '#11AM', '#12PM', '#1PM', '#2PM', '#3PM', '#4PM', '#5PM'];

for (var i = 0; i < workDayHours.length; i++){
    var timeNow = moment();
    var timeThen = moment(workDayHours[i],'h a');
    var timeDiff = timeNow.diff(timeThen, 'hour');

    if(timeDiff > 0){
        $(currentDayHours[i]).addClass('past');
    } else if(timeDiff < 0){
        $(currentDayHours[i]).addClass('future');
    } else if(timeDiff == 0 ){
        $(currentDayHours[i]).addClass('present');
    }
}


for (var j = 0; j < workDayHours.length; j++){
    var savedTasks = $(currentDayHours[j]);
    savedTasks.val(localStorage.getItem(currentDayHours[j]));
}


var workDayHoursNoSpace = ['9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM'];

var currentDayHoursButtons = ['#9AMSubmit',
                             '#10AMSubmit',
                             '#11AMSubmit', 
                             '#12PMSubmit', 
                             '#1PMSubmit', 
                             '#2PMSubmit', 
                             '#3PMSubmit', 
                             '#4PMSubmit', 
                             '#5PMSubmit'];

var currentDayHours = ['#9AM', '#10AM', '#11AM', '#12PM', '#1PM', '#2PM', '#3PM', '#4PM', '#5PM'];


// for (var k = 0; k < workDayHoursNoSpace.length; k++){
//     var buttonID = $(currentDayHoursButtons[k]);
//     buttonID.on('click', function(event){
//         event.preventDefault();
//         event.stopPropagation();
//         var textBoxValue = $(currentDayHours[k]).val();
//         var hourBlock = workDayHoursNoSpace[k];
//         localStorage.setItem(hourBlock, textBoxValue);
//     })
// }


$('.time-block').on('click','button', function(event){
    event.preventDefault();
    event.stopPropagation();

    var hourBlock = $(event.target).parents().siblings('textarea').attr('id');
    var textBoxValue = $(event.target).parents().siblings('textarea').val();
    localStorage.setItem (hourBlock, textBoxValue);
})

