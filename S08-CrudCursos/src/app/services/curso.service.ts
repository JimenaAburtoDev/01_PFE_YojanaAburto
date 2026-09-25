import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of } from 'rxjs';
import { Curso } from '../models/curso.model';

@Injectable({ providedIn: 'root' })
export class CursoService {
  private readonly storageKey = 'cursos-crud-local';
  private readonly baseUrl =
    'https://crudcrud.com/api/TU_ENDPOINT_AQUI/cursos';

  constructor(private http: HttpClient) {}

  private get endpointConfigurado(): boolean {
    return !this.baseUrl.includes('TU_ENDPOINT_AQUI');
  }

  private getCursosLocales(): Curso[] {
    try {
      const data = localStorage.getItem(this.storageKey);
      return data ? (JSON.parse(data) as Curso[]) : [];
    } catch {
      return [];
    }
  }

  private guardarCursosLocales(cursos: Curso[]): void {
    localStorage.setItem(this.storageKey, JSON.stringify(cursos));
  }

  private generarId(): string {
    if (typeof crypto !== 'undefined' && 'randomUUID' in crypto) {
      return crypto.randomUUID();
    }
    return `curso-${Date.now()}-${Math.random().toString(16).slice(2)}`;
  }

  listar(): Observable<Curso[]> {
    if (!this.endpointConfigurado) {
      return of(this.getCursosLocales());
    }

    return this.http.get<Curso[]>(this.baseUrl).pipe(
      catchError(() => of(this.getCursosLocales()))
    );
  }

  obtener(id: string): Observable<Curso> {
    if (!this.endpointConfigurado) {
      const curso = this.getCursosLocales().find((item) => item._id === id);
      return of(curso as Curso);
    }

    return this.http.get<Curso>(`${this.baseUrl}/${id}`).pipe(
      catchError(() => of(this.getCursosLocales().find((item) => item._id === id) as Curso))
    );
  }

  crear(curso: Curso): Observable<Curso> {
    const { _id, ...data } = curso;

    if (!this.endpointConfigurado) {
      const nuevoCurso: Curso = {
        ...data,
        _id: this.generarId(),
      };
      const cursos = this.getCursosLocales();
      this.guardarCursosLocales([...cursos, nuevoCurso]);
      return of(nuevoCurso);
    }

    return this.http.post<Curso>(this.baseUrl, data).pipe(
      catchError(() => {
        const nuevoCurso: Curso = {
          ...data,
          _id: this.generarId(),
        };
        const cursos = this.getCursosLocales();
        this.guardarCursosLocales([...cursos, nuevoCurso]);
        return of(nuevoCurso);
      })
    );
  }

  actualizar(id: string, curso: Curso): Observable<void> {
    const { _id, ...data } = curso;

    if (!this.endpointConfigurado) {
      const cursos = this.getCursosLocales().map((item) =>
        item._id === id ? { ...item, ...data, _id: id } : item
      );
      this.guardarCursosLocales(cursos);
      return of(undefined);
    }

    return this.http
      .put(`${this.baseUrl}/${id}`, data, { responseType: 'text' })
      .pipe(
        map(() => undefined),
        catchError(() => {
          const cursos = this.getCursosLocales().map((item) =>
            item._id === id ? { ...item, ...data, _id: id } : item
          );
          this.guardarCursosLocales(cursos);
          return of(undefined);
        })
      );
  }

  eliminar(id: string): Observable<void> {
    if (!this.endpointConfigurado) {
      const cursos = this.getCursosLocales().filter((item) => item._id !== id);
      this.guardarCursosLocales(cursos);
      return of(undefined);
    }

    return this.http
      .delete(`${this.baseUrl}/${id}`, { responseType: 'text' })
      .pipe(
        map(() => undefined),
        catchError(() => {
          const cursos = this.getCursosLocales().filter((item) => item._id !== id);
          this.guardarCursosLocales(cursos);
          return of(undefined);
        })
      );
  }
}
