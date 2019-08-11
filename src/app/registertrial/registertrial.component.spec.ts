import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistertrialComponent } from './registertrial.component';

describe('RegistertrialComponent', () => {
  let component: RegistertrialComponent;
  let fixture: ComponentFixture<RegistertrialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistertrialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistertrialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
