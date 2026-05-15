import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebWorkersPage } from './web-workers-page';

describe('WebWorkersPage', () => {
  let component: WebWorkersPage;
  let fixture: ComponentFixture<WebWorkersPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebWorkersPage],
    }).compileComponents();

    fixture = TestBed.createComponent(WebWorkersPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
