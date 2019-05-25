// import { Component,OnInit } from '@angular/core';
// import {DataService} from '../data.service'
// import { pizza } from '../data.service';
// import { Subscription } from 'rxjs';


// @Component(
//     {
//     selector:'aap-post-compponent',
//     templateUrl:'post.component.html',
//     //styleUrls:['user.component.css']
//     }
// )


// export class PostComponent implements OnInit{
//     posts:pizza[]=[]
//      postssub:Subscription;
//     constructor( public ds:DataService)
//     {
//     }
//     ngOnInit(){
//         this.ds.getUsers();
//         this.postssub=this.ds.getPostUpdatedListener().subscribe((posts:pizza[])=>
//         {
//             this.posts=posts
//         })
    
//     }

// }