import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ventas_productosComponent } from './ventas_productos.component';

describe('Ventas_productosComponent', () => {
  let component: Ventas_productosComponent;
  let fixture: ComponentFixture<Ventas_productosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ventas_productosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ventas_productosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
