import { Component, OnInit } from '@angular/core';
import * as Tesseract from 'tesseract.js';
import { createWorker } from 'tesseract.js';

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

  constructor() {
    this.doOCR();
  }

  ngOnInit() {}

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


  
}
