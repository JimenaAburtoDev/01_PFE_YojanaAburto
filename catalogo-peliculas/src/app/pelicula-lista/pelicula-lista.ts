import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PeliculaService, Pelicula } from '../services/pelicula';

@Component({
  selector: 'app-pelicula-lista',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './pelicula-lista.html',
  styleUrl: './pelicula-lista.css'
})
export class PeliculaLista implements OnInit {

  private peliculaService = inject(PeliculaService);

  peliculas: Pelicula[] = [];
  mostrarFormulario = false;

  // Campos del formulario
  nuevoTitulo = '';
  nuevoGenero = '';
  nuevoAnio: number | null = null;
  nuevaCalificacion: number | null = null;

  ngOnInit(): void {
    this.peliculas = this.peliculaService.obtenerPeliculas();
  }

  // --- Estadísticas para las tarjetas superiores ---
  contarMuyRecomendadas(): number {
    return this.peliculas.filter(p => p.calificacion >= 9).length;
  }

  contarRecomendadas(): number {
    return this.peliculas.filter(p => p.calificacion >= 7 && p.calificacion < 9).length;
  }

  // --- Formulario ---
  toggleFormulario(): void {
    this.mostrarFormulario = !this.mostrarFormulario;
  }

  agregarPelicula(): void {
    if (!this.nuevoTitulo || !this.nuevoGenero || !this.nuevoAnio || this.nuevaCalificacion === null) {
      return;
    }

    this.peliculaService.agregarPelicula({
      titulo: this.nuevoTitulo,
      genero: this.nuevoGenero,
      anio: this.nuevoAnio,
      calificacion: this.nuevaCalificacion
    });

    this.peliculas = this.peliculaService.obtenerPeliculas();

    this.nuevoTitulo = '';
    this.nuevoGenero = '';
    this.nuevoAnio = null;
    this.nuevaCalificacion = null;
    this.mostrarFormulario = false;
  }
}