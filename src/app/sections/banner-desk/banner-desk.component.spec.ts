import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerDeskComponent } from './banner-desk.component';

describe('BannerDeskComponent', () => {
  let component: BannerDeskComponent;
  let fixture: ComponentFixture<BannerDeskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BannerDeskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerDeskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
