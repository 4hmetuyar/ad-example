import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplatesHomeComponent } from './templates-home.component';

describe('TemplatesHomeComponent', () => {
  let component: TemplatesHomeComponent;
  let fixture: ComponentFixture<TemplatesHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplatesHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplatesHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
