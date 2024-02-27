import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HereoSearchComponent } from './hero-search.component';

describe('HereoSearchComponent', () => {
  let component: HereoSearchComponent;
  let fixture: ComponentFixture<HereoSearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HereoSearchComponent]
    });
    fixture = TestBed.createComponent(HereoSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
