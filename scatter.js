/*
Alessandro Cartegni, Samantha Ngo
Team lesBounce
SoftDev2 pd07
K13 -- 
2018-03-21
*/

var head = d3.select("head");
console.log("HEAD: ", head);
var body = d3.select("body").style("text-align", "center");
console.log("BODY: ", body);

var title = head.append("title").text("Scatter!");
var h1 = body.append("h1").text("Welcome to the Snowy Scatter!");
body.append("h2").text("by Team Gnocchi (Samantha & Alessandro)");
var h2 = body.append("h2").text("Below is the scatterplot analyzing the relationship between Average Annual Temperature in Central Park & Annual Snow in Central Park");

var labelY = body.append("labelY").text("Avg Temp");

var svg = body.append("svg").attr("height", 400).attr("width", 800).style("border", "2px solid");

var br = body.append("br");

var labelX = body.append("labelX").text("Total Snow");

/* NOTES on HOW TO DRAW A CIRCLE:
container.append("circle").attr("cx", 25).attr("cy", 25).attr("r", 25).style("fill", "orange");
* DOESN'T SEEM TO ADD THE CIRCLE TO THE ARRAY
* Returns a format similar to that returned by container
*/

// Draws a circle given the coordinates, radius, and fill color
var addPoint = function(x, y){
    console.log("Adding point...");
    svg.append("circle").attr("cx", x).attr("cy", y).attr("r", 5).style("fill", "black");
    console.log("...point added.");
    return true;
}

// IF NEEDED ----------------------------------------------------------------
// Draws a rectangle given the coordinates, dimensions, and fill color
var drawRect = function(x, y, h, w, f){
    console.log("Drawing rectangle...");
    container.append("rect").attr("x", x).attr("y", y).attr("height", h).attr("width", w).style("fill", f);
    console.log("...rectangle drawn.");
    return true;
}

// Draws a white rectangle over the svg area
var clear = function(e){
    console.log("Clearing...");
    drawRect(0,0,800,600,"white");
    console.log("Board cleared.");
    first = true;
}
// --------------------------------------------------------------------------

// Testing
//addPoint(100,100);

var plotData = function(){
    var xcor;
    var ycor;
    var snow = [27.8,33.1,14.1,60.3,36.9,57.8,18.3,40.4,8.1,35.7,22.7,35.5,31.4,44,43.1,34.2,20.8,32.9,45.6,16.5,24.3,28.8,25.4,49.7,36.1,27,46.3,43.6,21.1,55.9,13.4,9.1,30,28.7,32.3,48.1,20,53.2,33.4,20.3,27.2,25.2,29.5,15.3,40.5,28.8,50.7,50.7,34.5,3.8,47.6,18.6,27.8,60.4,27.5,29.6,32.4,22.3,14.5,13.8,13.6,11.6,5.3,27,52,33.8,33.2,15.6,15.1,37.3,25.7,39,11.3,29.5,23.8,27.1,31.4,30.6,63.2,46.6,13.8,11.6,19.7,15.1,15.8,11.5,33.5,21.9,44.7,13,39.2,54.7,18.1,16.3,44.7,24.4,21.4,51.5,19.5,30.2,25.6,15.5,22.9,2.8,23.5,13.1,17.3,24.5,50.7,29.4,12.8,19.4,24.6,27.2,25.4,24.1,13,23.1,19.1,8.1,13.4,24.9,12.6,24.5,53.4,11.8,75.6,1,5.5,12.7,16.3,35,3.5,49.3,42.6,41,40,12.4,11.9,27.6,51.4,61.9,7.4,26.1,57.4,50.3,32.8,30.2,22.9];
    var temps = [51.4,53.6,51.1,51,51,51.3,49.4,51.9,52.8,53.6,52.3,53.2,52.4,52,50.5,52.4,51.1,51,50.9,49.3,52.7,52.7,53.8,51.9,50.4,52.8,52.7,53.5,53.4,54.6,53.6,53.8,52.1,52.9,52.7,50.7,53.3,54.7,52.5,55,53.4,53.2,53.4,52.7,55,52,53.5,52.2,50.7,53.2,53.8,52.3,54.9,53.5,52.9,51.9,53.4,51.2,53.4,53.6,54.1,54.5,55.8,55.2,54.2,53,53.1,53.4,54.5,55.2,54.7,51.9,54.9,54.1,53.7,54.6,54.1,55.3,53.8,54.1,56.9,53.6,55,55.8,57,54.9,54.7,53.5,55.4,52.5,55.4,54,55.1,53.4,53.6,54.6,54.2,55.1,53,54.1,54.8,54.3,55.2,53.9,56.1,54.7,54.9,53.4,54.3,53,55.7,55,55.2,54.9,56,55.5,55.5,55.3,55.1,54.8,54,57.2,57.2,53.9,55.5,55.2,55.3,53.7,54.3,57.2,56.5,53.9,56.3,56.4,53.4,54.5,55.8,56.8,55,55.3,54,56.7,56.4,57.3,55.3,54.4,56.7,57.2,56.3];
    var i;
    for (i = 0; i < snow.length; ++i){
	xcor = 800 - (snow[i]*10);
	ycor = 1200 - (temps[i]*20);
	addPoint(xcor, ycor);
    }
}

plotData();
