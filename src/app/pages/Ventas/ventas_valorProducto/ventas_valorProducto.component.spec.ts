import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ventas_valorProductoComponent } from './ventas_valorProducto.component';

describe('Ventas_valorProductoComponent', () => {
  let component: Ventas_valorProductoComponent;
  let fixture: ComponentFixture<Ventas_valorProductoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ventas_valorProductoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ventas_valorProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
