import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganismsSidebarComponent } from './organisms-sidebar.component';

describe('OrganismsSidebarComponent', () => {
  let component: OrganismsSidebarComponent;
  let fixture: ComponentFixture<OrganismsSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrganismsSidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganismsSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
