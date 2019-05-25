import { Component, OnInit } from '@angular/core';
import {DataService} from '../dataservice';
@Component({
  selector: 'app-showpizza',
  templateUrl: './showpizza.component.html',
  //styleUrls: ['./showemp.component.css']
})
export class ShowPizza implements OnInit {
  public pizza;

  constructor(private _data:DataService) { }

  ngOnInit() {
    this.getpizza();
  }

  getpizza(){
  this._data.doGET().subscribe(
          data => { this.pizza = data},
          err => console.error(err),
          () => console.log('success')
      );
    
}
}
