// import { Injectable } from '@angular/core';
// import {HttpClient} from '@angular/common/http'
// import 'rxjs/add/operator/map';
// import { Observable, Subject } from 'rxjs';
// import { post } from 'selenium-webdriver/http';

// Injectable({providedIn:'root'})

// export class DataService
// {
//   private postsupdated=new Subject<pizza[]>();
//   posts:pizza[]=[];
// constructor(public http:HttpClient)
// {
    
// }
// getUsers()
// {
//     return this.http.get<{message:string,posts:pizza[]}>("http://localhost:3000/api/post").subscribe((postData)=>
//     {
//         this.posts=postData.posts
//     })
// }
// getPostUpdatedListener(){
//      return this.postsupdated.asObservable();
// }
// addPost(title:string,contents:string){
//     const post:pizza=
//     {id:null,title:title,contents:contents};
//     this.posts.push(post);
//     this.postsupdated.next([...this.posts])
// }
// }
// export interface pizza{
//     id: string,
//     title: string,
//     contents: string
    
// } 