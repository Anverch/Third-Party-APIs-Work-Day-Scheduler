// Display current day
$("#currentDay").text(moment().format('dddd, MMMM Do'));

// Table inside the container 
var table = $("<div>");
$(".container").append(table);

//Array to store added text in a row
var dataStorage = JSON.parse(localStorage.getItem("savedText")) || [];

// for loop for the 8 rows for 8 hours of work day 
for (var i=0; i < 9; i++) {
    var tableRow = $("<div>");
    var rowTime = moment().hours(i+9);

    table.append(tableRow);
    tableRow.addClass("row time-block").attr('row-id', i);

    var workHour = $("<div>")
        .addClass("col-md-1 hour")
        .text(rowTime.format('h A'));

    var workEvent = $("<textarea>")
        .addClass("col-md-10 description " + getRowClass(rowTime.hour()))
        .attr('id', "event-"+i)
        .text(dataStorage[i]); 

    var saveBtn = $("<button>")
        .addClass("col-md-1 saveBtn fas fa-save")
        .attr('id', "button-"+i); 
    
    tableRow.append(workHour, workEvent, saveBtn);    

    saveBtn.click(function(e){
        dataStorage[e.target.id.replace("button-", "")] = workEvent.text();
        console.log(dataStorage);
        localStorage.setItem("savedText", JSON.stringify(dataStorage));
    });
    workEvent.keyup(function(e){
        workEvent.text(e.target.value);
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
