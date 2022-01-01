import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoleculesFooterComponent } from './molecules-footer.component';

describe('MoleculesFooterComponent', () => {
  let component: MoleculesFooterComponent;
  let fixture: ComponentFixture<MoleculesFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoleculesFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoleculesFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
