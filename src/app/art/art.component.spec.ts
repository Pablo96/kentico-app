import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ARTComponent } from './art.component';

describe('ARTComponent', () => {
  let component: ARTComponent;
  let fixture: ComponentFixture<ARTComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ARTComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ARTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
