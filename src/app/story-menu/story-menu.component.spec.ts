import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryMenuComponent } from './story-menu.component';

describe('StoryMenuComponent', () => {
  let component: StoryMenuComponent;
  let fixture: ComponentFixture<StoryMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoryMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoryMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
