import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Producto_terminadoComponent } from './producto_terminado.component';

describe('Producto_terminadoComponent', () => {
  let component: Producto_terminadoComponent;
  let fixture: ComponentFixture<Producto_terminadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Producto_terminadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Producto_terminadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
