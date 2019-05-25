import { Component, OnInit } from '@angular/core';
import { DataService } from '../dataservice';

@Component({
  selector: 'app-pizza',
  templateUrl: './postpizza.component.html',
  //styleUrls: ['./postpizza.component.css']
})
export class PostPizza implements OnInit {

  constructor(private _data:DataService) { }
pname:string;
ptype:string;
pprice:String;
ddes:string;
  ngOnInit() {
  }
saveval()
{
  var ret;
  let pizza={
    
    type:this.ptype,
    name:this.pname,
    price:this.pprice,
    description:this.ddes
  };
this._data.doPOST(pizza).subscribe(
  data => { ret = data},
  err => console.error(err),
  () => console.log('Success')

  );
  alert("pizza added successfully");
  this.pname='';
  this.pprice='';
  this.ptype='';
  this.ddes='';
}
}
