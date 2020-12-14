import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NextChapterComponent } from './next-chapter.component';

describe('NextChapterComponent', () => {
  let component: NextChapterComponent;
  let fixture: ComponentFixture<NextChapterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NextChapterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NextChapterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
