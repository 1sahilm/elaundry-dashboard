import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreexComponent } from './storeex.component';

describe('StoreexComponent', () => {
  let component: StoreexComponent;
  let fixture: ComponentFixture<StoreexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoreexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
