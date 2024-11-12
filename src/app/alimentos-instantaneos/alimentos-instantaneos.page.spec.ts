import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AlimentosInstantaneosPage } from './alimentos-instantaneos.page';

describe('AlimentosInstantaneosPage', () => {
  let component: AlimentosInstantaneosPage;
  let fixture: ComponentFixture<AlimentosInstantaneosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AlimentosInstantaneosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
