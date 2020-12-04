import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders } from '@angular/common/http';


     var headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json; charset=utf-8');
   // headers.append("Access-Control-Allow-Methods", "DELETE, POST, GET, OPTIONS")
   // headers.append("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With")
@Injectable({
  providedIn: 'root'
})
export class HttpService {
  
url="http://localhost:8585/Dashboard/"
  constructor(
    private http: HttpClient
  ) {
    
   }

  userRegistration(data){
    console.log('data in service page :>> ', data);
    return this.http.post(this.url+'registration',{data},{headers:headers})
  }
}
