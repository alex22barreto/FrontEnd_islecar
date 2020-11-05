import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ventas_clienteComponent } from './Ventas_cliente.component';

describe('Ventas_clienteComponent', () => {
  let component: Ventas_clienteComponent;
  let fixture: ComponentFixture<Ventas_clienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ventas_clienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ventas_clienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
