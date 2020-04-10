// Display current day
$("#currentDay").text(moment().format('dddd, MMMM Do'));

// Table inside the container 
var table = $("<div>");
$(".container").append(table);

// for loop for the 8 rows for 8 hours of work day 
for (var i=0; i < 9; i++) {
    var tableRow = $("<div>");
    var rowTime = moment().hours(i+9);

    table.append(tableRow);
    tableRow.addClass("row time-block");

    var column1 = $("<div>");
    column1.addClass("col-md-1");

    var column2 = $("<textarea>"); 
    column2.addClass("col-md-10");

    var column3 = $("<div>"); 
    column3.addClass("col-md-1");
    
    tableRow.append(column1, column2, column3);
    column1.addClass("hour").text(rowTime.format('h A'));
    column2.addClass("description " + getRowClass(rowTime.hour()));
    column3.addClass(" saveBtn");

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

