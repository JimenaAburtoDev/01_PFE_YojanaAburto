import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar';
import { ContactoFormularioComponent } from './components/contacto-formulario/contacto-formulario';
import { ContactoListaComponent } from './components/contacto-lista/contacto-lista';
import { Contacto } from './models/contacto';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, ContactoFormularioComponent, ContactoListaComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  contactos: Contacto[] = [];

  agregarContacto(contacto: Contacto): void {
    this.contactos.push(contacto);
  }
}