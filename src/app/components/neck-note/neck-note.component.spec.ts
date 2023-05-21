import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeckNoteComponent } from './neck-note.component';

describe('NeckNoteComponent', () => {
  let component: NeckNoteComponent;
  let fixture: ComponentFixture<NeckNoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NeckNoteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NeckNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
