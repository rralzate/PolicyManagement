import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormClientPolicyComponent } from './form-client-policy.component';

describe('FormClientPolicyComponent', () => {
  let component: FormClientPolicyComponent;
  let fixture: ComponentFixture<FormClientPolicyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormClientPolicyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormClientPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
