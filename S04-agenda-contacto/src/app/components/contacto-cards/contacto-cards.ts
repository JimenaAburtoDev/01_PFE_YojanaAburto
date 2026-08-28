import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Contacto } from '../../models/contacto';

@Component({
  selector: 'app-contacto-cards',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contacto-cards.html',
  styleUrl: './contacto-cards.css'
})
export class ContactoCardsComponent {
  @Input() contacto!: Contacto;
}