import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EncapsulaitonA } from './encapsulaiton-a';

describe('EncapsulaitonA', () => {
  let component: EncapsulaitonA;
  let fixture: ComponentFixture<EncapsulaitonA>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EncapsulaitonA],
    }).compileComponents();

    fixture = TestBed.createComponent(EncapsulaitonA);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
