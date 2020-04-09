// Display current day
$("#currentDay").text(moment().format('dddd, MMMM Do'));

// Table inside the container 
var table = $("<table>");
$(".container").append(table);
table.addClass("time-block");

// for loop for the 8 rows for 8 hours of work day 
for (var i=0; i < 9; i++) {
    var tableRow = $("<tr>");
    tableRow.text(moment().hours(i+9).format('h A'));
    table.append(tableRow);
    tableRow.addClass("row");  
}


