import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormatoComprasComponent } from './formatoCompras.component';

describe('FormatoComprasComponent', () => {
  let component: FormatoComprasComponent;
  let fixture: ComponentFixture<FormatoComprasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormatoComprasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormatoComprasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
