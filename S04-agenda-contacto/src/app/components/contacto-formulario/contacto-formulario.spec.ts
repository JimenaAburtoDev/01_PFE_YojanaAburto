import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactoFormulario } from './contacto-formulario';

describe('ContactoFormulario', () => {
  let component: ContactoFormulario;
  let fixture: ComponentFixture<ContactoFormulario>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactoFormulario],
    }).compileComponents();

    fixture = TestBed.createComponent(ContactoFormulario);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
