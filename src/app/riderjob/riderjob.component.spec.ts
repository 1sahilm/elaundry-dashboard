import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiderjobComponent } from './riderjob.component';

describe('RiderjobComponent', () => {
  let component: RiderjobComponent;
  let fixture: ComponentFixture<RiderjobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RiderjobComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RiderjobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
