import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'  })
};
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

  doGET(){
    let url="/user/viewpizza";
    return this.http.get(url);
  }
  doPOST(pizza){
    let body=JSON.stringify(pizza);
    let url="/pizza/addpizza";
    return this.http.post(url,body,httpOptions);

  }

}
