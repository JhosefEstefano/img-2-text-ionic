import { Component, OnInit } from '@angular/core';
import * as Tesseract from 'tesseract.js';
import { createWorker } from 'tesseract.js';

import {
  ImageCroppedEvent,
  ImageCropperComponent,
  LoadedImage,
} from 'ngx-image-cropper';
import { DomSanitizer } from '@angular/platform-browser';
import { ActionSheetController, ModalController } from '@ionic/angular';
import { ImgCropperPage } from './components/img-cropper/img-cropper.page';

@Component({
  selector: 'app-ocr',
  templateUrl: './ocr.page.html',
  styleUrls: ['./ocr.page.scss'],
})
export class OcrPage implements OnInit {
  worker!: Tesseract.Worker;
  workerReady = false;
  captureProgress = 0;
  ocrResult = 'Recognizing...';

  constructor( private sanitizer: DomSanitizer, private modalCtrl: ModalController, private actionSheetCtrl: ActionSheetController) {}

  ngOnInit() {
    this.doOCR();
  }

  async doOCR() {
    this.worker = await createWorker({
      logger: (m) => {
        if (m.status == 'recognizing text') {
          this.captureProgress = parseInt('' + m.progress * 100);
        }
      },
    });
    await this.worker.load();
    await this.worker.loadLanguage('spa');
    await this.worker.initialize('spa');
    this.workerReady = true;
  }


  async recognizeIMG(img: File) {
    this.workerReady = false;
    const result = await this.worker.recognize(img);
    this.workerReady = true;
    return result;
  }

  async openModal() {
    const modal = await this.modalCtrl.create({
      component: ImgCropperPage
    });

    modal.present();

    const { data, role } = await modal.onWillDismiss();

    console.log(data);
    if (role === 'confirm') {
      return data;
    }
  }


  async opcionImagen(){
    const actionSheet = await this.actionSheetCtrl.create({
      backdropDismiss: false,
      header: 'Opciones',
      buttons: [
        {
          text: 'Tomar Foto',
          data: {
            action: 'tomar',
          },
        },
        {
          text: 'Seleccionar de galeria',
          data: {
            action: 'galeria',
          },
        },
        {
          text: 'Cancelar',
          role: 'cancel',
          data: {
            action: 'cancelar',
          },
        },
      ],
    });

    actionSheet.present();

    const { data : { action } } = await actionSheet.onWillDismiss();

    return action;
  }

  async seleccionarNit(){
    const result = await this.opcionImagen();
    
    switch (result) {
      case 'tomar':
        
        break;

        case 'galeria':
        
        break;
    
      default:
        break;
    }

  }

  seleccionarFecha(){
    
  }

  seleccionarSerie(){
    
  }

  seleccionarNoFac(){
    
  }

  seleccionarTotal(){
    
  }
  
  dataURItoBlob(dataURI: string) {
    const byteString = window.atob(dataURI);
    const arrayBuffer = new ArrayBuffer(byteString.length);
    const int8Array = new Uint8Array(arrayBuffer);
    for (let i = 0; i < byteString.length; i++) {
      int8Array[i] = byteString.charCodeAt(i);
    }
    const blob = new Blob([int8Array], { type: 'image/png' });
    return blob;
  }

  
  imageCropped(event: ImageCroppedEvent) {
    return this.sanitizer.bypassSecurityTrustUrl(event.objectUrl!);
  }

  imageLoaded(image: LoadedImage) {
    // show cropper
  }

  cropperReady() {
    // cropper ready
  }

  loadImageFailed() {
    // show message
  }

}
