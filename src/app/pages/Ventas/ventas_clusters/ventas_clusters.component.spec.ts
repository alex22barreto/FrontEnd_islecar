import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ventas_clustersComponent } from './Ventas_clusters.component';

describe('Ventas_clustersComponent', () => {
  let component: Ventas_clustersComponent;
  let fixture: ComponentFixture<Ventas_clustersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ventas_clustersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ventas_clustersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
