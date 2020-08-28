import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  

  constructor(private http: HttpClient ) { }
  address = "http://localhost:8080/" ;

   headers = new HttpHeaders({
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*"
  });


  private _verify = this.address+'/card-scheme/verify/' ;


  verify(cardNumber: String) {
   return this.http.get<any>(
      this._verify+cardNumber,
      {
        headers: this.headers
      });
  }


  
  


  
}
