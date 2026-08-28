import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Contacto } from '../../models/contacto';

@Component({
  selector: 'app-contacto-formulario',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contacto-formulario.html',
  styleUrl: './contacto-formulario.css'
})
export class ContactoFormularioComponent {
  @Output() contactoAgregado = new EventEmitter<Contacto>();

  nombre = '';
  telefono = '';
  correo = '';
  tipo = '';

  tiposDisponibles = ['Personal', 'Trabajo', 'Familia', 'Estudios'];

  get formularioInvalido(): boolean {
    return !this.nombre || !this.telefono || !this.correo || !this.tipo;
  }

  agregar(): void {
    if (this.formularioInvalido) return;

    this.contactoAgregado.emit({
      nombre: this.nombre,
      telefono: this.telefono,
      correo: this.correo,
      tipo: this.tipo
    });

    this.limpiarFormulario();
  }

  private limpiarFormulario(): void {
    this.nombre = '';
    this.telefono = '';
    this.correo = '';
    this.tipo = '';
  }
}