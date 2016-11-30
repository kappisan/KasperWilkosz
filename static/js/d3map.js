
//Width and height
var w = 800;
var h = 600;

//Define map projection

var projection = d3.geo.mercator()
					   .center([ 13, 52 ])
					   .translate([ w/2, h/2 ])
					   .scale([ w/1.92 ]); 

//Define path generator
var path = d3.geo.path()
				 .projection(projection);

//Create Legend SVG
var mapLegend_svg = d3.select("#map-container")
			.append("svg")
			.attr("class", "svgmap-legend")
			.attr("width", w)
			.attr("height", 50);

mapLegend_svg.append("rect")
				.attr("x", 10)
				.attr("width", 20)
				.attr("height", 20)
				.attr("fill", "#169c78")

mapLegend_svg.append("text")
				.attr("x", 40)
				.attr("class", "map-legend-text")
				.text("Visited")
				.attr("transform", "translate(0,15)")

mapLegend_svg.append("rect")
				.attr("x", 210)
				.attr("width", 20)
				.attr("height", 20)
				.attr("fill", "#f05442")

mapLegend_svg.append("text")
				.attr("x", 250)
				.attr("class", "map-legend-text")
				.text("Lived")
				.attr("transform", "translate(0,15)")


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
				infoLine1Text.attr("x",p.x).attr("y",p.y);
				infoLine2Text.attr("x",p.x).attr("y",p.y);
				infoLine3Text.attr("x",p.x).attr("y",p.y);

				//infoGroup.attr("x",p.x).attr("y",p.y);
	   })
	   .on("mouseout", function() {
	   		infoGroup.attr("display", "none");
	   })
	   .on("mouseover", function(d, i){


	   		// move info box
	   		 var p = {x: d3.mouse(this)[0], y: d3.mouse(this)[1] };

  				info.attr("x",p.x).attr("y",p.y).attr("transform", "translate(0,30)");

				infoText.attr("x",p.x).attr("y",p.y).attr("transform", "translate(14,54)");
				infoLanguageText.attr("x",p.x).attr("y",p.y).attr("transform", "translate(14,74)");
				infoLivedInText.attr("x",p.x).attr("y",p.y).attr("transform", "translate(14,94)");
				infoLine1Text.attr("x",p.x).attr("y",p.y).attr("transform", "translate(14,114)");
				infoLine2Text.attr("x",p.x).attr("y",p.y).attr("transform", "translate(14,134)");
				infoLine3Text.attr("x",p.x).attr("y",p.y).attr("transform", "translate(14,154)");



	   		if(i == 14) {
	   			console.log("uk", i);

				infoGroup.attr("display", "block");

				infoText.text("UNITED KINGDOM");
				infoLanguageText.text("language proficiency: fluent");
				infoLivedInText.text("lived: 20 years")
				infoLine1Text.text("High School and Sixth Form")
				infoLine2Text.text("5 Months at Killik & Co.")
				infoLine3Text.text("")
	   		}
	   		else if(i == 30) {
	   			console.log("poland", i);

				infoGroup.attr("display", "block");

				infoText.text("POLAND");
				infoLanguageText.text("language proficiency: fluent");
				infoLivedInText.text("lived: 2 years - Birthplace")
				infoLine1Text.text("20 Months at Fido Intelligence")
				infoLine2Text.text("8 Months Teaching at British School")
				infoLine3Text.text("")
	   		}
	   		else if(i == 36) {
	   			console.log("sweden", i);

	   			infoGroup.attr("display", "block");

				infoText.text("SWEDEN");
				infoLanguageText.text("language proficiency: very good");
				infoLivedInText.text("lived: 3 years")
				infoLine1Text.text("Bachelor's Degree in Software Engineering")
				infoLine2Text.text("21 Months at Alfa Moving AB")
				infoLine3Text.text("8 Months at Antso AB")
	   		}
	   		else {
	   			console.log("other country", i);
	   		}
	   })
	   .attr("stroke", "#222")
	   .attr("class", function(d, i){ return "country-" + i; })
	   .attr("fill", function(d, i) {
	   	// lived
	   	if(i == 14 || i == 30 || i == 36) return "#f05442";
	   	
	   	// visited
	   	if(i == 29 || i == 9 || i == 18 || i == 8 || i == 28 || i == 2 || i == 13
	   		|| i == 10 || i == 20 || i == 1 || i == 34 
	   		|| i == 17 || i == 6 || i == 7 || i == 81) {
	   		return "#169c78";
	    }

	    // other
	   	return "#41b6ab"; 
	   });

	   	console.log("map loaded", json);

		var infoGroup = map_svg.append("g").attr("display", "none");

		var info = infoGroup.append("rect")
					.attr("width", 400)
					.attr("height", 150)
					.attr("fill", "rgba(44,44,44,0.8)");

		var infoText = infoGroup.append("text")
					.attr("class", "infobox-text")
					.text("something");

		var infoLanguageText = infoGroup.append("text")
					.attr("class", "infobox-lang-text")
					.text("something");

		var infoLivedInText = infoGroup.append("text")
					.attr("class", "infobox-lang-text")
					.text("something");

		var infoLine1Text = infoGroup.append("text")
					.attr("class", "infobox-lang-text")
					.text("something");

		var infoLine2Text = infoGroup.append("text")
					.attr("class", "infobox-lang-text")
					.text("something");

		var infoLine3Text = infoGroup.append("text")
					.attr("class", "infobox-lang-text")
					.text("something");
});