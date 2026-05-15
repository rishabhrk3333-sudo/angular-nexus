import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgZonePage } from './ng-zone-page';

describe('NgZonePage', () => {
  let component: NgZonePage;
  let fixture: ComponentFixture<NgZonePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgZonePage],
    }).compileComponents();

    fixture = TestBed.createComponent(NgZonePage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
