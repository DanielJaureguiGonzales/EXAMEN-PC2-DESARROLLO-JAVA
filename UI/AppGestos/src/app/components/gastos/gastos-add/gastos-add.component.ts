import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/models/item';
import { GastosService } from 'src/app/services/gastos.service';

@Component({
  selector: 'app-gastos-add',
  templateUrl: './gastos-add.component.html',
  styleUrls: ['./gastos-add.component.css']
})
export class GastosAddComponent implements OnInit {

  item = {} as Item;

  constructor(private service:GastosService) { }

  ngOnInit(): void {
  }

  create(){
    this.service.saveOrder(this.item).subscribe();
  }
  delete(){
    this.service.saveOrder(this.item).subscribe();
  }

}
