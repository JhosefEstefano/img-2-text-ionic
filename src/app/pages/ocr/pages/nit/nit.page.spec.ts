import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NitPage } from './nit.page';

describe('NitPage', () => {
  let component: NitPage;
  let fixture: ComponentFixture<NitPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NitPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
