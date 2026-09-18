import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Notificaiton } from './notificaiton';

describe('Notificaiton', () => {
  let component: Notificaiton;
  let fixture: ComponentFixture<Notificaiton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Notificaiton],
    }).compileComponents();

    fixture = TestBed.createComponent(Notificaiton);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
