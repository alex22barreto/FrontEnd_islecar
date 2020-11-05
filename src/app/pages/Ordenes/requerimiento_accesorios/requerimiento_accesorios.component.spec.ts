import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Requerimiento_accesoriosComponent } from './Requerimiento_accesorios.component';

describe('Requerimiento_accesoriosComponent', () => {
  let component: Requerimiento_accesoriosComponent;
  let fixture: ComponentFixture<Requerimiento_accesoriosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Requerimiento_accesoriosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Requerimiento_accesoriosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
