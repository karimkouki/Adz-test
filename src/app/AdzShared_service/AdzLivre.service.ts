import { Injectable } from '@angular/core';
import{Http, Response, Headers, RequestOptions} from '@angular/http';
import { AdzLivre } from '../adz-livre';
import{Observable}   from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
//import {AdzLivre} from '../adz-livre';


@Injectable({
  providedIn: 'root'
})
export class AdzlivreService {
  private baseUrl:string='https://www.googleapis.com/books/v1/volumes?q=';
  private headers = new Headers({'Content-Type':'application/json'});
  private options = new RequestOptions({headers:this.headers});
  private user = new AdzLivre();


  constructor(private _http:Http) { }
  getUsers(){
    
    return this._http.get(this.baseUrl+this.user,this.options).map((response:Response)=>response.json())
      .catch(this.errorHandler);
  }


  errorHandler(error:Response){

    return Observable.throw(error||"SERVER ERROR");
 }
 setter(user:AdzLivre){
  this.user=user;
  console.log(this.user);
}

getter(){
 return this.user;


}

}
