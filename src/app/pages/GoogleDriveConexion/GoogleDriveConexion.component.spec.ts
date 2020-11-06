import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleDriveConexionComponent } from './GoogleDriveConexion.component';

describe('GoogleDriveConexionComponent', () => {
  let component: GoogleDriveConexionComponent;
  let fixture: ComponentFixture<GoogleDriveConexionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoogleDriveConexionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoogleDriveConexionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
