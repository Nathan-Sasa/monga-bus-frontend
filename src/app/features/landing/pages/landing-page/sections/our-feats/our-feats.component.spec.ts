import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurFeatsComponent } from './our-feats.component';

describe('OurFeatsComponent', () => {
  let component: OurFeatsComponent;
  let fixture: ComponentFixture<OurFeatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OurFeatsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurFeatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
