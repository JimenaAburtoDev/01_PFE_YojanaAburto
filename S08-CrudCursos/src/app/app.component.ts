import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursoFormComponent } from './components/curso-form/curso-form.component';
import { CursoListComponent } from './components/curso-list/curso-list.component';
import { CursoService } from './services/curso.service';
import { Curso } from './models/curso.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, CursoFormComponent, CursoListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  cursos: Curso[] = [];
  cursoEnEdicion: Curso | null = null;
  cargando = false;
  mensajeError = '';

  constructor(private cursoService: CursoService) {}

  ngOnInit(): void {
    this.cargarCursos();
  }

  cargarCursos(): void {
    this.cargando = true;
    this.mensajeError = '';
    this.cursoService.listar().subscribe({
      next: (cursos) => {
        this.cursos = cursos;
        this.cargando = false;
      },
      error: () => {
        this.mensajeError =
          'No se pudo conectar con la API. Verifica el endpoint configurado en curso.service.ts.';
        this.cargando = false;
      },
    });
  }

  onGuardar(curso: Curso): void {
    if (curso._id) {
      this.cursoService.actualizar(curso._id, curso).subscribe({
        next: () => {
          this.cursoEnEdicion = null;
          this.cargarCursos();
        },
        error: () => {
          this.mensajeError = 'Ocurrió un error al guardar el curso.';
        },
      });
      return;
    }

    this.cursoService.crear(curso).subscribe({
      next: () => {
        this.cursoEnEdicion = null;
        this.cargarCursos();
      },
      error: () => {
        this.mensajeError = 'Ocurrió un error al guardar el curso.';
      },
    });
  }

  onEditar(curso: Curso): void {
    this.cursoEnEdicion = curso;
  }

  onEliminar(id: string): void {
    this.cursoService.eliminar(id).subscribe({
      next: () => this.cargarCursos(),
      error: () => {
        this.mensajeError = 'Ocurrió un error al eliminar el curso.';
      },
    });
  }

  onCancelar(): void {
    this.cursoEnEdicion = null;
  }
}
