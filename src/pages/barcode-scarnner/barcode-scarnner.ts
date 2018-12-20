import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';


@IonicPage()
@Component({
  selector: 'page-barcode-scarnner',
  templateUrl: 'barcode-scarnner.html',
})
export class BarcodeScarnnerPage {
  scanText = "";
  scanFormat = "";
  [x: string]: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private scanner: BarcodeScanner) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BarcodeScarnnerPage');
  }

  scan() {
    this.scanner.scan().then(
      data => {
        this.scanText = data.text;
        this.scanFomat = data.format;

      },
       (error) => { console.log(error) });
  }



}//END
