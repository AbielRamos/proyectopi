import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EnlatadosPage } from './enlatados.page';

describe('EnlatadosPage', () => {
  let component: EnlatadosPage;
  let fixture: ComponentFixture<EnlatadosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EnlatadosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
