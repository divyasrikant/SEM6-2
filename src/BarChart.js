import React,{Component} from 'react'
import * as d3 from 'd3'
import { axisBottom } from 'd3'
class BarChart extends Component{
    componentDidMount(){
        const data=[2,4,2,6,8]
        this.drawBarChart(data)
    }
    drawBarChart(data){
        const canvasHeight=200
        const canvasWidth=200
        const Scale=20
        const svgCanvas=d3.select(this.refs.canvas)
            .append("svg")
            .attr('width',canvasWidth)
            .attr('height',canvasHeight)
            .style('border','1px solid black')
        svgCanvas.selectAll('rect')
            .data(data).enter()
            .append("rect")
            .attr("height",4)
            .attr("width",(datapoint)=>datapoint*Scale)
            .attr("fill","orange")
            .attr("y",(datapoint,iteration)=>iteration*25)
            .attr("x",(datapoint)=>canvasHeight-datapoint*Scale)
        svgCanvas.selectAll("text")
        .data(data).enter()
        .append("text")
        .attr("y",(datapoint,i)=>i*25+5)
        .attr("x",(datapoint,i)=>canvasHeight-datapoint*Scale-15)
        .text(datapoint=>datapoint)
                
    }
    render(){
        return(
            <div ref='canvas'>
            </div>
        )
    }
}
export default BarChart