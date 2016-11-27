
//Width and height
var w = 800;
var h = 600;

//Define map projection

var projection = d3.geo.mercator()
					   .center([ 13, 52 ])
					   .translate([ w/2, h/2 ])
					   .scale([ w/1.9 ]); 

//Define path generator
var path = d3.geo.path()
				 .projection(projection);


//Create SVG
var map_svg = d3.select("#map-container")
			.append("svg")
			.attr("class", "svgmap")
			.attr("width", w)
			.attr("height", h);

console.log("svg", map_svg);

//Load in GeoJSON data
d3.json("map.json", function(json) {
	
	console.log("map loaded", json);

	//Bind data and create one path per GeoJSON feature
	map_svg.selectAll("path")
	   .data(json.features)
	   .enter()
	   .append("path")
	   .attr("d", path)
	   .attr("stroke", "rgba(8, 81, 156, 0.2)")
	   .attr("fill", "rgba(8, 81, 156, 0.6)");
});