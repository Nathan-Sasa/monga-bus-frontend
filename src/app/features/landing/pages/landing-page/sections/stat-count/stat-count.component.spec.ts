import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatCountComponent } from './stat-count.component';

describe('StatCountComponent', () => {
  let component: StatCountComponent;
  let fixture: ComponentFixture<StatCountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StatCountComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
