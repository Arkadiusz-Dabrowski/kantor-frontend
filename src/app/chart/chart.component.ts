import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as Chart from 'chart.js';
import {ChartService} from "./chart.service";
import { map } from 'rxjs/operators'
import {Values} from "./values";

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  chart = [];

  data =[]
  label = []


  constructor(
    private http: HttpClient,
    private chartService: ChartService
  ) { }

  ngOnInit() {
    this.chartService.takeValues().subscribe((res: Values[]) => {
      res.forEach(y => {
        this.label.push(y.year);
        this.data.push(y.averageForYear);

      this.chart = new Chart('canvas', {
        type: 'bar',
        data: {
          labels: this.label,
          datasets: [
            {
              data: this.data,
              borderColor: 'red',
              fill: true,
              backgroundColor: 'blue'
            }
          ]
        },
        options: {
          legend: {
            display: false
          },
          scales: {
            xAxes: [{
              display: true
            }],
            yAxes: [{
              display: true
            }]
          }
        }
      })

    })
  });
}
}


