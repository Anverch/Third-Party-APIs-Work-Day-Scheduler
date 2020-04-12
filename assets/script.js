// Display current day
$("#currentDay").text(moment().format('dddd, MMMM Do'));

// Table inside the container 
var table = $("<div>");
$(".container").append(table);

//Array to store added text in a row
var dataStorage = [];

// for loop for the 8 rows for 8 hours of work day 
for (var i=0; i < 9; i++) {
    var tableRow = $("<div>");
    var rowTime = moment().hours(i+9);

    table.append(tableRow);
    tableRow.addClass("row time-block").attr('id', i);

    var workHour = $("<div>").addClass("col-md-1");
    var workEvent = $("<textarea>").addClass("col-md-10"); 
    var saveBtn = $("<button>").addClass("col-md-1"); 
    
    tableRow.append(workHour, workEvent, saveBtn);    
    workHour.addClass("hour").text(rowTime.format('h A'));
    workEvent.addClass("description " + getRowClass(rowTime.hour()));
    saveBtn.addClass("saveBtn fas fa-save");

    saveBtn.click(function(){
        dataStorage[i] = workEvent.val();
        console.log(dataStorage)
    });

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

