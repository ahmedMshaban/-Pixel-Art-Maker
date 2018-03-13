$(document).ready(function(){

var table = document.getElementById("pixel_canvas");
// Select color input
var color = $("#colorPicker").val();
$("#colorPicker").change(function(){
    color = $("#colorPicker").val();
});


// Select size input
var height = $("#input_height").val();
$("#input_height").change(function(){
    height = $("#input_height").val();
});


var width = $("#input_width").val();
$("#input_width").change(function(){
    width = $("#input_width").val();
});



// When size is submitted by the user, call makeGrid()
$("#sizePicker input[type='submit']").click(function(event){
  event.preventDefault();

  //Delete all table child if have
  if($(table).has( "tr" )) {
    $(table).empty();
  }

  makeGrid(height,width);
});

function makeGrid(gridHeight, gridWidth) {

  //Create Grid
  for(var i=0; i < gridHeight; i++) {
    //Append new row to table
    $(table).append( "<tr></tr>" );
    for(var j=0; j < gridWidth; j++) {
      //Append td to the last tr on the table
      $( "#pixel_canvas tr:last-child").append( "<td></td>" );
      //Event listener to cell click
      table.rows[i].cells[j].onclick = function () {
         artMixer(this);
      };
    }
  }

  function artMixer(tableCell) {
        $(tableCell).css("background-color", color);
    }

}


});
