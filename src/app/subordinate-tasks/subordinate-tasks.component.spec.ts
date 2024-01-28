import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubordinateTasksComponent } from './subordinate-tasks.component';

describe('SubordinateTasksComponent', () => {
  let component: SubordinateTasksComponent;
  let fixture: ComponentFixture<SubordinateTasksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubordinateTasksComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SubordinateTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
