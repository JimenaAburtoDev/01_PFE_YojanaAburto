import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactoLista } from './contacto-lista';

describe('ContactoLista', () => {
  let component: ContactoLista;
  let fixture: ComponentFixture<ContactoLista>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactoLista],
    }).compileComponents();

    fixture = TestBed.createComponent(ContactoLista);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
