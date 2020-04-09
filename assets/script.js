// Display current day
$("#currentDay").text(moment().format('dddd, MMMM Do'));

// Table inside the container 
var table = $("<table>");
$(".container").append(table);
table.addClass("time-block");

// for loop for the 8 rows for 8 hours of work day 
for (var i=0; i < 9; i++) {
    var tableRow = $("<tr>");
    var rowTime = moment().hours(i+9);
    tableRow.text(rowTime.format('h A'));
    table.append(tableRow);
    tableRow.addClass("row " + getRowClass(rowTime.hour()));  
}

// function that compares current time to our table time 
function getRowClass (time){
    var currentTime = moment().hour();
    if (time < currentTime){
        return  "past";
        //past
    } else if (time===currentTime) {
        return "present";
        //current
    } else {
        return "future";
        //future
    }
}

