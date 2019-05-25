import { Component, OnInit } from '@angular/core';
import{Pizza} from '../pizzas.model'
@Component({
  selector: 'app-pizza-list',
  templateUrl: './pizza-list.component.html',
  styleUrls: ['./pizza-list.component.css']
})
export class PizzaListComponent implements OnInit {
pizzas:Pizza[]=[new Pizza('CHOCLATE LAVA CAKE',"A melt in your mouth dessert, not to be missed! A warm and oozing running chocolate goodness. So break into the chocolate cake to find a lusciously melted soft chocolate center inside.","https://www.pizzahut.com.pk/img/products/images/double_hershy.png",'Rs:450 '

)];
  constructor() { }

  ngOnInit() {
  }

}
