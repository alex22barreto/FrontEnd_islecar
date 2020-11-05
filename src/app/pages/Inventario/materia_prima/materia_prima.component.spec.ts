import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Materia_primaComponent } from './Materia_prima.component';

describe('Materia_primaComponent', () => {
  let component: Materia_primaComponent;
  let fixture: ComponentFixture<Materia_primaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Materia_primaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Materia_primaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
