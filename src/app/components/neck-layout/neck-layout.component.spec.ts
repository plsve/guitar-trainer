import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeckLayoutComponent } from './neck-layout.component';

describe('NeckLayoutComponent', () => {
  let component: NeckLayoutComponent;
  let fixture: ComponentFixture<NeckLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NeckLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NeckLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
