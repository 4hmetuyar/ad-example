import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoleculesHeaderComponent } from './molecules-header.component';

describe('MoleculesHeaderComponent', () => {
  let component: MoleculesHeaderComponent;
  let fixture: ComponentFixture<MoleculesHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoleculesHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoleculesHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
