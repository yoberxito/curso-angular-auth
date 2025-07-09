import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl=environment.API_URL;

  constructor(
    private http:HttpClient
  ) { }

  login(email:string,password:string){
    return this.http.post(`${this.apiUrl}/api/v1/auth/login`,{
      email,password
    })
  }
  register(email:string,password:string,name:string){
    return this.http.post(`${this.apiUrl}/api/v1/auth/register`,{
      email,password,name
    })
  }
  isAviable(email:string){
    return this.http.post<{isAvailable : boolean}>(`${this.apiUrl}/api/v1/auth/is-available`,{
      email,
    })

  }
}
