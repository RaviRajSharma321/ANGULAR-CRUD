import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingPartComponent } from './listing-part.component';

describe('ListingPartComponent', () => {
  let component: ListingPartComponent;
  let fixture: ComponentFixture<ListingPartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListingPartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListingPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
