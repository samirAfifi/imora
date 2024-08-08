import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompresdComponent } from './compresd.component';

describe('CompresdComponent', () => {
  let component: CompresdComponent;
  let fixture: ComponentFixture<CompresdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompresdComponent]
    });
    fixture = TestBed.createComponent(CompresdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
