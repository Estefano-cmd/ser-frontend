import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JovenezComponent } from './jovenez.component';

describe('JovenezComponent', () => {
  let component: JovenezComponent;
  let fixture: ComponentFixture<JovenezComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JovenezComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JovenezComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
