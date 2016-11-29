
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
d3.json("./map.json", function(json) {
	
	console.log("map loaded", json);

	//Bind data and create one path per GeoJSON feature
	map_svg.selectAll("path")
	   .data(json.features)
	   .enter()
	   .append("path")
	   .attr("d", path)
	   .on("mouseover", function(d, i){  
	   		if(i == 14) {
	   			console.log("uk", i);
	   		}
	   		else if(i == 30) {
	   			console.log("poland", i);
	   		}
	   		else if(i == 36) {
	   			console.log("sweden", i);
	   		}
	   		else {
	   			console.log("other country", i);
	   		}
	   })
	   .attr("stroke", "#222")
	   .attr("class", function(d, i){ return "country-" + i; })
	   .attr("fill", "#41b6ab");
});