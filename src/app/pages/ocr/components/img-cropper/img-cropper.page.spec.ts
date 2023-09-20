import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ImgCropperPage } from './img-cropper.page';

describe('ImgCropperPage', () => {
  let component: ImgCropperPage;
  let fixture: ComponentFixture<ImgCropperPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ImgCropperPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
