import { Component,ViewEncapsulation, OnInit } from '@angular/core';
// import * as d3 from 'd3';
import * as d3 from 'd3-selection';
import * as d3Scale from 'd3-scale';
import * as d3Array from 'd3-array';
import * as d3Axis from 'd3-axis';
import { data } from "../bean/brandData";

@Component({
  selector: 'app-bar-graph',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './bar-graph.component.html',
  styleUrls: ['./bar-graph.component.css']
})
export class BarGraphComponent implements OnInit {
  private width: number;
  private height: number;
  private margin = {top: 20, right: 20, bottom: 30, left: 50};

  private x: any;
  private y: any;
  private svg: any;
  private g: any;

  constructor() { }

  ngOnInit() {
    this.initSvg();
    this.initAxis();
    this.drawAxis();
    this.drawBars();
  }

  private initSvg() {
    this.svg = d3.select('svg');
    this.width = +this.svg.attr('width') - this.margin.left - this.margin.right;
    this.height = +this.svg.attr('height') - this.margin.top - this.margin.bottom;
    this.g = this.svg.append('g')
        .attr('transform', 'translate(' + this.margin.left + ',' + this.margin.top + ')');
}

private initAxis() {
    this.x = d3Scale.scaleLinear().rangeRound([0, this.width]);
    this.y = d3Scale.scaleBand().rangeRound([0, this.height]).padding(0.1);
    this.x.domain([0, d3Array.max(data, (d) => d.val1)]);
    this.y.domain(data.map(b => b.brand));
}

private drawAxis() {
    this.g.append('g')
        .attr('class', 'axis axis--x')
        .attr('transform', 'translate(0,' + this.height + ')')
        .call(d3Axis.axisBottom(this.x));
    this.g.append('g')
        .attr('class', 'axis axis--y')
        .call(d3Axis.axisLeft(this.y).ticks(10, '%'))
        .append('text')
        .attr('class', 'axis-title')
        .attr('transform', 'rotate(-90)')
        .attr('y', 6)
        .attr('dy', '0.71em')
        .attr('text-anchor', 'end')
        .text('Total KO');
}

private drawBars() {
    this.g.selectAll('.bar')
        .data(data)
        .enter().append('rect')
        .attr('class', 'bar')
        .attr('x', 0 )
        .attr('y', (data) => this.y(data.brand) )
        .attr('width', (data) => data.val1)
        .attr('height', this.y.bandwidth() -30 );
        

    this.g.selectAll(".bar2")
        .data(data)
        .enter().append("rect")
          .attr("class", "bar2")
          .attr("x", 0)
          .attr("y", (data) => this.y(data.brand))
          .attr("width", (data) =>  data.val2)
          .attr("height",  this.y.bandwidth())
          .attr("fill", (data) => {data.val1 >= data.val2 ? 'red' : 'green'});

    this.g.selectAll("markedLine")
        .data(data)
        .enter().append("line")
          .attr("class", "markedLine")
          .attr("x", 0)
          .attr("y", (data) => data.brand)
          .attr("width", (data)=> data.mark_val)
          .attr("height", this.y.bandwidth());
}

}
