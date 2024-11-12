import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CondimentosPage } from './condimentos.page';

describe('CondimentosPage', () => {
  let component: CondimentosPage;
  let fixture: ComponentFixture<CondimentosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CondimentosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
