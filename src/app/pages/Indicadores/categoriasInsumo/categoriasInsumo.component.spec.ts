import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriasInsumoComponent } from './categoriasInsumo.component';

describe('CategoriasInsumoComponent', () => {
  let component: CategoriasInsumoComponent;
  let fixture: ComponentFixture<CategoriasInsumoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoriasInsumoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriasInsumoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
