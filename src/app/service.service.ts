import { HttpClient } from  '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }


  getData(){
   return this.http.get<any>("https://datausa.io/api/data?drilldowns=Nation&measures=Population")
  }

  Login(credentials){
    this.http.post('woerkfdsjfeifkdsfk', credentials)
  }
}
