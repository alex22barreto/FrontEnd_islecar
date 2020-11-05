import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Alerta_desabastesimientoComponent } from './alerta_desabastesimiento.component';

describe('Alerta_desabastesimientoComponent', () => {
  let component: Alerta_desabastesimientoComponent;
  let fixture: ComponentFixture<Alerta_desabastesimientoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Alerta_desabastesimientoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Alerta_desabastesimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
