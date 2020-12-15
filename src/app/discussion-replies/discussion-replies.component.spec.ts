import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscussionRepliesComponent } from './discussion-replies.component';

describe('DiscussionRepliesComponent', () => {
  let component: DiscussionRepliesComponent;
  let fixture: ComponentFixture<DiscussionRepliesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiscussionRepliesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscussionRepliesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
