import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InventariosABCComponent } from './inventariosABC.component';

describe('InventariosABCComponent', () => {
  let component: InventariosABCComponent;
  let fixture: ComponentFixture<InventariosABCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventariosABCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventariosABCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
