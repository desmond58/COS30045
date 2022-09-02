function init(){
    var w = 500;
    var h = 100;
    var barPadding = 2;

    d3.csv("Task_2.4_data.csv").then(function(data){
        console.log(data);
        dataset = data;

        barChart(dataset)
    })

    var svg = d3.select("#chart")
                .append("svg")
                .attr("width", w)
                .attr("height", h);

    function barChart(){
        svg.selectAll("rect")
        .data(dataset)
        .enter()
        .append("rect")
        .style("fill", d =>{
            console.log("d = " + d.datasets);
            if(d.datasets <= 40){
                return "#ADD8E6"
            }else if(d.datasets >= 80){
                return "#00008B";
            }else{
                return "#0000FF"
            }
        })
        .attr("x", function(d,i){
            return i*(w/dataset.length)
        })
        .attr("y", function (d){ 
            return h-(d.datasets)
        })
        .attr("width", function (d){ 
            return w/dataset.length - barPadding
        })
        .attr("height", function (d){ 
            return d.datasets
        });
    }

}
window.onload = init;