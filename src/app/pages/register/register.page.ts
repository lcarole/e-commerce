import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { UserRegister } from '../../interfaces/user-register';
import { LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['../login/login.page.scss','./register.page.scss'],
})
export class RegisterPage implements OnInit {


  isErrorMail:boolean=true;
  user:UserRegister={fullname:'',email:'',password:'',confirm_password:''};

  constructor( private auth:AuthService,
    private loading:LoadingController,
    private router:Router,
    private toast:ToastController) { }

  ngOnInit() {
  }

  checkEmail() {
    const regex = new RegExp(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g);
    // this.isErrorMail = !regex.test(this.email);
    this.isErrorMail = (regex.test(this.user.email.trim())) ? false : true;
}


  async register(){
    const load = await this.loading.create({
      message: 'Please wait...',
  });
  await load.present();
    this.user.fullname = this.user.email.split('@') [0];
    this.auth.register(this.user).then(async(data)=>{
      console.log(data);
      await this.loading.dismiss();
      this.router.navigate(['/login'])
    }).catch(async(err)=>{
      console.log(err);
      const toast = await this.toast.create({
        message: err,
        duration: 2000
      });
      toast.present();
      await this.loading.dismiss();
    })
  }

}
