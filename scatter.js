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
var h1 = body.append("h1").text("Welcome to the __________ Scatter!");
body.append("h2").text("by Team Gnocchi (Samantha & Alessandro)");
var h2 = body.append("h2").text("Below is the scatterplot analyzing the relationship between VARIABLE A & VARIABLE B");

var svg = body.append("svg").attr("height", 500).attr("width", 500).style("border", "2px solid");

/* NOTES on HOW TO DRAW A CIRCLE:
container.append("circle").attr("cx", 25).attr("cy", 25).attr("r", 25).style("fill", "orange");
* DOESN'T SEEM TO ADD THE CIRCLE TO THE ARRAY
* Returns a format similar to that returned by container
*/

// Draws a circle given the coordinates, radius, and fill color
var addPoint = function(x, y){
    console.log("Adding point...");
    svg.append("circle").attr("cx", x).attr("cy", y).attr("r", 10).style("fill", "orange");
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
    drawRect(0,0,500,500,"white");
    console.log("Board cleared.");
    first = true;
}
// --------------------------------------------------------------------------

// Testing
addPoint(100,100);

