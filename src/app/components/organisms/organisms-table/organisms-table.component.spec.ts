import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganismsTableComponent } from './organisms-table.component';

describe('OrganismsTableComponent', () => {
  let component: OrganismsTableComponent;
  let fixture: ComponentFixture<OrganismsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrganismsTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganismsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
