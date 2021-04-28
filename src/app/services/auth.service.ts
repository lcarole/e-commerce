import { Injectable } from '@angular/core';

import {​​ HttpClient }​​ from '@angular/common/http';
import { UserRegister } from '../interfaces/user-register';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url:string='http://e-com.eu-4.evennode.com'; // toto@toto.to  toto+toto



  constructor(private http:HttpClient) { }

  login(email: string, password: string) {
    return new Promise((resolve, rejects) => {
        this.http.post(this.url+'/log', { email: email, password: password }).subscribe((data: any) => {
            (!data.success)? rejects(data.message): resolve(data);
        });
    });
  }

  register(user:UserRegister){
    return new Promise((resolve, rejects) => {
        this.http.post(this.url + '/signup', user).subscribe((data: any) => {
            (!data.success)? rejects(data.message): resolve(data);
        });
    });
}

  getProfile() {
    return this.http.get(this.url + '/profil');
  }
}
