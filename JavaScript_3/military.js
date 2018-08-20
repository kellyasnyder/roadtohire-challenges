// Given a time in 12-hour AM/PM format, convert it to military (24-hour) time.
// Note: Midnight is 12:00:00AM on a 12-hour clock, and 00:00:00 on a 24-hour clock. 
// Noon is 12:00:00PM on a 12-hour clock, and 12:00:00 on a 24-hour clock.

// INPUT FORMAT
// A single string containing a time in 12-hour clock format (i.e.: hh:mm:ssAM or hh:mm:ssPM).
// OUTPUT FORMAT
// Convert and print the given time in 24-hour format.
 
// Do error messages for incorrect inputs

function timeConvertor(time) {
    var PM = time.match('PM');
	var AM = time.match('AM');
    
    time = time.split(':');
    var min = time[1];
    
    if (PM) {
        var hour = 12 + parseInt(time[0],10);
        var sec = time[2].replace('PM', '');
				console.log(hour + ':' + min + ':' + sec);
    } else if (AM) {
        var hour = time[0];
        var sec = time[2].replace('AM', '');
				console.log(hour + ':' + min + ':' + sec);
    } else {
        console.log("Please input correct format – HR:MIN:SEC(AM/PM)");
    }
}

timeConvertor('07:05:45AM');
timeConvertor('07:05:45PM');
timeConvertor('07:05:45');