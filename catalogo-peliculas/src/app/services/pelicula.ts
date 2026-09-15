import { Injectable } from '@angular/core';

export interface Pelicula {
  id: number;
  titulo: string;
  genero: string;
  anio: number;
  calificacion: number; // escala de 0 a 10
}

@Injectable({
  providedIn: 'root'
})
export class PeliculaService {

  private peliculas: Pelicula[] = [
    { id: 1, titulo: 'El Padrino', genero: 'Drama', anio: 1972, calificacion: 9.2 },
    { id: 2, titulo: 'Matrix', genero: 'Ciencia Ficción', anio: 1999, calificacion: 8.7 },
    { id: 3, titulo: 'Titanic', genero: 'Romance', anio: 1997, calificacion: 7.8 },
    { id: 4, titulo: 'Cars 3', genero: 'Animación', anio: 2017, calificacion: 4.5 },
    { id: 5, titulo: 'Sharknado 6', genero: 'Comedia', anio: 2018, calificacion: 3.1 }
  ];

  obtenerPeliculas(): Pelicula[] {
    return this.peliculas;
  }

  agregarPelicula(pelicula: Omit<Pelicula, 'id'>): void {
    const nuevoId = this.peliculas.length > 0
      ? Math.max(...this.peliculas.map(p => p.id)) + 1
      : 1;

    this.peliculas.push({ id: nuevoId, ...pelicula });
  }
}