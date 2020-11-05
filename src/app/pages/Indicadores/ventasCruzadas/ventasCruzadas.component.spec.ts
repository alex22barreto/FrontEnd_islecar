import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VentasCruzadasComponent } from './VentasCruzadas.component';

describe('VentasCruzadasComponent', () => {
  let component: VentasCruzadasComponent;
  let fixture: ComponentFixture<VentasCruzadasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VentasCruzadasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VentasCruzadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
