import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PhoneBookPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-phone-book',
  templateUrl: 'phone-book.html',
})
export class PhoneBookPage {

  contactArray = [
    {name:'Bebe', telephone:'0848561831',imageUrl:'assets/imgs/006.jpg'}
    ,{name:'Boby', telephone:'0814661411',imageUrl:'assets/imgs/600.jpg'}
    ,{name:'Babi', telephone:'0869569744',imageUrl:'assets/imgs/60.jpg'}
    ,{name:'Bibo', telephone:'0838298321',imageUrl:'assets/imgs/300.jpg'}
  ];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PhoneBookPage');
  }

  viewDetail(item){
    this.navCtrl.push("PhoneBookDetailPage",item);

  }

}//end class
