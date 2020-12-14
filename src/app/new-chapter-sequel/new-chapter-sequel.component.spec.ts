import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewChapterSequelComponent } from './new-chapter-sequel.component';

describe('NewChapterSequelComponent', () => {
  let component: NewChapterSequelComponent;
  let fixture: ComponentFixture<NewChapterSequelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewChapterSequelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewChapterSequelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
