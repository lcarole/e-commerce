import { Component, OnInit } from '@angular/core';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { AuthService } from '../../services/auth.service';
import { LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email:string='';
  password:string='';
  isErrorMail:boolean = true;
  constructor(private auth:AuthService,
    private loading:LoadingController,
    private router:Router,
    private platform:Platform,
    private storage:NativeStorage) { }

  ngOnInit() {
  }

  checkEmail() {
    const regex = new RegExp(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g);
    // this.isErrorMail = !regex.test(this.email);
    this.isErrorMail = (regex.test(this.email.trim())) ? false : true;
}

async loginForm() {
  const load = await this.loading.create({
      message: 'Please wait...',
  });
  await load.present();
  this.auth.login(this.email, this.password).then(async(user: any) => {
      console.log(this.platform.platforms());
      if (this.platform.is("desktop")) {
          localStorage.setItem('token', user.token)
          localStorage.setItem('user', JSON.stringify(user.user))
      } else {
          await this.storage.setItem('token', user.token)
          await this.storage.setItem('user', JSON.stringify(user.user))
      }
      await this.loading.dismiss();
      this.router.navigate(['/home'])
  }).catch(async() => {
      this.email = ''
      this.password = ''
      this.isErrorMail = true;
      await this.loading.dismiss();
  })
}

}
