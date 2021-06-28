var timeBlock = $('#currentDay');

var currentDay = moment().format('MMMM Do YYYY');
// var currentDay = moment('5 PM','h a'); //time today at 5 pm
timeBlock.text(currentDay);

var workDayHours = ['9 AM', '10 AM', '11 AM', '12 AM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM'];
var timeBlockHours = ['#9AM', '#10AM', '#11AM', '#12AM', '#1PM', '#2PM', '#3PM', '#4PM', '#5PM'];

for (var i = 0; i < workDayHours.length; i++){
    var timeNow = moment();
    var timeThen = moment(workDayHours[i],'h a');

    var timeDiff = timeNow.diff(timeThen, 'hour');

    if(timeDiff > 0){
        $(timeBlockHours[i]).addClass('past');
    } else if( timeDiff < 0){
        $(timeBlockHours[i]).addClass('future');
    } else if(timeDiff == 0 ){
        $(timeBlockHours[i]).addClass('present')
    }
}
