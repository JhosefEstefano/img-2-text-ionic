import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoFacPage } from './no-fac.page';

describe('NoFacPage', () => {
  let component: NoFacPage;
  let fixture: ComponentFixture<NoFacPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NoFacPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
