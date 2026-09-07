import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VolsPageComponent } from './vols-page.component';

describe('VolsPageComponent', () => {
  let component: VolsPageComponent;
  let fixture: ComponentFixture<VolsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VolsPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VolsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
