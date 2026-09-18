import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { LibroService } from './services/libro';
import { Libro } from './models/libro';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {

  private readonly libroService = inject(LibroService);

  libros: Libro[] = [];

  nuevoLibro: Libro = {
    titulo: '',
    autor: '',
    anio: 0,
    genero: ''
  };

  mensaje = '';

  ngOnInit(): void {
    this.cargarLibros();
  }

  cargarLibros(): void {
    this.libroService.obtenerLibros().subscribe({
      next: (datos: Libro[]) => {
        this.libros = datos;
      },
      error: (error: unknown) => {
        console.error('Error al obtener libros:', error);
      }
    });
  }

  registrarLibro(): void {
    this.libroService.registrarLibro(this.nuevoLibro).subscribe({
      next: (libro: Libro) => {
        this.libros.push(libro);
        this.mensaje = 'Libro registrado correctamente.';
        this.nuevoLibro = {
          titulo: '',
          autor: '',
          anio: 0,
          genero: ''
        };
      },
      error: (error: unknown) => {
        console.error('Error al registrar:', error);
      }
    });
  }
}