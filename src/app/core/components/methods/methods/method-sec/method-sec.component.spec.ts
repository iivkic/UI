import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MethodSecComponent } from './method-sec.component';

describe('MethodSecComponent', () => {
  let component: MethodSecComponent;
  let fixture: ComponentFixture<MethodSecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MethodSecComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MethodSecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
