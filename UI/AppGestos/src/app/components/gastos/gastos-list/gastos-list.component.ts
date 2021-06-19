import { Component, OnInit } from '@angular/core';
import { Outcomes } from 'src/app/models/outcomes';
import { GastosService } from 'src/app/services/gastos.service';

@Component({
  selector: 'app-gastos-list',
  templateUrl: './gastos-list.component.html',
  styleUrls: ['./gastos-list.component.css']
})
export class GastosListComponent implements OnInit {

  outcomes?: Outcomes[];
  gastoTotal?: number;


  constructor(private services:GastosService) { }

  ngOnInit(): void {

    this.services.getOrder().subscribe(data => {
      this.outcomes = data;

      console.log(data);
    },
    error => {
      console.log(error);
    })
  }

}
