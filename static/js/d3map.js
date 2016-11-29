
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
	


	//Bind data and create one path per GeoJSON feature
	map_svg.selectAll("path")
	   .data(json.features)
	   .enter()
	   .append("path")
	   .attr("d", path)
	   .on("mousemove", function() {
	   		   		// move info box

	   		 var point = d3.mouse(this)
  				, p = {x: point[0], y: point[1] };

  				info.attr("x", p.x).attr("y", p.y);
				infoText.attr("x",p.x).attr("y",p.y);
				infoLanguageText.attr("x",p.x).attr("y",p.y);
				infoLivedInText.attr("x",p.x).attr("y",p.y);
	   })
	   .on("mouseout", function() {
	   		info.attr("display", "none");
	   		infoText.attr("display", "none");
	   		infoLanguageText.attr("display", "none");
	   		infoLivedInText.attr("display", "none");
	   })
	   .on("mouseover", function(d, i){


	   		// move info box
	   		 var p = {x: d3.mouse(this)[0], y: d3.mouse(this)[1] };

  				info.attr("x",p.x).attr("y",p.y).attr("transform", "translate(0,30)");

				infoText.attr("x",p.x).attr("y",p.y).attr("transform", "translate(14,54)");
				infoLanguageText.attr("x",p.x).attr("y",p.y).attr("transform", "translate(14,74)");
				infoLivedInText.attr("x",p.x).attr("y",p.y).attr("transform", "translate(14,94)");


	   		if(i == 14) {
	   			console.log("uk", i);

				info.attr("display", "block");
				infoText.attr("display", "block");
				infoLanguageText.attr("display", "block");
				infoLivedInText.attr("display", "block");

				infoText.text("UNITED KINGDOM");
				infoLanguageText.text("language proficiency: fluent");
				infoLivedInText.text("lived: 20 years")
	   		}
	   		else if(i == 30) {
	   			console.log("poland", i);

				info.attr("display", "block");
				infoText.attr("display", "block");
				infoLanguageText.attr("display", "block");
				infoLivedInText.attr("display", "block");

				infoText.text("POLAND");
				infoLanguageText.text("language proficiency: fluent");
				infoLivedInText.text("lived: 2 years")
	   		}
	   		else if(i == 36) {
	   			console.log("sweden", i);

				info.attr("display", "block");
				infoText.attr("display", "block");
				infoLanguageText.attr("display", "block");
				infoLivedInText.attr("display", "block");

				infoText.text("SWEDEN");
				infoLanguageText.text("language proficiency: very good");
				infoLivedInText.text("lived: 3 years")
	   		}
	   		else {
	   			console.log("other country", i);
	   		}
	   })
	   .attr("stroke", "#222")
	   .attr("class", function(d, i){ return "country-" + i; })
	   .attr("fill", function(d, i) {
	   	if(i == 14 || i == 30 || i == 36) return "#f05442";
	   	if(i == 29 || i == 9 || i == 18 || i == 8 || i == 28 || i == 2 || i == 13
	   		|| i == 10 || i == 20 || i == 1 || i == 34 
	   		|| i == 17 || i == 6 || i == 7 || i == 81) {
	   		return "#169c78";
	    }
	   	return "#41b6ab"; 
	   });

	   	console.log("map loaded", json);

	var info = map_svg.append("rect")
					.attr("width", 300)
					.attr("height", 200)
					.attr("display", "none")
					.attr("fill", "rgba(44,44,44,0.8)");

		var infoText = map_svg.append("text")
					.attr("display", "none")
					.attr("class", "infobox-text")
					.text("something");

		var infoLanguageText = map_svg.append("text")
					.attr("display", "none")
					.attr("class", "infobox-lang-text")
					.text("something");

		var infoLivedInText = map_svg.append("text")
					.attr("display", "none")
					.attr("class", "infobox-lang-text")
					.text("something");
});