import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ordenes_sugeridasComponent } from './Ordenes_sugeridas.component';

describe('Ordenes_sugeridasComponent', () => {
  let component: Ordenes_sugeridasComponent;
  let fixture: ComponentFixture<Ordenes_sugeridasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ordenes_sugeridasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ordenes_sugeridasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
