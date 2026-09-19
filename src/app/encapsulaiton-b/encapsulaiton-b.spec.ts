import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EncapsulaitonB } from './encapsulaiton-b';

describe('EncapsulaitonB', () => {
  let component: EncapsulaitonB;
  let fixture: ComponentFixture<EncapsulaitonB>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EncapsulaitonB],
    }).compileComponents();

    fixture = TestBed.createComponent(EncapsulaitonB);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
