import {Component,Input} from '@angular/core';
@Component({
selector:'pizza-list',
templateUrl:'./pizza-list.component.html',
styleUrls:['./pizza-list.component.css']
})

export class PizzaListComponent{
    // pizza=[
    //     {Name:'Fagita',content:'This is very spicy',type:"Bacon Spinach "},
    //     {Name:' All Cheese',content:'This is medium spicy',type:"Chicken-Bacon"},
    //     {Name:'Grils',content:'This is  spicy',type:"Italian"}
    // ];
 @Input() pizza=[]; 
}