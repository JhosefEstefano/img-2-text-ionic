import { Component, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Camera, CameraResultType } from '@capacitor/camera';
import { Capacitor } from '@capacitor/core';
import {
  LoadingController,
  ModalController,
  ToastController,
} from '@ionic/angular';

import {
  ImageCroppedEvent,
  ImageCropperComponent,
  LoadedImage,
} from 'ngx-image-cropper';

@Component({
  selector: 'app-img-cropper',
  templateUrl: './img-cropper.page.html',
  styleUrls: ['./img-cropper.page.scss'],
})
export class ImgCropperPage implements OnInit {
  @ViewChild('cropper') cropper!: ImageCropperComponent;
  imageChangedEvent!: any;
  name: string = '';
  croppedImage: any;
  myImage: string = '';

  isMobile = Capacitor.getPlatform() !== 'web';

  constructor(
    private modalCtrl: ModalController,
    private _loadingCtrl: LoadingController,
    private _toast: ToastController
  ) {}

  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  confirm() {
    if (this.cropper.crop()?.base64) {
      return this.modalCtrl.dismiss(
        this.cropper.crop('base64')!.base64,
        'confirm'
      );
    } else {
      this.message('Selecciona una imagen primero', 'danger');
      return;
    }
  }

  ngOnInit() {}

  async selectImage() {
    const image = await Camera.getPhoto({
      quality: 100,
      allowEditing: true,
      resultType: CameraResultType.Base64,
    });

    const loading = await this._loadingCtrl.create();
    await loading.present();

    this.myImage = `data:image/jpeg;base64,${image.base64String}`;
    this.croppedImage = null;
  }

  imageLoaded() {
    this._loadingCtrl.dismiss();
  }

  imageLoadedFail() {
    this._loadingCtrl.dismiss();
    console.log('Img no cargada');
  }

  async message(pMensaje: string, pColor: string = 'light') {
    const toast = await this._toast.create({
      message: pMensaje,
      duration: 1500,
      position: 'bottom',
      color: pColor,
    });

    await toast.present();
  }
}
