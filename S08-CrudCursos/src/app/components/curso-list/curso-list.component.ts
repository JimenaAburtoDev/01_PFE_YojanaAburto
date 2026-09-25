import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Curso } from '../../models/curso.model';

@Component({
  selector: 'app-curso-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './curso-list.component.html',
  styleUrl: './curso-list.component.css',
})
export class CursoListComponent {
  @Input() cursos: Curso[] = [];
  @Input() cargando = false;
  @Output() editar = new EventEmitter<Curso>();
  @Output() eliminar = new EventEmitter<string>();

  onEditar(curso: Curso): void {
    this.editar.emit(curso);
  }

  onEliminar(curso: Curso): void {
    if (curso._id && confirm(`¿Eliminar el curso "${curso.nombre}"?`)) {
      this.eliminar.emit(curso._id);
    }
  }
}
