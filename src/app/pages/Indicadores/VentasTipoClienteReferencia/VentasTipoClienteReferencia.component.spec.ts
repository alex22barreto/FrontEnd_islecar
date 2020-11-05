import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VentasTipoClienteReferenciaComponent } from './ventasTipoClienteReferencia.component';

describe('VentasTipoClienteReferenciaComponent', () => {
  let component: VentasTipoClienteReferenciaComponent;
  let fixture: ComponentFixture<VentasTipoClienteReferenciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VentasTipoClienteReferenciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VentasTipoClienteReferenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
