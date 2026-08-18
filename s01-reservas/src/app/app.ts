import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {

  protected readonly title = signal('Sistema de Citas');

  // Mensaje para mostrar cuando se presionan los botones
  mensaje = '';

  // Lista de citas
  citas = [
    {
      cliente: 'Ana Pérez',
      fecha: '18/08/2026',
      hora: '10:00',
      servicio: 'Consulta',
      estado: 'Confirmada'
    },
    {
      cliente: 'Luis García',
      fecha: '18/08/2026',
      hora: '11:30',
      servicio: 'Asesoría',
      estado: 'Pendiente'
    },
    {
      cliente: 'María López',
      fecha: '19/08/2026',
      hora: '09:00',
      servicio: 'Consulta',
      estado: 'Confirmada'
    }
  ];

  // Botón Registrar Cita
  registrarCita() {
    this.mensaje = 'Cita registrada correctamente.';
  }

  // Botón Ver cita
  verCita(cliente: string) {
    this.mensaje = 'Consultando la cita de ' + cliente;
  }

}