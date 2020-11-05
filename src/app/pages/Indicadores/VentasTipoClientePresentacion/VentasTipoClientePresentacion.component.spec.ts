import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VentasTipoClientePresentacionComponent } from './VentasTipoClientePresentacion.component';

describe('VentasTipoClientePresentacionComponent', () => {
  let component: VentasTipoClientePresentacionComponent;
  let fixture: ComponentFixture<VentasTipoClientePresentacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VentasTipoClientePresentacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VentasTipoClientePresentacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
