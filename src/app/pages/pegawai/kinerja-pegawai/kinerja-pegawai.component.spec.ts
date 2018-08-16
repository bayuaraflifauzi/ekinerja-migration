import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KinerjaPegawaiComponent } from './kinerja-pegawai.component';

describe('KinerjaPegawaiComponent', () => {
  let component: KinerjaPegawaiComponent;
  let fixture: ComponentFixture<KinerjaPegawaiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KinerjaPegawaiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KinerjaPegawaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
