import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewDiscussionReplyComponent } from './new-discussion-reply.component';

describe('NewDiscussionReplyComponent', () => {
  let component: NewDiscussionReplyComponent;
  let fixture: ComponentFixture<NewDiscussionReplyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewDiscussionReplyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewDiscussionReplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
