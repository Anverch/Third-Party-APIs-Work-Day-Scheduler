// Display current day
$("#currentDay").text(moment().format('dddd, MMMM Do'));

// Div inside the container 
var table = $("<div>");
$(".container").append(table);

// Array to store user input
var storageKey = "savedText";
var dataStorage = JSON.parse(localStorage.getItem(storageKey)) || [];
var numberWorkHours = 8;

// For loop for the 8 rows for 8 hours of work day 
for (var i = 0; i <= numberWorkHours; i++) {
    var tableRow = $("<div>");
    var rowTime = moment().hours(i + 9);

    table.append(tableRow);
    tableRow.addClass("row time-block").attr('row-id', i);

    var workHour = $("<div>")
        .addClass("col-md-1 hour")
        .text(rowTime.format('h A'));

    var timeBlockText = $("<textarea>")
        .addClass("col-md-10 description " + getRowClass(rowTime.hour()))
        .attr('id', "event-" + i)
        .text(dataStorage[i]);

    var saveBtn = $("<button>")
        .addClass("col-md-1 saveBtn fas fa-save")
        .attr('id', i);

    tableRow.append(workHour, timeBlockText, saveBtn);

    saveBtn.click(function (event) {
        var buttonIndex = event.target.id;
        dataStorage[buttonIndex] = timeBlockText.text();
        localStorage.setItem(storageKey, JSON.stringify(dataStorage));
    });

    // Event listener for user input, assigns value to work event 
    timeBlockText.keyup(function (event) {
        timeBlockText.text(event.target.value);
    });
}

/**
 * Function that returns time block class name based on relative time
 * @param {Object} time The time of the time block 
 */
function getRowClass(time) {
    var currentTime = moment().hour();
    if (time < currentTime) {
        return "past";
    } else if (time === currentTime) {
        return "present";
    } else {
        return "future";
    }
}