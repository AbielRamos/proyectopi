import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LegumbresPage } from './legumbres.page';

describe('LegumbresPage', () => {
  let component: LegumbresPage;
  let fixture: ComponentFixture<LegumbresPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LegumbresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
