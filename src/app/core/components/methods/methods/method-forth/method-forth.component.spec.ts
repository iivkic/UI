import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MethodForthComponent } from './method-forth.component';

describe('MethodForthComponent', () => {
  let component: MethodForthComponent;
  let fixture: ComponentFixture<MethodForthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MethodForthComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MethodForthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
