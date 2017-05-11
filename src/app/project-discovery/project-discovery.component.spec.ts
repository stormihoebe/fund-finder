import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectDiscoveryComponent } from './project-discovery.component';

describe('ProjectDiscoveryComponent', () => {
  let component: ProjectDiscoveryComponent;
  let fixture: ComponentFixture<ProjectDiscoveryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectDiscoveryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectDiscoveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
