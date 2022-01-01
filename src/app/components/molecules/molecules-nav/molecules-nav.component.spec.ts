import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoleculesNavComponent } from './molecules-nav.component';

describe('MoleculesNavComponent', () => {
  let component: MoleculesNavComponent;
  let fixture: ComponentFixture<MoleculesNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoleculesNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoleculesNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
