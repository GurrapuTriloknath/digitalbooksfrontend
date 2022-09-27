import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReaderformComponent } from './readerform.component';

describe('ReaderformComponent', () => {
  let component: ReaderformComponent;
  let fixture: ComponentFixture<ReaderformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReaderformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReaderformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
