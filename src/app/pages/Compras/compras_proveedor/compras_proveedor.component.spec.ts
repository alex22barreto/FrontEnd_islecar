import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Compras_proveedorComponent } from './Compras_proveedor.component';

describe('Compras_proveedorComponent', () => {
  let component: Compras_proveedorComponent;
  let fixture: ComponentFixture<Compras_proveedorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Compras_proveedorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Compras_proveedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
