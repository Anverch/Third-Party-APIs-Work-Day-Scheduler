// Display current day
$("#currentDay").text(moment().format('dddd, MMMM Do'));

// Table inside the container 
var table = $("<table>");
$(".container").append(table);

// for loop for the 8 rows for 8 hours of work day 
for (var i=0; i < 8; i++) {
    var tableRow = $("<tr>");
    tableRow.text("Tr" + i);
    table.append(tableRow);
      
}


