import { Component } from '@angular/core';
import { NavController, Alert } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  //property
  loginResult;

  constructor(public navCtrl: NavController) {

  }
  //method
  signIn(_username,_password){
  if (_password =="26832") {
      //alert('ยินดีต้องรับเข้าสู่ระบบ')
      this.loginResult = 'ยินดีต้องรับ   คุณ'+_username;
      
      this.navCtrl.push("PhoneBookPage");
    }else{
      //alert('รหัสผ่านผิดพลาด')
      this.loginResult = 'รหัสผ่านผิดพลาด   ';
    }
  }

}//end class
