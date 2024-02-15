import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryTablaComponent } from './country-tabla.component';

describe('CountryTablaComponent', () => {
  let component: CountryTablaComponent;
  let fixture: ComponentFixture<CountryTablaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CountryTablaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CountryTablaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
