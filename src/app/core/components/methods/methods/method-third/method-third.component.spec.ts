import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MethodThirdComponent } from './method-third.component';

describe('MethodThirdComponent', () => {
  let component: MethodThirdComponent;
  let fixture: ComponentFixture<MethodThirdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MethodThirdComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MethodThirdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
