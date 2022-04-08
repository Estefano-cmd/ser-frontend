import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostCat1Component } from './post-cat1.component';

describe('PostCat1Component', () => {
  let component: PostCat1Component;
  let fixture: ComponentFixture<PostCat1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostCat1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostCat1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
