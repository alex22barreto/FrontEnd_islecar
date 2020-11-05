import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RotacionInventariosComponent } from './RotacionInventarios.component';

describe('RotacionInventariosComponent', () => {
  let component: RotacionInventariosComponent;
  let fixture: ComponentFixture<RotacionInventariosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RotacionInventariosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RotacionInventariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
