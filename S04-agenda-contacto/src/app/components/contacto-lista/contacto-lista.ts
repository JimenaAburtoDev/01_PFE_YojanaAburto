import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Contacto } from '../../models/contacto';
import { ContactoCardsComponent } from '../contacto-cards/contacto-cards';

@Component({
  selector: 'app-contacto-lista',
  standalone: true,
  imports: [CommonModule, ContactoCardsComponent],
  templateUrl: './contacto-lista.html',
  styleUrl: './contacto-lista.css'
})
export class ContactoListaComponent {
  @Input() contactos: Contacto[] = [];
}