import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ventas_segmentoClienteComponent } from './ventas_segmentoCliente.component';

describe('Ventas_segmentoClienteComponent', () => {
  let component: Ventas_segmentoClienteComponent;
  let fixture: ComponentFixture<Ventas_segmentoClienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ventas_segmentoClienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ventas_segmentoClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
