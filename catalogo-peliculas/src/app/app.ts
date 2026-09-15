import { Component, signal } from '@angular/core';
import { PeliculaLista } from './pelicula-lista/pelicula-lista';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PeliculaLista],
  template: '<app-pelicula-lista></app-pelicula-lista>',
  styleUrl: './app.css'
})
export class App {
  protected title = signal('catalogo-peliculas');
}