import { Component, OnInit } from '@angular/core';
import * as Tesseract from 'tesseract.js';
import { createWorker } from 'tesseract.js';

import { DomSanitizer } from '@angular/platform-browser';
import { ActionSheetController, ModalController, ToastController } from '@ionic/angular';
import { ImgCropperPage } from './components/img-cropper/img-cropper.page';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

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

  imgNit: string = '';
  imgFecha: string = '';
  imgSerie: string = '';
  imgNoFac: string = '';
  imgTotal: string = '';

  nit: string = '';
  fecha: Date = new Date();
  serie: string = '';
  noFac: string = '';
  total: number = 0;

  constructor(private modalCtrl: ModalController, private _fb: FormBuilder,  private _toast: ToastController) {}

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
    return result.data.text;
  }

  async openModal() {
    const modal = await this.modalCtrl.create({
      component: ImgCropperPage,
    });

    modal.present();

    const { data, role } = await modal.onWillDismiss();

    if (role === 'confirm') {
      return data;
    }
  }

  seleccionarNit() {
    this.openModal().then(async (res) => {
      if (res != null) {
        this.imgNit = res;
        const imageName = 'name.jpeg';
        const imgBlob = this.base64ToBlob(res, 'image/jpeg');

        if(imgBlob == null){
          this.message('No se pudo reconocer la foto');
        }else{
          const imageFile = new File([imgBlob!], imageName, { type: 'image/jpeg' });
          this.recognizeIMG(imageFile).then((res) => {
            this.nit = res;
          });
        } 
      }
    });
  }

  seleccionarFecha() {
    this.openModal().then(async (res) => {
      if (res != null) {
        this.imgFecha = res;
        const imageName = 'name.jpeg';
        const imgBlob = this.base64ToBlob(res, 'image/jpeg');

        if(imgBlob == null){
          this.message('No se pudo reconocer la foto', 'danger');
        }else{
          const imageFile = new File([imgBlob!], imageName, { type: 'image/jpeg' });
          this.recognizeIMG(imageFile).then((res) => {
            
            const validateDate = (res: any) => isNaN(Date.parse(res));

            if(validateDate(res)){
              this.message('La fecha no es valida','danger')
            }else{
              this.fecha = new Date(Date.parse(res));
            }
          });
        } 
      }
    });
  }

  seleccionarSerie() {
    this.openModal().then(async (res) => {
      if (res != null) {
        this.imgSerie = res;
        const imageName = 'name.jpeg';
        const imgBlob = this.base64ToBlob(res, 'image/jpeg');

        if(imgBlob == null){
          this.message('No se pudo reconocer la foto');
        }else{
          const imageFile = new File([imgBlob!], imageName, { type: 'image/jpeg' });
          this.recognizeIMG(imageFile).then((res) => {
            this.serie = res;
          });
        } 
      }
    });
  }

  seleccionarNoFac() {
    this.openModal().then(async (res) => {
      if (res != null) {
        this.imgNoFac = res;
        const imageName = 'name.jpeg';
        const imgBlob = this.base64ToBlob(res, 'image/jpeg');

        if(imgBlob == null){
          this.message('No se pudo reconocer la foto');
        }else{
          const imageFile = new File([imgBlob!], imageName, { type: 'image/jpeg' });
          this.recognizeIMG(imageFile).then((res) => {
            this.noFac = res;
          });
        } 
      }
    });
  }

  seleccionarTotal() {
    this.openModal().then(async (res) => {
      if (res != null) {
        this.imgTotal = res;
        const imageName = 'name.jpeg';
        const imgBlob = this.base64ToBlob(res, 'image/jpeg');

        if(imgBlob == null){
          this.message('No se pudo reconocer la foto');
        }else{
          const imageFile = new File([imgBlob!], imageName, { type: 'image/jpeg' });
          this.recognizeIMG(imageFile).then((res) => {
            this.total = parseInt(res);
          });
        } 
      }
    });
  }

  base64ToBlob(base64String: string, contentType: string = ''): Blob | null {

    const cleanedBase64 = base64String.replace(/^data:image\/(png|jpeg|jpg|gif);base64,/, '').trim();
    
    try {
      const byteCharacters = atob(cleanedBase64);
      const byteArrays = [];
  
      for (let offset = 0; offset < byteCharacters.length; offset += 512) {
        const slice = byteCharacters.slice(offset, offset + 512);
  
        const byteNumbers = new Array(slice.length);
        for (let i = 0; i < slice.length; i++) {
          byteNumbers[i] = slice.charCodeAt(i);
        }
  
        const byteArray = new Uint8Array(byteNumbers);
        byteArrays.push(byteArray);
      }
  
      return new Blob(byteArrays, { type: contentType });
    } catch (error) {
      console.error('Error converting base64 to blob:', error);
      return null;
    }
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
