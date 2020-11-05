import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ventas_prediccionComponent } from './ventas_prediccion.component';

describe('Ventas_prediccionComponent', () => {
  let component: Ventas_prediccionComponent;
  let fixture: ComponentFixture<Ventas_prediccionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ventas_prediccionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ventas_prediccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
