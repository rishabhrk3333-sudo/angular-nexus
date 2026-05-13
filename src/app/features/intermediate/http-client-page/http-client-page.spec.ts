import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientPage } from './http-client-page';

describe('HttpClientPage', () => {
  let component: HttpClientPage;
  let fixture: ComponentFixture<HttpClientPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientPage],
    }).compileComponents();

    fixture = TestBed.createComponent(HttpClientPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
