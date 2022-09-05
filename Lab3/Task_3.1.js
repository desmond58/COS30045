function init(){
	var w = 500;
	var h = 100;
	//var barPadding = 2;
	var dataset =  [[5, 20], 
					[480, 90], 
					[250, 50], 
					[100, 33], 
					[330, 95], 
					[410, 12], 
					[475, 44], 
					[25, 67], 
					[85, 21], 
					[220, 88] 
					];
	
    var scale = d3.scaleLinear()
                    .domain([100,500])
                    .range([10,350]);

	var svg = d3.select("#chart")
				.append("svg")
				.attr("width", w)
				.attr("height", h);
	
	svg.selectAll("circle")
		.data(dataset)
		.enter()
		.append("circle")
		.attr("cx", function(d,i){
			return d[0];
		})
		.attr("cy", function (d){ 
			return d[1];
		})
		.attr("r", 5)
		.attr("fill", function(d){
			if(d[0] == 480){
				return "red";
			}else{
				return "slategrey";
			}
		});

	svg.selectAll("text")
		.data(dataset)
		.enter()
		.append("text")
		.text(function(d){
			return d[0] + "," + d[1];
		})
		.attr("x", function (d) {
			return d[0];
		})
		.attr("y", function (d) {
			return d[1];
		});
}

window.onload = init;