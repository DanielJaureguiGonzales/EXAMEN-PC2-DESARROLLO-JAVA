import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Item } from '../models/item';
import { Outcomes } from '../models/outcomes';

@Injectable({
  providedIn: 'root'
})
export class GastosService {


  constructor(private http:HttpClient) { }

  URL='https://app-saver-api.herokuapp.com/outcomes'

  getOrder(){
    return this.http.get<Outcomes[]>(this.URL);
  }

  saveOrder(order:Item){
    return this.http.post(this.URL,order);
  }

}
