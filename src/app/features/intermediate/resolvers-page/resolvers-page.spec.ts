import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResolversPage } from './resolvers-page';

describe('ResolversPage', () => {
  let component: ResolversPage;
  let fixture: ComponentFixture<ResolversPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResolversPage],
    }).compileComponents();

    fixture = TestBed.createComponent(ResolversPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
