import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GalletasPage } from './galletas.page';

describe('GalletasPage', () => {
  let component: GalletasPage;
  let fixture: ComponentFixture<GalletasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(GalletasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
