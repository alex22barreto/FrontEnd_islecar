import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Requerimiento_insumosComponent } from './requerimiento_insumos.component';

describe('Requerimiento_insumosComponent', () => {
  let component: Requerimiento_insumosComponent;
  let fixture: ComponentFixture<Requerimiento_insumosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Requerimiento_insumosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Requerimiento_insumosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
