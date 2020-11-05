import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Alerta_sobreabastesimientoComponent } from './alerta_sobreabastesimiento.component';

describe('Alerta_sobreabastesimientoComponent', () => {
  let component: Alerta_sobreabastesimientoComponent;
  let fixture: ComponentFixture<Alerta_sobreabastesimientoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Alerta_sobreabastesimientoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Alerta_sobreabastesimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
