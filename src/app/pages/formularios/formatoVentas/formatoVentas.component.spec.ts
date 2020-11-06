import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormatoVentasComponent } from './formatoVentas.component';

describe('FormatoVentasComponent', () => {
  let component: FormatoVentasComponent;
  let fixture: ComponentFixture<FormatoVentasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormatoVentasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormatoVentasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
