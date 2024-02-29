import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAsTableComponent } from './view-as-table.component';

describe('ViewAsTableComponent', () => {
  let component: ViewAsTableComponent;
  let fixture: ComponentFixture<ViewAsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewAsTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewAsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
