import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReaderbookslistComponent } from './readerbookslist.component';

describe('ReaderbookslistComponent', () => {
  let component: ReaderbookslistComponent;
  let fixture: ComponentFixture<ReaderbookslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReaderbookslistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReaderbookslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
