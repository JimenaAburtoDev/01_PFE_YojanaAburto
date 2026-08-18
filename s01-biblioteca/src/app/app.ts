import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Biblioteca Digital');

  libros = [
    {
      titulo: 'El Quijote',
      autor: 'Miguel de Cervantes',
      Estado: 'Disponible'
    },
    {
      titulo: 'Cien años de soledad',
      autor: 'Gabriel García Márquez',
      Estado: 'Prestado'
    },
    {
      titulo: 'El Principito',
      autor: 'Antoine de Saint-Exupéry',
      Estado: 'No Disponible'
    }
  ];
  
}
