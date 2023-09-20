import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-img-cropper',
  templateUrl: './img-cropper.page.html',
  styleUrls: ['./img-cropper.page.scss'],
})
export class ImgCropperPage implements OnInit {

  name: string = '';

  constructor(private modalCtrl: ModalController) {}

  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  confirm() {
    return this.modalCtrl.dismiss(this.name, 'confirm');
  }

  ngOnInit() {
  }

}
