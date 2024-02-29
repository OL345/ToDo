import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAsListComponent } from './view-as-list.component';

describe('ViewAsListComponent', () => {
  let component: ViewAsListComponent;
  let fixture: ComponentFixture<ViewAsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewAsListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewAsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
