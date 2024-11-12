import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BotanasPage } from './botanas.page';

describe('BotanasPage', () => {
  let component: BotanasPage;
  let fixture: ComponentFixture<BotanasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BotanasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
