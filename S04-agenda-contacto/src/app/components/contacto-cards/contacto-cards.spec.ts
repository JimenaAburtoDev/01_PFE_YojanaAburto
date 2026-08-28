import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactoCards } from './contacto-cards';

describe('ContactoCards', () => {
  let component: ContactoCards;
  let fixture: ComponentFixture<ContactoCards>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactoCards],
    }).compileComponents();

    fixture = TestBed.createComponent(ContactoCards);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
