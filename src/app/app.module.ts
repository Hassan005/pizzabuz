import { BrowserModule } from '@angular/platform-browser';
//import {HttpModule} from '@angular/http'
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { AppRoutingModule} from './app-routing.module';
//import {DataService} from './services/data.service'
import { AppComponent } from './app.component';
//import { ServerComponent } from './server/server.component';
import {MatInputModule,MatCardModule,MatButtonModule, MatToolbarModule, MatExpansionModule} from '@angular/material'
import { from } from 'rxjs';
//import { AddPizzaComponent } from './posts/add-pizza/add-pizza.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import {PostComponent} from './services/post/post.component'
//import { HeaaderComponent } from './header/header.component';
import { PizzaListComponent } from './pizzas/pizza-list/pizza-list.component';
import { DataService } from './dataservice';
import { PizzasComponent } from './pizzas/pizzas.component';
//import { PizzaDetailsComponent } from './pizzas/pizza-details/pizza-details.component';
//import { PizzaItemComponent } from './pizzas/pizza-list/pizza-item.component';
import { OrderComponent } from './view-order/order/order.component';
import { OrderDetailsComponent } from './view-order/view-order.component';
//import { Route } from '@angular/router';
import{Routes, RouterModule} from '@angular/router'
import{UsersComponent} from './Users/user.component'
import { HomeComponent } from 'home/home.component';
import { LoginComponent } from './Users/userlogin.component';
//import { HomeComponent } from './home/home.component';
import{Contactus} from './Contactus/contactus.component'
import { PostPizza } from './post/postpizza.component';
import {ShowPizza} from './showpizza/showpizza.component'
const routes:Routes=[

  {
    path:'',component:HomeComponent
},
 
{
     path:'user',component:UsersComponent
},
{
  path:'post',component:PostPizza
},
{
  path:'login',component:LoginComponent
},
{

  path:'showpizza',component:ShowPizza
},

{

  path:'viewpizza',component:PizzaListComponent
},

{
  path:'orderpizza',component:OrderComponent
},
{
  path:'vieworder',component:OrderDetailsComponent
},
{
  path:'contactus',component:Contactus
},


]
@NgModule({
  declarations: [
    AppComponent,
    //ServerComponent,
    //HeaaderComponent,
    //AddPizzaComponent,
    PizzaListComponent,
    PizzasComponent,
    //PizzaDetailsComponent,
    //PizzaItemComponent,
    OrderDetailsComponent,
    OrderComponent,
    UsersComponent,
    HomeComponent,
    LoginComponent,
    Contactus,
     PostPizza,
     ShowPizza
    
  ],
  imports: [
    BrowserModule,
    //HttpModule,
    AppRoutingModule,
    MatInputModule,
    FormsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
    HttpClientModule,
    
    RouterModule.forRoot(routes)
  ],  
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
 