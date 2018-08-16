import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkpBulananComponent } from './skp-bulanan.component';

describe('SkpBulananComponent', () => {
  let component: SkpBulananComponent;
  let fixture: ComponentFixture<SkpBulananComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkpBulananComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkpBulananComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
