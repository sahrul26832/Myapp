import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BarcodeScarnnerPage } from './barcode-scarnner';

@NgModule({
  declarations: [
    BarcodeScarnnerPage,
  ],
  imports: [
    IonicPageModule.forChild(BarcodeScarnnerPage),
  ],
})
export class BarcodeScarnnerPageModule {}
